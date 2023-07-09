
import "./css/App.css"
import Header from "./components/Header";
import Section from "./components/Section";

function App() {
  return (
    <div className="app">
      <Header />
      <Section
        title="About me"
        content="I am an aspiring web developer from Dallas, TX. I enjoy learning new things, building businesses, and travel. "
      />
      <Section
        title="Contact me"
        content="Email: devrobbygonzalez@gmail.com | LinkedIn: https://www.linkedin.com/in/robby-gonzalez-78476746/"
      />
    </div>
  );
}

export default App;
