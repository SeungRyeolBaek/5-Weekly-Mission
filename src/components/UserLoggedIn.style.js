import styled from 'styled-components';
import Button from './Button.style';

export const Login = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 10px;

  > img {
    width: 28px;
    height: 28px;
    border-radius: 50%;
  }
`;

export const UserProfile = styled.a`
  @media (max-width: 767px) {
    display: none;
  }
`;

export const LoginButton = styled(Button)`
  padding: 15px 40px;
`;
