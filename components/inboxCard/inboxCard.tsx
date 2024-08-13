/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import moment from 'moment';
import Avatar from '../avtar/Avtar';
import DropDownWithTag from '../dropDownWithTag/dropDownWithTag';
import {
  CardDiv,
  DesTitle,
  DotIcon,
  LeftDiv,
  NameText,
  RightDiv,
  StatusMainDiv,
} from './style';
import { labelItem, priorityItem } from '@/helpers/raw';
import { capitalizeString } from '@/helpers/common';
import { useStores } from '@/stores';
import { TicketDetailsInterface } from '@/utils/appTypes';
import { updateTicketDetails } from '@/services/clientSide/ticketServices';

interface Props {
  ticketDetail: TicketDetailsInterface;
  description: string;
  showDotIcon?: boolean;
  src: string;
  currentOpenDropdown: string | null;
  setCurrentOpenDropdown: (dropdown: string | null) => void;
  dropdownIdentifier: string;
  loadData: () => void;
  ticketIndex: number;
}

export default function InboxCard({
  ticketDetail,
  description,
  showDotIcon = false,
  src,
  currentOpenDropdown,
  setCurrentOpenDropdown,
  dropdownIdentifier,
  ticketIndex,
}: Props) {
  const { title, created_at, source, contact, priority } = ticketDetail;
  const router = useRouter();
  const { ticketStore, workspaceStore } = useStores();
  const { currentWorkspace } = workspaceStore;

  const handleDropdownClick = (dropdown: string) => {
    const identifier = `${dropdownIdentifier}-${dropdown}`;
    setCurrentOpenDropdown(
      currentOpenDropdown === identifier ? null : identifier,
    );
  };

  const [submenuPosition, setSubmenuPosition] = useState<
    'upwards' | 'downwards'
  >('upwards');

  const handleMouseEnter = (
    e: React.MouseEvent<HTMLElement>,
    setPosition: (position: 'upwards' | 'downwards') => void,
  ) => {
    const triggerElement = e.currentTarget;
    const rect = triggerElement.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;

    if (spaceBelow < 200 && spaceAbove > 200) {
      setPosition('upwards');
    } else {
      setPosition('downwards');
    }
  };

  const assignItem = [
    { name: 'Unassigned', icon: 'dropdown-unassign-icon' },
    ...((currentWorkspace as any)?.users?.map((user: any) => ({
      name: user.display_name,
      src: '',
      isName: true,
    })) || []),
  ];
  const onClickTicket = useCallback(() => {
    ticketStore.setTicketDetails(ticketDetail);
    router.push(`/details/${ticketDetail?.id}`);
  }, []);

  const onChangePriority = useCallback(async (item: any) => {
    const payload = { priority: item?.value };
    try {
      const updatedTicketDetails = {
        ...(ticketDetail || {}),
        priority: item?.value,
      };
      ticketStore.updateTicketListItem(ticketIndex, updatedTicketDetails);
      await updateTicketDetails(ticketDetail?.id, payload);
    } catch (e) {
      console.log('Error : ', e);
    }
  }, []);

  return (
    <CardDiv onClick={onClickTicket}>
      {showDotIcon && <DotIcon />}
      <LeftDiv>
        <div>
          <Avatar
            size={28}
            imgSrc={src}
            name={contact?.name || ''}
            isShowBorder={true}
          />
          <NameText>
            {contact?.name} from {capitalizeString(source)}
          </NameText>
        </div>
        <NameText>{moment(created_at).fromNow()}</NameText>
      </LeftDiv>
      <RightDiv>
        <DesTitle>{title}</DesTitle>
        <NameText className='description'>{description}</NameText>
        <StatusMainDiv>
          <DropDownWithTag
            onClick={() => handleDropdownClick('label')}
            title={'Bug'}
            iconName={'bug-icon'}
            dropdownOpen={currentOpenDropdown === `${dropdownIdentifier}-label`}
            onClose={() => setCurrentOpenDropdown(null)}
            items={labelItem}
            onChange={() => {}}
            isTag={true}
            isSearch={true}
            isCheckbox={true}
            isActive={true}
            className={
              submenuPosition === 'upwards'
                ? 'submenu-upwards'
                : 'submenu-downwards'
            }
            onMouseEnter={(e: any) => handleMouseEnter(e, setSubmenuPosition)}
          />
          <DropDownWithTag
            onClick={() => handleDropdownClick('priority')}
            title={'Priority'}
            iconName={`priority-${priority}`}
            dropdownOpen={
              currentOpenDropdown === `${dropdownIdentifier}-priority`
            }
            onClose={() => setCurrentOpenDropdown(null)}
            items={priorityItem}
            onChange={onChangePriority}
            isTag={true}
            isActive={true}
            selectedValue={{ name: priority }}
            className={
              submenuPosition === 'upwards'
                ? 'submenu-upwards'
                : 'submenu-downwards'
            }
            onMouseEnter={(e: any) => handleMouseEnter(e, setSubmenuPosition)}
          />
          <DropDownWithTag
            onClick={() => handleDropdownClick('assign')}
            title={'Sanjay M.'}
            dropdownOpen={
              currentOpenDropdown === `${dropdownIdentifier}-assign`
            }
            onClose={() => setCurrentOpenDropdown(null)}
            items={assignItem}
            onChange={() => {}}
            isTag={true}
            isSearch={true}
            isActive={true}
            isName={true}
            iconSize='20'
            iconViewBox='0 0 20 20'
            className={
              submenuPosition === 'upwards'
                ? 'submenu-upwards'
                : 'submenu-downwards'
            }
            onMouseEnter={(e: any) => handleMouseEnter(e, setSubmenuPosition)}
            src='https://firebasestorage.googleapis.com/v0/b/teamcamp-app.appspot.com/o/UserProfiles%2FUntitled1_1701236653470.jpg?alt=media&token=8bc07cdb-5fcc-4c69-8e0d-c9978b94b3e4'
          />
        </StatusMainDiv>
      </RightDiv>
    </CardDiv>
  );
}
