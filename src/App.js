import { MenuBar } from "./components/MenuBar";
import { Content } from "./Routes/Content";
import "./Styles/App.css";
import "./index.css";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="main-section">
      {/* <Header /> */}
      <div style={{ display: "flex", flexDirection: "row" }}>
        <MenuBar />
        <Content />
      </div>
    </div>
  );
}

export default App;
