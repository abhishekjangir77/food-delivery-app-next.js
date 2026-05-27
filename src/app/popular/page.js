import { fetchRecipe } from "@/Api-call/fetchapi";
import React from "react";
import RecipeCard from "../components/RacipeCard";

async function menu(params) {
  const Allrecipcs = await fetchRecipe();
  return (
    <div className="max-w-7xl mx-auto m-4">
      <h1 className="text-4xl font-bold"> Popular recipes </h1>

      <div className="max-w-7xl mx-auto flex gap-2  cursor-pointer p-6 m-10 flex-wrap">
        {Allrecipcs
        .filter((data) => data.rating > 4.8)
        .map((data, index) => (
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
  );
}

export default menu;
