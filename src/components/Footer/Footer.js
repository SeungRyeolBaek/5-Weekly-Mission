import facebookLogo from '../../assets/images/facebook_logo.svg';
import twitterLogo from '../../assets/images/twitter_logo.svg';
import youtubeLogo from '../../assets/images/youtube_logo.svg';
import instagramLogo from '../../assets/images/instagram_logo.svg';
export default function Footer() {
  return (
    <footer>
      <div class='footer-bar'>
        <div class='copyright'>©codeit - 2023</div>
        <div class='policy-bar'>
          <a href='#'>Privacy Policy</a>
          <a href='#'>FAQ</a>
        </div>
        <div class='info-link-bar'>
          <ul>
            <li>
              <a href='#' target='_blank' rel='noreferrer noopener'>
                <img src={facebookLogo} alt='Facebook link logo' />
              </a>
            </li>
            <li>
              <a href='#' target='_blank' rel='noreferrer noopener'>
                <img src={twitterLogo} alt='Twitter link logo' />
              </a>
            </li>
            <li>
              <a href='#' target='_blank' rel='noreferrer noopener'>
                <img src={youtubeLogo} alt='Youtube link logo' />
              </a>
            </li>
            <li>
              <a href='#' target='_blank' rel='noreferrer noopener'>
                <img src={instagramLogo} alt='Instagram link logo' />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
