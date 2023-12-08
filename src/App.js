import { MenuBar } from "./components/MenuBar";
import { Content } from "./Routes/Content";
import "./App.css";
import { Header } from "./components/Header";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
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
