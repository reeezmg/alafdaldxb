import React from "react";

const PRODUCT_DATA = [
  {
    key: "portable-toilets",
    title: "Portable Toilets",
    desc: "Durable, hygienic and easy-to-service portable toilet units for events and sites.",
    imageUrl: "/src/assets/Product1.jpg",
  },
  {
    key: "shower-cabins",
    title: "Shower Cabins",
    desc: "Robust shower cabin systems — single or multi-stall — with quick plumbing hookup.",
    imageUrl: "/src/assets/Product2.jpg",
  },
  {
    key: "executive-porta-cabins",
    title: "Executive Porta Cabins",
    desc: "Premium insulated porta cabins, ideal for on-site offices and VIP facilities.",
    imageUrl: "/src/assets/Product3.jpg",
  },
  {
    key: "construction-site-cabins",
    title: "Construction Site Cabins",
    desc: "Rugged site cabins for supervisors, stores and welfare — built for heavy use.",
    imageUrl: "/src/assets/Product4.jpg",
  },
  {
    key: "custom-fabricated",
    title: "Custom Fabricated Cabins",
    desc: "Tailor-made prefab cabins and modular solutions built to your requirements.",
    imageUrl: "/src/assets/Product5.jpg",
  },
  {
    key: "maintenance-units",
    title: "Maintenance Units",
    desc: "On-site maintenance modules and storage units for service teams.",
    imageUrl: "/src/assets/Product6.jpg",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Orange header */}
        <div className="text-center mb-8 bg-[var(--primary)] text-white py-8 px-6 rounded-lg max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold">Our Products</h2>
          <p className="mt-2">High-quality, durable & easy to maintain units.</p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCT_DATA.map((p) => (
            <article
              key={p.key}
              className="p-8 rounded-lg text-left border border-orange-100 bg-orange-50/30 shadow-sm"
            >
              {/* FIXED: Uniform image container with no cropping */}
              <div className="w-full h-48 mb-4 rounded bg-white flex items-center justify-center p-3 border border-gray-200">
                <img
                  src={p.imageUrl}
                  alt={p.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-2 text-gray-700 text-sm">{p.desc}</p>

              <div className="mt-5">
                <a
                  href="#contact"
                  className="inline-block px-4 py-2 rounded-md text-sm font-semibold"
                  style={{ background: "var(--primary)", color: "white" }}
                >
                  Enquire
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
