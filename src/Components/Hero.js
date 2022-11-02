import heroLogo from "../Images/Group 77.png";
import "./Hero.css";
export default function Hero() {
  return (
    <section className="hero">
      <img className="hero--logo" src={heroLogo} alt="hero-logo" />
      <div>
        <h1 className="hero--header">Online Experience</h1>
        <p className="hero--text">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
  );
}
