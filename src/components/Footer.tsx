import "./footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; 

export function Footer() {
  return (
    <footer id="footer">
      <p className="footer-title">© {new Date().getFullYear()} Dagmawit Mesfin — All Rights Reserved.</p>
      <div className="socials">
        <a href="https://github.com/yourusername" target="_blank"><FaGithub /></a>
        <a href="https://linkedin.com/in/yourusername" target="_blank"><FaLinkedin /></a>
        <a href="mailto:Dagmawitmesfin27@gmail.com"><FaEnvelope /></a>
      </div>
    </footer>
  );
}
