import React from "react";

const hobbies = [
  {
    icon: "💻",
    title: "Coding",
    desc: "Building web apps, solving DSA problems, and exploring new technologies."
  },
  {
    icon: "🔌",
    title: "Electronics Projects",
    desc: "Working with IoT, microcontrollers, FPGA, and digital design."
  },
  {
    icon: "📚",
    title: "Learning New Tech",
    desc: "Digital design, VHDL, SystemVerilog, and full-stack development."
  },
 
];

const Hobbies = () => {
  return (
    <section className="hobbies-section">
      <h2 className="section-title">Hobbies & Interests</h2>

      <div className="hobbies-grid">
        {hobbies.map((hobby, index) => (
          <div className="hobby-card" key={index}>
            <span className="hobby-icon">{hobby.icon}</span>
            <h3>{hobby.title}</h3>
            <p>{hobby.desc}</p>
          </div>
        ))}
      </div>

      {/* CSS Integrated */}
      <style>{`
        .hobbies-section {
          padding: 60px 20px;
          background-color: #0f172a03;
          color: #e5e7eb;
        }

        .section-title {
          text-align: center;
          font-size: 2rem;
          margin-bottom: 40px;
          color: #38bdf8;
        }

        .hobbies-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 25px;
          max-width: 1000px;
          margin: auto;
        }

        .hobby-card {
          background: #02061741;
          border: 1px solid #1e293b;
          border-radius: 16px;
          padding: 25px;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .hobby-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 0 20px rgba(56, 189, 248, 0.35);
        }

        .hobby-icon {
          font-size: 2.5rem;
          display: block;
          margin-bottom: 15px;
        }

        .hobby-card h3 {
          color: #22c55e;
          margin-bottom: 10px;
          font-size: 1.2rem;
        }

        .hobby-card p {
          font-size: 0.95rem;
          color: #cbd5f5;
          line-height: 1.5;
        }
      `}</style>
    </section>
  );
};

export default Hobbies;
