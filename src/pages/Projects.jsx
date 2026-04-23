export default function Projects() {
  return (
    <div style={{ padding: "60px" }}>
      <h1>Projects</h1>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>

        <div className="card">
          <h3>“Student Performance Visualization” </h3>
          <p>Java + React based game</p>

        </div>
         <a href="https://github.com/Karthikeya029/SE-Project" target="_blank"></a>

        <div className="card">
          <h3>Job Board Interface</h3>
          <p>HTML, CSS, JavaScript</p>
        </div>
<a href="https://github.com" target="_blank"></a>
        <div className="card">
          <h3>Law Document Summarizer</h3>
        
          <p>NLP Project</p>
          <a href="https://github.com/SathvikReddy-001/Nlp-project" target="_blank">
  View Project →
</a>

        </div>

      </div>
    </div>
  );
}