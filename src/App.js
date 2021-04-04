import "./App.css";
import { InfoContext } from "./context/ContextApi";
import Cards from "./components/Cards/Cards";
import NavHeader from "./components/Header/Nav";
import TableSkills from "./components/Table/TableSkills";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const cardInfo = [
    {
      title: "React Music App",
      tech: "A music app built with React",
      site: "https://damp-shore-35305.herokuapp.com/",
    },
    {
      title: "Local Ecommerce",
      tech: "A full-stack ecommerce app built with React & Node",
      site: "https://safe-harbor-69169.herokuapp.com/",
    },
    {
      title: "Sequelize Blog",
      tech: "A CMS built with Sequelize & Node",
      site: "https://nodeexpresscms.herokuapp.com/",
    },
    {
      title: "Fitness Tracker",
      tech:
        "A app that allows users to track their fitness built with React, Node & MonogoDB",
      site: "https://sheltered-shore-48118.herokuapp.com/",
    },
    {
      title: "Full-Stack Burger App",
      tech: "A burger tracker built with Handlebars, Node & MySQL",
      site: "https://burgernodeexpress.herokuapp.com/",
    },
    {
      title: "SQL Employee Database",
      tech: "An employee management system build with MySQL & Node",
      site: "https://www.youtube.com/watch?v=nvNZPdV5Ik0",
    },
  ];

  return (
    <>
      <Router>
        <InfoContext.Provider value={cardInfo}>
          <NavHeader />
          <Route path="/portfolio" component={Cards} />
          <Route path="/skills" component={TableSkills} />
        </InfoContext.Provider>
      </Router>
    </>
  );
}

export default App;
