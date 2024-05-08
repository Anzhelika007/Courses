/* SVG */
import VK from '../../assets/img/icons/vk.svg';
import FB from '../../assets/img/icons/fb.svg';
import TW from '../../assets/img/icons/twitter.svg';
import Logo from '../../assets/img/icons/Logo-footer.svg';

function Footer() {
  return (
    <footer className="footer">
      <img className="footer-icon" src={Logo} alt="logo" />
      <img className="footer-icon" src={VK} alt="vk" />
      <img className="footer-icon" src={TW} alt="twetter" />
      <img className="footer-icon" src={FB} alt="facebook" />
    </footer>
  );
}

export default Footer;
