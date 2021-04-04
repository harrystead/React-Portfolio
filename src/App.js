import "./App.css";
import { InfoContext } from "./context/ContextApi";
import Cards from "./components/Cards/Cards";

function App() {
  const cardInfo = [
    {
      title: "React Music App",
      image: "",
      tech: "A music app built with React",
      site: "https://damp-shore-35305.herokuapp.com/",
    },
    {
      title: "Local Ecommerce",
      image: "",
      tech: "A full-stack ecommerce app built with React, Node, MonogoDB & Firebase",
      site: "https://safe-harbor-69169.herokuapp.com/",
    },
    {
      title: "Sequelize Blog",
      image: "",
      tech: "A CMS built with Sequelize & Node",
      site: "https://nodeexpresscms.herokuapp.com/",
    },
    {
      title: "Fitness Tracker",
      image: "",
      tech: "A app that allows users to track their fitness built with React, Node & MonogoDB",
      site: "https://sheltered-shore-48118.herokuapp.com/",
    },
    {
      title: "Full-Stack Burger App",
      image: "",
      tech: "A burger tracker built with Handlebars, Node & MySQL",
      site: "https://burgernodeexpress.herokuapp.com/",
    },
    {
      title: "SQL Employee Database",
      image: "",
      tech: "An employee management system build with MySQL & Node",
      site: "https://www.youtube.com/watch?v=nvNZPdV5Ik0",
    },
  ];

  return (
    <>
      <InfoContext.Provider value={cardInfo}>
        <Cards />
      </InfoContext.Provider>
    </>
  );
}

export default App;
