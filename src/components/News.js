import img1 from '../images/news1.png'
import img2 from '../images/news2.png'

function News() {
  return <section className="news">
    <h2 className="news__heading">Наши последние новости</h2>
    <div className="news__items">
      <div className="news__article">
        <div className="news__picture">
          <img alt="" src={img1} />
        </div>
        <p className="news__date">21.01.2021</p>
        <p className="news__title">Название новости</p>
        <p className="news__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className="news__article">
        <div className="news__picture">
          <img alt="" src={img2} />
        </div>
        <p className="news__date">21.01.2021</p>
        <p className="news__title">Название новости</p>
        <p className="news__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
          
  </section>
}
        
export default News;