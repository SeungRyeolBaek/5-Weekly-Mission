import styled from "styled-components";

const Button = styled.button`
  display: flex;
  width: 280px;
  padding: 16px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  color: #f5f5f5;
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
`;

const BlueButton = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

export default BlueButton;
