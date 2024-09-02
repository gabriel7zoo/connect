import React, { ChangeEvent, useCallback, useState } from 'react';
import Input from '../input/input';
import RichTextBox from '../commentBox';
import Button from '../button/button';
import { BottomDiv, Header, Label, MainDiv } from './style';
import { useStores } from '@/stores';
import { createMacros } from '@/services/clientSide/settingServices';

interface Props {
  onClose: () => void;
}
function MacroModal({ onClose }: Props) {
  // Create new label and update label
  const { settingStore } = useStores();
  const { loading } = settingStore;
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleMacrosSubmit = useCallback(
    async (e: React.SyntheticEvent, title: string, description: string) => {
      e.preventDefault();
      const payload = { content: description, title };
      settingStore.setLoading(true);
      try {
        const result = await createMacros(payload);
        if (result) {
          settingStore.addMacros(result);
        }
      } catch (e) {
        console.log('Error : ', e);
      } finally {
        settingStore.setLoading(false);
        onClose();
      }
    },
    [title, description, settingStore, onClose],
  );

  return (
    <MainDiv className='macro-main-div'>
      <Header>Edit Macro</Header>
      <BottomDiv
        onSubmit={(e: React.SyntheticEvent) =>
          handleMacrosSubmit(e, title, description)
        }
      >
        <div className='content'>
          <div>
            <Label>Title</Label>
            <Input
              placeholder={'Enter the title'}
              className='input'
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setTitle(e.target.value)
              }
              value={title}
            />
          </div>
          <div className='text-field'>
            <Label>Description</Label>
            <RichTextBox
              isApplyMaxHeight={412}
              isApplyMinHeight={412}
              isInlineToolbar={false}
              className='rich-text'
              placeholder='Enter description'
              valueContent={description}
              setValueContent={setDescription}
            />
          </div>
        </div>
        <div className='button'>
          <Button
            title='Cancel'
            secondary={true}
            onClick={onClose}
            variant='medium'
            isLoading={loading}
          />
          <Button title='Save' variant='medium' />
        </div>
      </BottomDiv>
    </MainDiv>
  );
}

export default MacroModal;
