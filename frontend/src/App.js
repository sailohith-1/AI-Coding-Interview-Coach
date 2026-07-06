import { useState } from "react";

function App() {
  const [code, setCode] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyzeCode = async () => {
    if (!code.trim()) {
      alert("Please enter some code");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/analyze-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error(error);
      alert("Error connecting to backend");
    }

    setLoading(false);
  };

  return (
    <div style={{ maxWidth: "900px", margin: "30px auto" }}>
      <h1>AI Coding Interview Coach</h1>

      <textarea
        rows="12"
        style={{ width: "100%" }}
        placeholder="Paste your code here..."
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      <br /><br />

      <button onClick={analyzeCode}>
        {loading ? "Analyzing..." : "Analyze Code"}
      </button>

      {result && (
        <div style={{ marginTop: "30px" }}>
          <h2>Analysis</h2>

          <p><strong>Language:</strong> {result.language}</p>

          <p><strong>Summary:</strong> {result.summary}</p>

          <p><strong>Time Complexity:</strong> {result.time_complexity}</p>

          <p><strong>Space Complexity:</strong> {result.space_complexity}</p>

          <p>
            <strong>Optimization Suggestion:</strong>{" "}
            {result.optimization_suggestion}
          </p>

          <h3>Interview Questions</h3>

          <ol>
            {result.interview_questions.map((q, index) => (
              <li key={index}>{q}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

export default App;