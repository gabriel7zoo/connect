import styled from 'styled-components';
import { Typography } from '@/styles/typography';

const MainDiv = styled.div`
  padding-left: 22px;
  margin-left: 10px;
  position: relative;
  .emoji-icon {
    display: none;
  }
  &:hover {
    .emoji-icon {
      display: flex;
    }
  }
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  p {
    cursor: pointer;
    background-color: var(--bg-surface-secondary);
    ${Typography.body_md_regular};
    color: var(--text);
    border-radius: 8px;
    word-wrap: break-word;
    max-width: 536px;
    .message {
      padding: 6px 12px;
    }
    div {
      white-space: normal;
      p {
        padding: 0;
        span {
          white-space: inherit;
          color: var(--text);
        }
        br {
          display: none;
        }
      }
    }
  }
  span {
    ${Typography.body_md_regular};
    color: var(--text-text-secondary);
    white-space: nowrap;
  }
`;

const IconDiv = styled.div`
  width: 24px;
  height: 24px;
  box-shadow: var(--shadow-card);
  background-color: var(--bg-white);
  border-radius: 30px;
  position: absolute;
  bottom: -16px;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 35px;
  svg {
    fill: var(--icon);
  }
  &:hover {
    background-color: var(--bg-surface-hover);
    svg {
      fill: var(--icon-hover);
    }
  }
`;

const ReactionsMainDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding-left: 32px;
  padding-top: 6px;
`;

const ReactionCard = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  background-color: var(--bg-surface-secondary);
  padding: 2px 8px;
  border-radius: 30px;
  cursor: pointer;
  p {
    ${Typography.body_sm_regular};
    color: var(--text-text-secondary);
  }
  &:hover {
    background-color: var(--bg-surface-secondary-hover);
    p {
      color: var(--text);
    }
  }
`;

const Emoji = styled.div`
  ${Typography.body_md_regular};
`;

const AddReactionButton = styled.div`
  width: 24px;
  height: 24px;
  background-color: var(--bg-surface-secondary);
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg {
    fill: var(--icon);
  }
  &:hover {
    background-color: var(--bg-surface-secondary-hover);
    svg {
      fill: var(--icon-hover);
    }
  }
`;
const AttachmentMainDiv = styled.div`
  border-top: var(--border-secondary);
  padding: 6px 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

const Title = styled.div`
  ${Typography.body_md_medium};
  color: var(--text);
`;

const DownloadButton = styled.div`
  ${Typography.body_md_medium};
  color: var(--text);
  cursor: pointer;
`;

const FileCardMainDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`;

export {
  MainDiv,
  Div,
  IconDiv,
  ReactionCard,
  ReactionsMainDiv,
  Emoji,
  AddReactionButton,
  AttachmentMainDiv,
  TitleDiv,
  Title,
  DownloadButton,
  FileCardMainDiv,
};
