import {
  Laptop,
  Video,
  Home as HomeIcon,
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

      {/* HERO SECTION */}
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
            <p>Attend classes from home or while traveling.</p>
          </div>

          <div className="benefit-card icon-card">
            <Video size={60} strokeWidth={1.5} className="icon" />
            <h3>Live + Recorded Lessons</h3>
            <p>Rewatch lectures anytime for revision & clarity.</p>
          </div>

          <div className="benefit-card icon-card">
            <HomeIcon size={60} strokeWidth={1.5} className="icon" />
            <h3>Comfort & Focus</h3>
            <p>Study in a peaceful and personal environment.</p>
          </div>

        </div>
      </section>

      {/* BENEFITS OF OFFLINE */}
      <section id="benefits-offline" className="section benefits">
        <h2>Benefits of Offline Learning</h2>

        <div className="benefits-container">

          <div className="benefit-card icon-card">
            <BookOpen size={60} strokeWidth={1.5} className="icon" />
            <h3>Direct Teacher Help</h3>
            <p>Get answers instantly with face-to-face guidance.</p>
          </div>

          <div className="benefit-card icon-card">
            <School size={60} strokeWidth={1.5} className="icon" />
            <h3>Structured Routine</h3>
            <p>A proper schedule builds strong study habits.</p>
          </div>

          <div className="benefit-card icon-card">
            <Users size={60} strokeWidth={1.5} className="icon" />
            <h3>Peer Group Motivation</h3>
            <p>Study with others for confidence and teamwork.</p>
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
            <h4>Follow Us</h4>
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
