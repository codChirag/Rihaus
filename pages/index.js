import Head from 'next/head';

const highlights = [
  {
    title: 'Studio essentials',
    text: 'From sculptural outerwear to softly structured basics, each piece is designed to feel effortless and elevated.'
  },
  {
    title: 'Quiet luxury',
    text: 'Premium fabrics, precise tailoring, and a restrained palette built for everyday confidence.'
  },
  {
    title: 'Made for movement',
    text: 'The edit transitions seamlessly from city mornings to late-night plans with ease.'
  }
];

const collection = [
  {
    title: 'Sculpted Blazer',
    text: 'A sharply tailored jacket with softened shoulders and a relaxed silhouette for polished layering.',
    image: '/images/collection-1.jpg',
    alt: 'Sculpted blazer outfit'
  },
  {
    title: 'Drape Knit',
    text: 'An elevated knitwear essential with subtle texture and a fluid, effortless fit.',
    image: '/images/collection-2.jpg',
    alt: 'Drape knit sweater'
  },
  {
    title: 'Wide-leg Trouser',
    text: 'Clean lines, luxurious movement, and an easy balance between refined and relaxed.',
    image: '/images/collection-3.jpg',
    alt: 'Wide-leg trousers look'
  }
];

const lookbook = [
  {
    title: 'Modern Trench',
    text: 'A sculptural outer layer that balances architectural shape with soft tailoring.'
  },
  {
    title: 'Layered Slip',
    text: 'Minimal drape and subtle detail, made to move from day to evening.'
  },
  {
    title: 'Textured Knit',
    text: 'Luxurious yarn with a light hand and a refined, wearable silhouette.'
  }
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Rihaus | Contemporary Clothing, Reimagined</title>
        <meta
          name="description"
          content="Rihaus is a contemporary clothing label blending elevated essentials, refined tailoring, and modern style for every day."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="page-shell">
        <header className="topbar">
          <div className="brand">Rihaus</div>
          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#collection">Collection</a>
            <a href="#contact">Contact</a>
            <a href="/shop">Shop</a>
          </nav>
        </header>

        <main>
          <section className="hero">
            <div className="hero-copy">
              <p className="eyebrow">Contemporary clothing • designed to move</p>
              <h1>Rihaus reimagines everyday dressing with clean lines and refined ease.</h1>
              <p className="lead">
                A modern fashion label that blends sculptural silhouettes, premium fabrics, and the kind of versatility you reach for season after season.
              </p>
              <div className="hero-actions">
                <a className="button primary" href="/shop">Shop now</a>
                <a className="button secondary" href="#collection">Discover the collection</a>
                <a className="button secondary" href="#about">Our philosophy</a>
              </div>
            </div>
            <div className="hero-visual" aria-hidden="true">
              <img src="/images/hero-1.svg" alt="Rihaus fashion hero illustration" className="hero-image" />
            </div>
          </section>

          <section className="section intro" id="about">
            <div>
              <p className="eyebrow">A new standard</p>
              <h2>Crafted for personal style, shaped for real life.</h2>
            </div>
            <p>
              Rihaus brings together elevated essentials and expressive silhouettes, creating clothing that feels both polished and effortless. The result is a wardrobe built for confidence, movement, and everyday presence.
            </p>
          </section>

          <section className="section collection" id="collection">
            <div className="section-header">
              <p className="eyebrow">The collection</p>
              <h2>Essential pieces, designed for a quieter kind of luxury.</h2>
            </div>
            <div className="collection-grid">
              {collection.map((item) => (
                <article key={item.title} className="product-card">
                  <img src={item.image} alt={item.alt} className="product-image" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="section split story">
            <img src="/images/dress.jpg" alt="Rihaus dress feature" className="story-image" />
            <div className="story-copy">
              <p className="eyebrow">Craftsmanship</p>
              <h2>Purposeful design from material to silhouette.</h2>
              <p>
                Every Rihaus piece is considered from fabric selection to finish. The collection is built to feel refined, tactile, and easy to wear across your everyday movements.
              </p>
              <div className="story-notes">
                <span>Natural yarns with modern performance</span>
                <span>Tailoring that supports a relaxed yet intentional frame</span>
                <span>Muted tones curated for cohesive layering</span>
              </div>
            </div>
          </section>

          <section className="section lookbook" id="lookbook">
            <div className="section-header">
              <p className="eyebrow">Lookbook</p>
              <h2>Imagined for movement, captured in quiet detail.</h2>
            </div>
            <div className="lookbook-grid">
              {lookbook.map((item, index) => (
                <article key={item.title} className="lookbook-card">
                  <img src={`/images/lookbook-${index + 1}.jpg`} alt={item.title} className="lookbook-image" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="section newsletter">
            <div className="newsletter-copy">
              <p className="eyebrow">Stay in the edit</p>
              <h2>Join the Rihaus list for new drops and exclusive access.</h2>
            </div>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="emailInput" className="sr-only">Email</label>
              <input id="emailInput" type="email" placeholder="Enter your email" required />
              <button type="submit" className="button primary">Join the list</button>
            </form>
          </section>
        </main>

        <footer className="footer" id="contact">
          <div>
            <p className="eyebrow">Rihaus</p>
            <h2>Explore the collection.</h2>
          </div>
          <div className="footer-actions">
            <a className="button primary" href="mailto:hello@therihaus.com">hello@therihaus.com</a>
            <a className="button secondary" href="mailto:hello@therihaus.com?subject=Join%20the%20Rihaus%20list">Join the list</a>
          </div>
        </footer>
      </div>
    </>
  );
}
