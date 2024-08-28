import React, { useCallback, useState } from 'react';
import Icon from '../icon/icon';
import DropDown from '../dropDown/dropDown';
import Modal from '../modal/modal';
import LabelModal from '../modalComponent/labelModal';
import { InnerDiv, ItemDiv, Name } from './style';
import { colors } from '@/styles/colors';
import LabelSvgIcon from '@/assets/icons/labelIcons';
import { LabelData } from '@/utils/dataTypes';

interface Props {
  label: string;
  iconName: string;
  labelId: string;
  currentOpenDropdown?: string | null;
  dropdownIdentifier?: string;
  // eslint-disable-next-line no-unused-vars
  setOpenDropdown: (dropdown: string | null) => void;
}
function LabelCard({
  label,
  iconName,
  labelId,
  dropdownIdentifier,
  currentOpenDropdown,
  setOpenDropdown,
}: Props) {
  const [labelModal, setLabelModal] = useState(false);
  const [updateLabelData, setUpdateLabelData] = useState<LabelData>();

  const dropDownItem = [
    { name: 'Edit', icon: 'edit-icon' },
    { name: 'Delete', icon: 'delete-icon', isDelete: true },
  ];

  const onCloseLabelModal = useCallback(() => {
    setLabelModal(false);
  }, []);

  const onOpenLabelModal = useCallback(() => {
    setLabelModal(true);
  }, []);

  const handleLabel = (labelData: LabelData) => {
    setUpdateLabelData(labelData);
  };

  const handleClickIcon = useCallback(() => {
    const identifier = `${dropdownIdentifier}-label`;
    setOpenDropdown(currentOpenDropdown === identifier ? null : identifier);
  }, [dropdownIdentifier, currentOpenDropdown, setOpenDropdown]);
  return (
    <>
      <ItemDiv>
        <InnerDiv>
          <LabelSvgIcon
            name={iconName}
            width='16'
            height='16'
            viewBox='0 0 12 12'
            fill={colors.icon}
          />
          <Name>{label}</Name>
        </InnerDiv>
        <div style={{ position: 'relative' }} className='tag-div'>
          <Icon
            onClick={handleClickIcon}
            iconName='three-dot-icon'
            iconSize='16'
            iconViewBox='0 0 16 16'
            size={true}
          />
          {currentOpenDropdown === `${dropdownIdentifier}-label` && (
            <DropDown
              items={dropDownItem}
              iconSize={'12'}
              iconViewBox={'0 0 12 12'}
              labelData={{ labelId, label, icon: iconName }}
              handleLabel={handleLabel}
              onClose={() => {
                setOpenDropdown(null);
              }}
              style={{ right: 0, width: 116, zIndex: 1 }}
              onChange={(item) => {
                if (!item.isDelete) {
                  onOpenLabelModal();
                }
              }}
            />
          )}
        </div>
      </ItemDiv>
      <Modal open={labelModal} onClose={onCloseLabelModal}>
        <LabelModal labelData={updateLabelData} onClose={onCloseLabelModal} />
      </Modal>
    </>
  );
}

export default LabelCard;
