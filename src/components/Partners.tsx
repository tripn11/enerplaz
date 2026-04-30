const partners = [
  "SolarEdge",
  "Victron Energy",
  "Schneider",
  "Jinko Solar",
  "Huawei Solar",
  "SMA Solar",
  "ABB Group",
  "Siemens",
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
            <div key={`${partner}-${index}`} className="partners__item">
              <span className="partners__dot" />
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
