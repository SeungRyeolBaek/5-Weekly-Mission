import * as S from './AddLink.styled';
import LinkIcon from '../../assets/icons/link.svg';
import { useCallback, useState } from 'react';
import Modal from '../Modal/Modal';

const AddLink = () => {
  const [isModalTrigger, setIsModalTrigger] = useState(false);

  const changeTrigger = useCallback(() => {
    setIsModalTrigger((prevBoolean) => !prevBoolean);
  }, []);

  return (
    <S.AddLinkLayout>
      <S.FormContainer>
        <S.FormBox>
          <S.IconImg src={LinkIcon} alt='' />
          <S.StyledInput placeholder='링크를 추가해 보세요' />
          <S.StyledButton
            type='button'
            text='추가하기'
            onClick={changeTrigger}
          />
        </S.FormBox>
      </S.FormContainer>
      {isModalTrigger && (
        <Modal variant={'addFolder'} onClick={changeTrigger} />
      )}
    </S.AddLinkLayout>
  );
};

export default AddLink;
