import * as S from './Search.style';
import searchIcon from '../assets/icons/search.svg';

function Search() {
  return (
    <S.Helper>
      <S.FormBox>
        <S.Form>
          <button>
            <img src={searchIcon} alt="검색 돋보기 아이콘" />
          </button>
          <input id="search" placeholder="링크를 검색해 보세요." />
        </S.Form>
      </S.FormBox>
    </S.Helper>
  );
}

export default Search;
