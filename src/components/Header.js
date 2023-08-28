import logo from '../images/platforma-wine__logo.svg';
import bottle1 from '../images/bottle1.png';
import bottle2 from '../images/bottle2.png';

function Header() {
  return <header className="header">
    <section className="header__nav">
      <img src={logo} alt="Логотип" className="header__logo"/>
      <div className="header__routes">
        <p className="header__route">Экспертиза</p>
        <p className="header__route">Доп услуги</p>
        <p className="header__route">Новости</p>
        <p className="header__route">Клиенты</p>
        <p className="header__route">Реклама</p>
        <p className="header__route">Контакты</p>
      </div>
      <div className="header__register">
        <div className="header__sign-in header__button">Войти</div>
        <div className="header__sign-up header__button">Регистрация</div>
      </div>
    </section>
    <section className="header__text">
      <h1 className="header__heading">единая Торговая платформа винной продукции</h1>
      <p className="header__about">Продавайте или закупайте проверенную винную продукцию с рейтингом и гарантиями от PLATFORMA.WINE</p>
      <div className="header__join header__button">Присоединится</div>
    </section>
    <img src={bottle1} alt="Бутыль" className="header__bottle1"></img>
    <img src={bottle2} alt="Большая бутыль" className="header__bottle2"></img>
  </header>
}

export default Header;