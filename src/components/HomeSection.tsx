import './home.css'
export function HomeSection(){
  return (
    <>
      <section id='home'>
        <div className="content">
          <h1>I’m Dagmawit Mesfin</h1>
          <p className='name'>Programmer | Web Developer | Problem Solver </p>
          <p className='slogan'>Elevate your brand with custom web solutions.
          Showcase <br />your story through clean code and innovative digital experiences
          <br /> "Turning ideas into clean code."</p>
          <div className="buttons">
            <a href="#contact" className="btn">Work with me</a>
            <a href="#projects" className="btn secondary">View My Work</a>
          </div>

        </div>
      </section>
    </>
  )
}