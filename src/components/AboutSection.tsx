import certificate from '../assets/certificate.jpeg'
import certificate1 from '../assets/certificate1.jpeg'
import certificate2 from '../assets/certificate2.jpeg'
import certificate3 from '../assets/certificate3.jpeg'
import certificate4 from '../assets/certificate4.jpeg'
import certificate5 from '../assets/certificate5.jpeg'
import './about.css'
import { States } from './States';
export function AboutSection(){

  const certificates = [certificate, certificate1, certificate5, certificate3, certificate4, certificate2];

  const scrollingCertificates = [...certificates, ...certificates];
  return(
    <>
      <section id="about">
      <title>about</title>
        <div>
          <States />
        </div>

          <h1 id="title">certificates </h1>
        
        <div className="certificates">
          <div className="scroll">
            {scrollingCertificates.map((cert, index) => (
            <img key={index} src={cert} alt={`Certificate ${index + 1}`} />
            ))}
          </div>
        </div>
      </section>
        
    </>
  )
}