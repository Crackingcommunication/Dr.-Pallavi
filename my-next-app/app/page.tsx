import {
  Laptop,
  Video,
  Home,
  Users,
  School,
  BookOpen,
} from "lucide-react";

export default function Home() {
  return (
    <main>

      {/* NAVBAR */}
      <nav className="navbar">
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#benefits-online">Online</a></li>
          <li><a href="#benefits-offline">Offline</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* HERO SECTION — REAL RANDOM IMAGES */}
      <section id="hero" className="hero-carousel">
        <div className="slides">

          <div className="slide">
            <img src="https://source.unsplash.com/1200x700/?students,classroom" alt="Hero 1" />
          </div>

          <div className="slide">
            <img src="https://source.unsplash.com/1200x700/?teacher,education" alt="Hero 2" />
          </div>

          <div className="slide">
            <img src="https://source.unsplash.com/1200x700/?study,learning" alt="Hero 3" />
          </div>

        </div>
      </section>

      {/* BENEFITS OF ONLINE */}
      <section id="benefits-online" className="section benefits">
        <h2>Benefits of Online Learning</h2>

        <div className="benefits-container">

          <div className="benefit-card icon-card">
            <Laptop size={60} strokeWidth={1.5} className="icon" />
            <h3>Learn from Anywhere</h3>
            <p>Attend classes from your home or while traveling.</p>
          </div>

          <div className="benefit-card icon-card">
            <Video size={60} strokeWidth={1.5} className="icon" />
            <h3>Recorded + Live Classes</h3>
            <p>Rewatch lectures anytime for better revision.</p>
          </div>

          <div className="benefit-card icon-card">
            <Home size={60} strokeWidth={1.5} className="icon" />
            <h3>Comfort & Focus</h3>
            <p>Study in your own peaceful environment.</p>
          </div>

        </div>
      </section>

      {/* BENEFITS OF OFFLINE */}
      <section id="benefits-offline" className="section benefits">
        <h2>Benefits of Offline Learning</h2>

        <div className="benefits-container">

          <div className="benefit-card icon-card">
            <ChalkboardTeacher size={60} strokeWidth={1.5} className="icon" />
            <h3>Direct Teacher Support</h3>
            <p>Get help instantly, face to face.</p>
          </div>

          <div className="benefit-card icon-card">
            <School size={60} strokeWidth={1.5} className="icon" />
            <h3>Structured Routine</h3>
            <p>Class timing builds discipline and consistency.</p>
          </div>

          <div className="benefit-card icon-card">
            <Users size={60} strokeWidth={1.5} className="icon" />
            <h3>Peer Group Learning</h3>
            <p>Study along with others for better motivation.</p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <section id="contact" className="footer">
        <div className="footer-container">

          <div className="footer-col">
            <h3>Career Carnival Academy</h3>
            <p>Shaping confident, skilled, and successful learners.</p>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#benefits-online">Online</a></li>
              <li><a href="#benefits-offline">Offline</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <p>📍 Your City</p>
            <p>📞 +91 90000 00000</p>
            <p>✉️ info@careercarnival.com</p>
          </div>

          <div className="footer-col">
            <h4>Follow</h4>
            <p><a href="#">Instagram</a></p>
            <p><a href="#">Facebook</a></p>
            <p><a href="#">YouTube</a></p>
          </div>

        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} Career Carnival Academy · All Rights Reserved
        </div>
      </section>

    </main>
  );
}
