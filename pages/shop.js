import Head from 'next/head';
import Link from 'next/link';

const products = [
  {
    title: 'Sculpted Blazer',
    description: 'A sharply tailored jacket with softened shoulders and a relaxed silhouette for polished layering.',
    image: '/images/collection-1.jpg',
    alt: 'Sculpted blazer outfit'
  },
  {
    title: 'Drape Knit',
    description: 'An elevated knitwear essential with subtle texture and a fluid, effortless fit.',
    image: '/images/collection-2.jpg',
    alt: 'Drape knit sweater'
  },
  {
    title: 'Wide-leg Trouser',
    description: 'Clean lines, luxurious movement, and an easy balance between refined and relaxed.',
    image: '/images/collection-3.jpg',
    alt: 'Wide-leg trousers look'
  },
  {
    title: 'Modern Trench',
    description: 'A sculptural outer layer that balances architectural shape with soft tailoring.',
    image: '/images/lookbook-1.jpg',
    alt: 'Modern trench coat'
  },
  {
    title: 'Layered Slip',
    description: 'Minimal drape and subtle detail, made to move from day to evening.',
    image: '/images/lookbook-2.jpg',
    alt: 'Layered slip dress'
  },
  {
    title: 'Textured Knit',
    description: 'Luxurious yarn with a light hand and a refined, wearable silhouette.',
    image: '/images/lookbook-3.jpg',
    alt: 'Textured knitwear'
  }
];

export default function Shop() {
  return (
    <>
      <Head>
        <title>Rihaus Shop | Clothes for modern living</title>
        <meta
          name="description"
          content="Shop Rihaus clothing: elevated essentials, refined tailoring, and modern wardrobe pieces available now."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="page-shell">
        <header className="topbar">
          <div className="brand">Rihaus</div>
          <nav className="nav-links" aria-label="Primary navigation">
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
          </nav>
        </header>

        <main>
          <section className="section intro">
            <div>
              <p className="eyebrow">The shop</p>
              <h2>Browse the clothes we are selling.</h2>
            </div>
            <p>
              Every item in the Rihaus collection is available here. These pieces are selected for their quality, wearability, and quiet luxury.
            </p>
          </section>

          <section className="section collection">
            <div className="collection-grid">
              {products.map((product) => (
                <article key={product.title} className="product-card">
                  <img src={product.image} alt={product.alt} className="product-image" />
                  <div>
                    <h3>{product.title}</h3>
                    <p>{product.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
