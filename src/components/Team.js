import img from '../images/member-img.png'

function Team() {
  return <section className="team">
    <h2 className="team__heading">Команда проекта</h2>
    <div className="team__items">
      <div className="team__member">
        <div className="team__member-image">
          <img alt="" src={img} />
        </div>
        <p className="team__member-name">Артур Саркисян</p>
        <p className="team__member-about">Президент Союза сомелье и экспертов России</p>
      </div>
      <div className="team__member">
        <div className="team__member-image">
          <img alt="" src={img} />
        </div>
        <p className="team__member-name">Артур Саркисян</p>
        <p className="team__member-about">Президент Союза сомелье и экспертов России</p>
      </div>
      <div className="team__member">
        <div className="team__member-image">
          <img alt="" src={img} />
        </div>
        <p className="team__member-name">Артур Саркисян</p>
        <p className="team__member-about">Президент Союза сомелье и экспертов России</p>
      </div>
    </div>
        
  </section>
}
        
export default Team;