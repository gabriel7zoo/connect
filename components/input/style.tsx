import styled, { css } from 'styled-components';
import { colors } from '@/styles/colors';
import { Typography } from '@/styles/typography';
interface Props {
  hasError?: boolean;
  login?: boolean;
  onChange?: () => void;
  disabled?: boolean;
  isIcon?: boolean;
  variant?: 'large' | 'medium' | 'small';
}
const InputDiv = styled.div<Props>`
  display: flex;
  align-items: center;
  gap: 8px;
  svg {
    position: absolute;
  }
`;

const InputBox = styled.input<Props>`
  width: 100%;
  border-radius: 20px;
  padding: 8px 16px;
  border: var(--border-secondary);
  background: transparent;
  color: ${colors.text};
  ${Typography.body_md_medium};
  ${(props) =>
    props.variant === 'large' &&
    css`
      ${Typography.body_md_medium};
      padding: 8px 16px;
    `}
  ${(props) =>
    props.variant === 'medium' &&
    css`
      ${Typography.body_sm_medium};
      padding: 8px 16px;
    `}

  &:focus-visible {
    outline: none;
  }
  &::placeholder {
    color: ${colors.text_text_secondary};
  }
  &:focus {
    border: var(--border-primary);
  }
  ${(props) =>
    props.hasError &&
    css`
      &:focus {
        border: var(--border-danger);
      }
      border: var(--border-danger);
      color: ${colors.text};
      &::placeholder {
        color: ${colors.text_text_secondary};
      }
    `}
  ${(props) =>
    props.disabled &&
    css`
      &::placeholder {
        color: ${colors.text_disabled};
      }
      border: var(--border-disabled);
    `}
  ${(props) =>
    props.isIcon &&
    css`
      margin-left: 8px;
    `}
`;
const Errormessage = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  p {
    margin: 0;
    color: ${colors.fill_danger};
    ${Typography.body_md_regular};
  }
`;
const Maindiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;
`;
export { InputDiv, InputBox, Errormessage, Maindiv };
