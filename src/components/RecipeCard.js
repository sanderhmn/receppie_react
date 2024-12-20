export default function RecipeCard({ recipe }) {
  return (
    <div key={recipe.id} className="recipe-card">
      <img src={`recipe_imgs/${recipe.image}`} alt={recipe.title} />
      <div className="recipe-card-info">
        <h3 className="recipe-card-title">{recipe.name}</h3>
        <p className="recipe-card-kitchen">{recipe.kitchen}</p>
        <p className="recipe-card-cooking-time">{recipe.cooking_time}</p>
      </div>
    </div>
  );
}
