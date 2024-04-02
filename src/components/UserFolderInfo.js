import styled from 'styled-components';

const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 12px;

  & .Info_Img {
    width: 60px;
    height: 60px;
  }

  & .Info_nameSpan {
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    line-height: 24px;
  }
`;

const FolderName = styled.h2`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 40px;
  font-weight: 600;
  line-height: normal;
`;

const UserFolderInfo = ({ name, profileImg, folderName }) => {
  return (
    <>
      <Info>
        <img className="Info_Img" src={profileImg} alt="유저이미지" />
        <span className="Info_nameSpan">{name}</span>
      </Info>
      <FolderName>{folderName}</FolderName>
    </>
  );
};

export default UserFolderInfo;
