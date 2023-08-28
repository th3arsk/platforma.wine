import image from '../images/Window-Frame.png'
import logo1 from '../images/choose-img1.svg'
import logo2 from '../images/choose-img2.svg'
import logo3 from '../images/choose-img3.svg'
import logo4 from '../images/choose-img4.svg'

function Choose() {
  return <section className="choose">
    <h2 className="choose__heading">Почему выбирают платформу?</h2>
    <div className="choose__items">
      <img alt="Картинка" className="choose__window" src={image} />
      <img alt="Логотип" className="choose__logo choose__logo_1" src={logo1} />
      <img alt="Логотип" className="choose__logo choose__logo_2" src={logo2} />
      <img alt="Логотип" className="choose__logo choose__logo_3" src={logo3} />
      <img alt="Логотип" className="choose__logo choose__logo_4" src={logo4} />
      <p className="choose__reason choose__reason_1">Повышение финансовой эффективности продаж</p>
      <p className="choose__reason choose__reason_2">Справедливое ценообразование на основании</p>
      <p className="choose__reason choose__reason_3">Синхронизация планов производителей и импортеров с клиентами</p>
      <p className="choose__reason choose__reason_4">Онлайн-аукцион готовой и даже не бутилированной продукции</p>
    </div>
  </section>
}
      
export default Choose;