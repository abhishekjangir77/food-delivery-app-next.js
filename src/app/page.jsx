import React from "react";
import Hero from "./components/Hero";
import RecipeCard from "./components/RacipeCard";
import { fetchRecipe, fetchRecipebyid } from "../Api-call/fetchapi"; // ✅ import add kiya
import dynamic from "next/dynamic";

export default async function Home() {
  const recipes = await fetchRecipe();
const dynamicrecipes = await fetchRecipebyid();
  const toprecipes = recipes.slice(0, 4);

  const Trandingrecipes = recipes.slice(5, 9);

  return (
    <>
      <Hero />
      {/* toprecipes */}
      <div className="max-w-7xl mx-auto m-4">
        <h1 className="text-4xl font-bold">Top recipes </h1>
        <div className="max-w-7xl mx-auto flex gap-2 justify-between cursor-pointer p-6 m-10 flex-wrap">
          {toprecipes.map((data, index) => (
            <RecipeCard
              key={index}
              id = {data.id}
              image={data.image}
              title={data.name} // ✅ title → name
              time={data.cookTimeMinutes}
              rating={data.rating}
            />
          ))}
        </div>
      </div>

      {/* trandingrecipes */}

      <div className="max-w-7xl mx-auto m-4">
        <h1 className="text-4xl font-bold">Tranding recipes  </h1>
        <div className="max-w-7xl mx-auto flex gap-2  justify-between cursor-pointer p-6 m-10 flex-wrap">
          {Trandingrecipes.map((data, index) => (
            <RecipeCard
              key={index}
               id = {data.id}
              image={data.image}
              title={data.name} // ✅ title → name
              time={data.cookTimeMinutes}
              rating={data.rating}
            />
          ))}
        </div>
      </div>
    </>
  );
}
