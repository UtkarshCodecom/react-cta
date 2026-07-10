import { GradientCTA } from "./index";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#111827",
      }}
    >
      <GradientCTA
        variant="sunset"
        size="lg"
        glow
        shadow
        animation="shine"
      >
        Start Free Trial
      </GradientCTA>
    </div>
  );
}

export default App;