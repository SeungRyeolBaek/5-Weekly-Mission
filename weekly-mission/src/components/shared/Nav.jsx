import { Link } from "react-router-dom";
import LinkbraryImage from "../../../image/Linkbrary.png";
import profileImage from "../../../image/profileimg.jpg";
import styled from "styled-components";
import useFetchData from "../../hooks/useFetchData";
import Button from "./Button";

const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  top: 0;
  background-color: #f0f6ff;
  z-index: 2;
`;

const Gnb = styled.div`
  max-width: 1920px;
  padding: 0 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 94px;
  margin: 0;

  @media (max-width: 1199px) {
    max-width: 800px;
    padding: 0 32px;
  }

  @media (max-width: 769px) {
    min-width: 400px;
    padding: 0 32px;
  }
`;

const GnbLogo = styled.a`
  width: 133px;
  height: 24px;
  color: #6d6afe;
  font-weight: 800;
  text-decoration-line: none;
`;

const ProfileInfo = styled.div`
  display: flex;
  column-gap: 6px;
`;

const GnbButton = styled(Button)`
  width: 128px;
  height: 53px;
  padding: 16px 20px;
  font-size: 18px;
  font-weight: 600;
`;

const Nav = () => {
  const profileData = useFetchData(
    `${import.meta.env.VITE_BASE_URL}/sample/user`
  );

  return (
    <NavContainer>
      <Gnb>
        <GnbLogo href="index.html">
          <img src={LinkbraryImage} alt="Linkbrary Logo" />
        </GnbLogo>
        {profileData ? (
          <ProfileInfo>
            <img
              className="profile-image"
              src={profileImage}
              alt="프로필 이미지"
            />
            <span className="email">{profileData.email}</span>
          </ProfileInfo>
        ) : (
          <Link to="../../signin/signin.html">
            <GnbButton>로그인</GnbButton>
          </Link>
        )}
      </Gnb>
    </NavContainer>
  );
};

export default Nav;
