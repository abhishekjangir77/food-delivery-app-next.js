import { fetchRecipebyid } from "@/Api-call/fetchapi";

export default async function page({ params }) {
  const { id } = await params;
  const recipess =  await fetchRecipebyid(id);
  return (
    <div className="bg-orange-50  min-h-screen  p-10  py-10">
      <div className="max-w-6xl mx-auto bg-white text-black  shadow-xl rounded-xl overflow-hidden">
        {/* Image */}
        <img
          src={recipess.image}
          alt={recipess.name}
          className="w-full h-[400px] object-cover"
        />

        <div className="p-8 grid md:grid-cols-2 gap-10">
          {/* Left Side */}
          <div>
            <h1 className="text-4xl font-bold mb-3">{recipess.name}</h1>

            <p className="text-gray-900 mb-4">
              Cuisine: {recipess.cuisine} • Difficulty: {recipess.difficulty}
            </p>

            <div className="flex gap-6 mb-6 text-sm text-gray-600">
              <p>⏱ Prep: {recipess.prepTimeMinutes} min</p>
              <p>🔥 Cook: {recipess.cookTimeMinutes} min</p>
              <p>🍽 Servings: {recipess.servings}</p>
            </div>

            <div className="flex gap-3 mb-6">
              {recipess?.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-yellow-500 font-semibold text-lg">
              ⭐ {recipess.rating} ({recipess.reviewCount} reviews)
            </p>

            <p className="mt-3 text-gray-600">
              Calories per serving: {recipess.caloriesPerServing}
            </p>
          </div>

          {/* Ingredients */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>

            <ul className="space-y-2 text-gray-700">
              {recipess?.ingredients?.map((item, index) => (
                <li key={index} className="flex gap-2">
                  ✔ {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Instructions */}
        <div className="p-8 border-t">
          <h2 className="text-2xl font-semibold mb-4">Cooking Instructions</h2>

          <ol className="space-y-4 text-gray-700">
            {recipess?.instructions?.map((step, index) => (
              <li key={index} className="flex gap-3">
                <span className="font-bold text-orange-500">{index + 1}.</span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
