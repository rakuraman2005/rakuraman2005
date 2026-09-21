import React from 'react';

const Education = () => {
  const educationData = [
    {
      institution: "Sri Krishna College of Engineering and Technology, Coimbatore",
      degree: "Bachelor of Engineering in Electronics and Communication",
      year: "2022 - 2026",
      grade: "8.00 CGPA",
    },
    {
      institution: "Sri Ragavendra Matricultion Higher Secondary School, Salem",
      degree: "Class XII (TN State Board)",
      year: "2021 - 2022",
      grade: "95.5%",
    },
    {
        institution: "Sri Ragavendra Matricultion Higher Secondary School, Salem",
        degree: "Class X (TN State Board)",
        year: "2019 - 2020",
        grade: "75%",
    }
  ];

  return (
    <section style={styles.container}>
      <div style={styles.list}>
        {educationData.map((edu, index) => (
          <div key={index} style={styles.card}>
            <h3 style={styles.institution}>{edu.institution}</h3>
            <p style={styles.degree}>{edu.degree}</p>
            <div style={styles.footer}>
              <span style={styles.year}>{edu.year}</span>
              <span style={styles.grade}> {edu.grade}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  container: {
    padding: '20px',
    color: '#fff',
    maxWidth: '100%',
  },
  card: {
    borderLeft: '4px solid #FFD700', // Yellow accent to match your "A"
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: '1.5rem',
    marginBottom: '20px',
    borderRadius: '0 8px 8px 0',
  },
  institution: {
    margin: '0 0 5px 0',
    fontSize: '100%',
    color: '#FFD700',
    backgroundColor: 'transparent',
  },
  degree: {
    margin: '0 0 15px 0',
    fontStyle: 'italic',
    color: '#ccc',
    backgroundColor: 'transparent',
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '50%',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  },
  year: {
    color: '#b4ababff',
    backgroundColor: 'transparent',
  },
  grade: {
    color: '#fff',
    backgroundColor: 'transparent',
  }
};

export default Education;