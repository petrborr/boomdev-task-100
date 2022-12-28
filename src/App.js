import "./App.css";

const styles = {
wrapper: {
    display: "flex",
    justifyContent: "space-between",
    margin: "1rem",
    paddingBottom: "1rem",
    borderBottom: "1px solid #ccc"
  },
  mealHeading: {
    margin: "0 0 0.25rem 0"
  },
  description: {
    fontStyle: "italic"
  },
  price: {
    marginTop: "0.25rem",
    fontWeight: "bold",
    color: "#ad5502",
    fontSize: "1.25rem"
  }
}

function App() {
  return (
    <div>
      <div style={styles.wrapper}>
        <h3 style={styles.mealHeading}>Sushi</h3>
        <div style={styles.description}>I prefer steak than sushi.</div>
        <div style={styles.price}>$9.99</div>
      </div>
    </div>
  );
}

export default App;
