import styled from 'styled-components';
import { GRAY4, PRIMARY, WHITE } from '../color';
import Add from '../../asset/add.svg';
import AddWhite from '../../asset/addWhite.svg';
import FolderNameBar from './FolderNameBar';

const Block = styled.button`
  display: flex;
  align-items: center;
  height: 35px;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 8px 12px;
  border-radius: 5px;
  border: 1px solid ${PRIMARY};
  background: #fff;

  &:hover {
    background-color: ${GRAY4};
    transition: all 300ms ease-in-out;
  }

  @media (max-width: 767px) {
    padding: 6px 10px;
    font-size: 14px;
    height: 29px;
  }

  ${({ $clicked }) =>
    $clicked &&
    `background-color: ${PRIMARY};
  color: ${WHITE};
  &:hover{
    background-color: ${PRIMARY};
  }`}
`;

const FolderList = styled.ul`
  display: flex;
  gap: 12px 8px;
  flex-wrap: wrap;
`;

const Bar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const AddFolder = styled.button`
  color: ${PRIMARY};
  display: flex;
  align-items: center;
  font-family: Pretendard;
  flex-shrink: 0;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.3px;

  &::after {
    content: '';
    background-image: url(${Add});
    background-size: cover;
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-left: 4px;
  }

  @media (max-width: 767px) {
    color: ${WHITE};
    padding: 8px 24px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 101px;
    border-radius: 20px;
    border: 1px solid ${WHITE};
    background: ${PRIMARY};

    &::after {
      background-image: url(${AddWhite});
    }
  }
`;

const FolderBlock = ({ item, clicked, children }) => {
  return (
    <Block name={item.id} $clicked={clicked} type="button">
      {children}
    </Block>
  );
};

const FolderIndex = ({ items, onClick, selectedId }) => {
  return (
    <FolderList onClick={onClick}>
      <li key={-1}>
        <FolderBlock item={{ id: '-1' }} clicked={selectedId ? false : true}>
          전체
        </FolderBlock>
      </li>
      {items?.map(function (item) {
        let clicked;
        if (item?.id === selectedId) {
          clicked = true;
        } else {
          clicked = false;
        }
        return (
          <li key={item?.id}>
            <FolderBlock item={item} clicked={clicked}>
              {item?.name}
            </FolderBlock>
          </li>
        );
      })}
    </FolderList>
  );
};

function FolderBar({ folderInfo, onClick, selectedFolder }) {
  const selectedId = Number(selectedFolder?.id);

  return (
    <>
      <Bar>
        <FolderIndex
          onClick={onClick}
          items={folderInfo?.data}
          selectedId={selectedId}
        />
        <AddFolder type="button">폴더 추가</AddFolder>
      </Bar>
      <FolderNameBar selectedFolder={selectedFolder} />
    </>
  );
}

export default FolderBar;
