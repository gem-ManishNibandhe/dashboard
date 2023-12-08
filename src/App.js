import { MenuBar } from "./components/MenuBar";
import { Content } from "./Routes/Content";
import "./App.css";
import "./index.css";
import { Header } from "./components/Header";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#e5e1ed",
        // height: "100vh",
      }}
    >
      {/* <Header /> */}
      <div style={{ display: "flex", flexDirection: "row" }}>
        <MenuBar />
        <Content />
      </div>
    </div>
  );
}

export default App;
