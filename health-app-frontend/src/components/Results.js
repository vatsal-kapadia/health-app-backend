import React from "react";
import { useLocation } from "react-router-dom";

function Result() {
  const location = useLocation();
  const { message } = location.state || { message: "No result yet!" };

  return (
    <div style={styles.container}>
      <h1>Symptom Checker Result</h1>
      <p>{message}</p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
};

export default Result;
