
export default function Home() {
  return (
   
   <div style={{ padding: "60px" }}>

      {/* HERO SECTION */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "40px",
        flexWrap: "wrap"
      }}>

        {/* PROFILE IMAGE */}
        <img
          src="/profile.jpg"
          alt="profile"
          style={{
            width: "160px",
            height: "160px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "3px solid #00ffcc"
          }}
        />

        {/* INTRO TEXT */}
        <div>
          <h1>
            Hi, I'm <span style={{ color: "#00ffcc" }}>Sathvik</span> 👋
          </h1>
          <p>Full Stack Developer | AI Enthusiast</p>
        </div>

      </div>

      {/* ABOUT */}
      <section style={{ marginTop: "50px" }}>
        <h2>About Me</h2>
        <p>
          I am a Computer Science student passionate about building modern web
          applications and solving real-world problems using AI and software
          engineering.
        </p>
      </section>

      {/* RESEARCH */}
      <section style={{ marginTop: "40px" }}>
        <h2>Research Interests</h2>
        <p>Machine Learning, NLP, Software Engineering</p>
      </section>

      {/* PERSONAL DETAILS */}
      <section style={{ marginTop: "40px" }}>
        <h2>Personal Details</h2>
        <p>Phone: 9989378088</p>
        <p>Email: se23umcs001@mahindrauniversity.edu.in</p>
        <p>Skills: C, HTML, CSS, JavaScript, MySQL, MATLAB</p>
      </section>

    </div>
  );
}