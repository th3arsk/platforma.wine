import logo1 from '../images/unite__logo1.svg'
import logo2 from '../images/unite__logo2.svg'
import logo3 from '../images/unite__logo3.svg'

function Unite() {
  return <section className="unite">
    <h2 className="unite__heading">PLATFORMA объединяет</h2>
    <div className="unite__info">
      <div className="unite__card">
        <img className="unite__card-logo" alt="Логотип" src={logo1} />
        <h3 className="unite__card-title">Продавцов</h3>
        <p className="unite__card-text">Выставляют свои товары на торги</p>
      </div>
      <div className="unite__card">
        <img className="unite__card-logo" alt="Логотип" src={logo2} />
        <h3 className="unite__card-title">Дистрибьюторов</h3>
        <p className="unite__card-text" style={{width:376}}>Создают торги на продажу и покупку и обеспечивать логистику другим участникам</p>
      </div>
      <div className="unite__card">
        <img className="unite__card-logo" alt="Логотип" src={logo3} />
        <h3 className="unite__card-title">Покупателей</h3>
        <p className="unite__card-text">Создают торги на закупку</p>
      </div>
    </div>
    
  </section>
}
    
  
 export default Unite;