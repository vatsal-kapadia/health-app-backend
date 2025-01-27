import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Home() {
  const [symptoms, setSymptoms] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5001/chat", { userInput: symptoms });
      // Assuming the response contains a message to display
      navigate("/result", { state: { message: response.data.reply } });
    } catch (error) {
      console.error("Error while submitting symptoms", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1>Symptom Checker</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Describe your symptoms"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
          rows="6"
          cols="50"
          style={styles.textarea}
        />
        <button type="submit" style={styles.button} disabled={loading}>
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  textarea: {
    width: "80%",
    padding: "10px",
    fontSize: "16px",
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "18px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default Home;
