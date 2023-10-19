import { createRoot } from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
