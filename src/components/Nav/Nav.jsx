import { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as S from './Nav.styled';
import UserLoggedIn from './UserLoggedIn';
import logo from '../../assets/icons/logo.svg';

const Nav = () => {
  const [isNavFixed, setIsNavFixed] = useState(true);
  const navRef = useRef();
  const { pathname } = useLocation();

  const currentPageIsFolderPage = useCallback(() => {
    const isFolderPage = pathname === '/folder';
    setIsNavFixed(isFolderPage);
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleNavigation = () => {
    if (!navRef.current) return;
    const navNode = navRef.current;

    if (window.scrollY > 30) {
      navNode.classList.add('shadow');
      return;
    }

    navNode.classList.remove('shadow');
  };

  useEffect(() => {
    window.addEventListener('scroll', handleNavigation);
    currentPageIsFolderPage();
    return () => {
      window.removeEventListener('scroll', handleNavigation);
    };
  }, [pathname, currentPageIsFolderPage]);

  return (
    <>
      {isNavFixed ? (
        <S.HeaderLayout>
          <S.LogoBox>
            <Link to='/'>
              <img src={logo} alt='Linkbrary' />
            </Link>
          </S.LogoBox>
          <UserLoggedIn />
        </S.HeaderLayout>
      ) : (
        <S.HeaderLayout ref={navRef}>
          <S.LogoBox>
            <Link to='/'>
              <img src={logo} alt='Linkbrary' />
            </Link>
          </S.LogoBox>
          <UserLoggedIn />
        </S.HeaderLayout>
      )}
    </>
  );
};

export default Nav;
