const partners = [
  { name: "Jinko Solar", logo: "/partners/jinko-solar.png" },
  { name: "Schneider Electric", logo: "/partners/schneider-electric.png" },
  { name: "Deye", logo: "/partners/deye.png" },
  { name: "BYD", logo: "/partners/byd.webp" },
  { name: "Must", logo: "/partners/must.webp" },
  { name: "Jinko Solar", logo: "/partners/jinko-solar.png" },
  { name: "Schneider Electric", logo: "/partners/schneider-electric.png" },
  { name: "Deye", logo: "/partners/deye.png" },
];

export default function Partners() {
  const allPartners = [...partners, ...partners];

  return (
    <section className="partners">
      <div className="container partners__header">
        <span className="section-heading__eyebrow">Partners</span>
        <p>Trusted by industry leaders and global energy partners.</p>
      </div>

      <div className="partners__rail">
        <div className="partners__track">
          {allPartners.map((partner, index) => (
            <div key={`${partner.name}-${index}`} className="partners__item">
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="partners__logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
