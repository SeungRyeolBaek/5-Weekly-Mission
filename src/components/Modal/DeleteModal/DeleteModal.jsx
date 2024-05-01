import * as S from './DeleteModal.styled';
import closeIcon from '../../../assets/close.svg';

function DeleteModal({ setModal, folderName }) {
  return (
    <S.Background>
      <S.Body>
        <p>폴더 삭제</p>
        <span>{folderName}</span>
        <S.ModalButton onClick={(e) => e.preventDefault()}>
          삭제하기
        </S.ModalButton>
        <S.CloseIcon
          src={closeIcon}
          alt="닫기버튼"
          onClick={() => setModal(false)}
        />
      </S.Body>
    </S.Background>
  );
}

export default DeleteModal;
