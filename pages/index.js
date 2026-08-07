export default function Home() {
  return (
    <div>
      <header className="site-header">
        <div className="container header-inner">
          <h1 className="brand">Rihaus</h1>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <h2>Design-led product studio</h2>
            <p>We craft digital products and experiences — strategy, design, and engineering under one roof.</p>
            <a className="cta" href="#contact">Start a project</a>
          </div>
        </section>

        <section id="about" className="container about">
          <h3>About Rihaus</h3>
          <p>Rihaus is a multidisciplinary studio focused on building compelling digital products. We work with startups and established companies to define product strategy, design interfaces, and ship quality software.</p>
        </section>

        <section id="services" className="container services">
          <h3>Services</h3>
          <div className="grid">
            <div className="card">
              <h4>Product Strategy</h4>
              <p>Research, discovery, and product roadmaps to align teams and customers.</p>
            </div>
            <div className="card">
              <h4>Design & UX</h4>
              <p>User research, interaction design, visual design, and prototypes.</p>
            </div>
            <div className="card">
              <h4>Engineering</h4>
              <p>Frontend and backend development, product engineering, and maintenance.</p>
            </div>
          </div>
        </section>

        <section id="work" className="container work">
          <h3>Selected Work</h3>
          <div className="projects">
            <div className="project">Project A</div>
            <div className="project">Project B</div>
            <div className="project">Project C</div>
          </div>
        </section>

        <section id="contact" className="container contact">
          <h3>Contact</h3>
          <p>Interested in working together? Email us at <a href="mailto:contact+rihaus@example.com">contact+rihaus@example.com</a> or use the form below.</p>
          <form className="contact-form" onSubmit={(e)=>{e.preventDefault();alert('Thanks — form submission is disabled in this scaffold.')}}>
            <input placeholder="Your name" required />
            <input placeholder="Email" type="email" required />
            <textarea placeholder="Tell us about your project" rows="4" required />
            <button type="submit">Send</button>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Rihaus — All rights reserved.</p>
        </div>
      </footer>

      <style jsx>{`
        .container{max-width:1100px;margin:0 auto;padding:20px}
        .site-header{background:#fff;border-bottom:1px solid #eee}
        .header-inner{display:flex;align-items:center;justify-content:space-between}
        .brand{font-weight:700}
        .nav a{margin-left:18px;color:#333;text-decoration:none}
        .hero{background:linear-gradient(135deg,#0ea5a4,#7c3aed);color:#fff;padding:80px 0;text-align:center}
        .hero h2{font-size:38px;margin:0 0 12px}
        .cta{display:inline-block;margin-top:16px;background:#fff;color:#111;padding:10px 18px;border-radius:6px;text-decoration:none}
        .about,.services,.work,.contact{padding:60px 0}
        .services .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:18px;margin-top:24px}
        .card{background:#fff;padding:18px;border-radius:8px;box-shadow:0 6px 18px rgba(0,0,0,0.06)}
        .projects{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px}
        .project{background:#f7f7f7;padding:40px;border-radius:8px;text-align:center}
        .contact-form{display:flex;flex-direction:column;gap:8px;max-width:600px}
        .contact-form input,.contact-form textarea{padding:10px;border:1px solid #ddd;border-radius:6px}
        .contact-form button{background:#111;color:#fff;padding:10px;border-radius:6px;border:0}
        .site-footer{background:#111;color:#fff;padding:20px;text-align:center}
        @media(max-width:600px){.hero h2{font-size:28px}}
      `}</style>
    </div>
  )
}
