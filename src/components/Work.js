import img1 from '../images/work-img1.png'
import img2 from '../images/work-img2.svg'
import img3 from '../images/work-img3.svg'
import img4 from '../images/work-img4.svg'
import img5 from '../images/work-img5.svg'
import img6 from '../images/work-img6.svg'

function Work() {
    return <section className="work">
      <h2 className="work__heading">Как работает PLATROFMA</h2>
      <div className="work__items">
        <div className="work__card">
          <div className="work__card-picture">
            <img src={img1} alt="" />
          </div>
          <p className="work__card-number">1</p>
          <h3 className="work__card-title">Выставление продукции</h3>
          <p className="work__card-text">Первый шаг добавить свою продукцию, если вы планируете продавать на платформе</p>
        </div>
        <div className="work__card">
          <div className="work__card-picture">
            <img src={img2} alt="" />
          </div>
          <p className="work__card-number">2</p>
          <h3 className="work__card-title">Экспертиза</h3>
          <p className="work__card-text">В торгах могут участвовать только товары прошедшие экспертизу</p>
        </div>
        <div className="work__card">
          <div className="work__card-picture">
            <img src={img3} alt="" />
          </div>
          <p className="work__card-number">3</p>
          <h3 className="work__card-title">Торги</h3>
          <p className="work__card-text">Прикрепите свои товары на продажу к торгам или расскажите, что планируете закупить. Торги работают по классической аукционной схеме.</p>
        </div>
        <div className="work__card">
          <div className="work__card-picture">
            <img src={img4} alt="" />
          </div>
          <p className="work__card-number">4</p>
          <h3 className="work__card-title">Дистрибьютор</h3>
          <p className="work__card-text">Если у вас нет своего дистрибьютора, вам достаточно выбрать одного из уже подключенных к платформе и закрыть вопрос логистики.</p>
        </div>
        <div className="work__card">
          <div className="work__card-picture">
            <img src={img5} alt="" />
          </div>
          <p className="work__card-number">5</p>
          <h3 className="work__card-title">Контроль</h3>
          <p className="work__card-text">По завершению торгов мы тщательно следим за выполнением обязательств всех сторон участвовавших в торгах. </p>
        </div>
        <div className="work__card">
          <div className="work__card-picture">
            <img src={img6} alt="Логотип" />
          </div>
          <p className="work__card-number">6</p>
          <h3 className="work__card-title">Присоединяйтесь</h3>
          <p className="work__card-text">Пройдите быструю регистрацию</p>
        </div>
        
      </div>
      
    </section>
  }
      
    
   export default Work;