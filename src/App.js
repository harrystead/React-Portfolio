import "./App.css";
import { InfoContext } from "./context/ContextApi";
import Cards from "./components/Cards/Cards";
import NavHeader from "./components/Header/Nav";
import TableSkills from "./components/Table/TableSkills";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer"
import { BrowserRouter as Router, Route } from "react-router-dom";
import image from "./images/image.png"

function App() {
  const cardInfo = [
    {
      title: "React Music App",
      tech: "A music app built with React",
      site: "https://damp-shore-35305.herokuapp.com/",
      github: "https://github.com/harrystead/React-Music-App"
    },
    {
      title: "Local Ecommerce",
      tech: "A full-stack ecommerce app built with React & Node",
      site: "https://safe-harbor-69169.herokuapp.com/",
      github: "https://github.com/harrystead/Full-Stack-Local-Shop",
    },
    {
      title: "Sequelize Blog",
      tech: "A CMS built with Sequelize & Node",
      site: "https://nodeexpresscms.herokuapp.com/",
      github: "https://github.com/harrystead/Express-Blog"
    },
    {
      title: "Fitness Tracker",
      tech:
        "A app that allows users to track their fitness built with React, Node & MonogoDB",
      site: "https://sheltered-shore-48118.herokuapp.com/",
      github: "https://github.com/harrystead/Full-Stack-Fitness-Tracker"
    },
    {
      title: "Full-Stack Burger App",
      tech: "A burger tracker built with Handlebars, Node & MySQL",
      site: "https://burgernodeexpress.herokuapp.com/",
      github: "https://github.com/harrystead/Node-Express-Handlebars"
    },
    {
      title: "SQL Employee Database",
      tech: "An employee management system build with MySQL & Node",
      site: "https://www.youtube.com/watch?v=nvNZPdV5Ik0",
      github: "https://github.com/harrystead/SQL-Employee-Management-Database"
    },
  ];

  return (
    <>
      <Router>
        <InfoContext.Provider value={cardInfo}>
          <NavHeader />
          <Route exact path="/" component={Home} />
          <Route path="/portfolio" component={Cards} />
          <Route path="/skills" component={TableSkills} />
        </InfoContext.Provider>
        <Footer />
      </Router>
    </>
  );
}

export default App;
