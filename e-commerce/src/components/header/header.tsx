import Navigation from '../navigation/navigation';
/* SVG */
import Logo from '../../assets/img/icons/Logo-header.svg';
import Favorite from '../../assets/img/icons/frame.svg';
import Basket from '../../assets/img/icons/backet.svg';
import Profile from '../../assets/img/icons/profile.svg';

function Header() {
  return (
    <header className="container header">
      <div className="header__top wrapper">
        <div className="header__top-item">
          Скидка 10% по промокоду “ZAMOK” на все заказы до 10.09
        </div>
        <a className="header__top-item" href="tel:+79665588499">
          Обратный звонок
        </a>
      </div>
      <div className="header__bottom wrapper">
        <div className="header__bottom-item">
          <img className="header__bottom-logo" src={Logo} alt="logo" />
          <Navigation />
        </div>
        <div className="header__bottom-item">
          <a className="header__bottom-tel" href="tel:+79665588499">
            +7 (966) 55 88 499
          </a>
          <img className="header__bottom-icon" src={Favorite} alt="favorite" />
          <img className="header__bottom-icon" src={Basket} alt="basket" />
          <img className="header__bottom-icon" src={Profile} alt="profile" />
        </div>
      </div>
    </header>
  );
}

export default Header;
