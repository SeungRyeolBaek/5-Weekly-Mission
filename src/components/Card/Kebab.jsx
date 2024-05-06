import { useLocation } from 'react-router-dom';
import kebobIcon from '../../assets/icons/kebab.svg';
import useToggle from '../../hooks/useToggle';
import * as S from './Kebab.styled';

const Kebab = ({ setDeleteModal, setAddModal }) => {
  const [value, toggle] = useToggle();
  const currentLocation = useLocation();

  if (currentLocation.pathname !== '/folder') {
    return;
  }

  const onClickKebabButton = (e) => {
    e.preventDefault();
    toggle();
  };

  const onModal = (setter) => {
    setter((prev) => !prev);
  };

  return (
    <S.KebabLayout onClick={onClickKebabButton}>
      <img src={kebobIcon} alt='케밥 버튼 아이콘' />
      {value && (
        <S.ModalLayout>
          <button type='button' onClick={() => onModal(setDeleteModal)}>
            삭제하기
          </button>
          <button type='button' onClick={() => onModal(setAddModal)}>
            폴더에 추가
          </button>
        </S.ModalLayout>
      )}
    </S.KebabLayout>
  );
};

export default Kebab;
