import React, { useState, useEffect } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Nav } from "./components/Nav/Nav";
import { Main } from "./components/Pages/Main/Main";
import { data } from "./data";

function App() {
  const [selectedPerson, setSelectedPerson]=useState([]); 
  const [searchName, setSearchName] = useState("");
  const [schoolName, setSchoolName] = useState("");

  const handleSelect=(e)=>{
    setSchoolName(e.target.value) 
  }
  useEffect(() => {
    const filteredcards = data.filter((el) =>
      schoolName
        ? el.name.toLowerCase().includes(searchName.toLowerCase().trim()) &&
          el.house === schoolName
        : el.name.toLowerCase().includes(searchName)
    );
    setSelectedPerson(filteredcards);
  }, [searchName, schoolName]);
  return (
    <div className="App">
      <Header />
      <Nav
        searchName={searchName}
        changValue={setSearchName}
        handleSelect={handleSelect}
        schoolName={schoolName}
      />
      <Main searchName={searchName} filtered={selectedPerson} />
    </div>
  );
}

export default App;

