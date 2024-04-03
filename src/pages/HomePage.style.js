import styled from 'styled-components';
import Button from '../components/Button.style';

export const Wrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  padding: 40px 0;
`;

export const StyledButton = styled(Button)`
  > a {
    color: var(--white-color);
  }
`;
