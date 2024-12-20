import "./App.css";
import "./styles.css";
import { useState, useEffect } from "react";
import RecipeCard from "./components/RecipeCard";

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("recipes.json")
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data);
        console.log(data);
      });
  }, []);

  // const arr = [1, 2, 3];
  return (
    <div className="recipe-grid">
      {recipes.map((recipe) => (
        <RecipeCard recipe={recipe}></RecipeCard>
      ))}
    </div>
  );
}

export default App;
