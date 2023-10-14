import axios from 'axios'

export default function getRecipeData(user) {
  const promises = []
  const keywords = ['beef', 'eggs', 'vegetarian', 'pasta', 'chicken']
  const key = process.env.APIKEY
  const id = process.env.APPID

  try {
    for (let i = 0; i < keywords.length; i++) {
      promises.push(new Promise((resolve) => {
        const timeoutNumber = 10000 * i
        setTimeout(() => {
          const url = `https://api.edamam.com/search?q=${keywords[i]}&app_id=${id}&app_key=${key}&from=0&to=100`;
          axios.get(url)
              .then(({ data }) => {
                const recipeObj = data.hits.map(objRecipe => {
                  return {
                    recipeName: objRecipe.recipe.label,
                    description: objRecipe.recipe.label,
                    linkOrMethod: objRecipe.recipe.url,
                    image: objRecipe.recipe.image,
                    servings: objRecipe.recipe.yield,
                    ingredients: objRecipe.recipe.ingredientLines,
                    source: objRecipe.recipe.source,
                    diet: objRecipe.recipe.dietLabels,
                    healthLabels: objRecipe.recipe.healthLabels,
                    allergens: objRecipe.recipe.cautions,
                    cookingTime: objRecipe.recipe.totalTime,
                    calories: objRecipe.recipe.calories,
                    user: user[0]
                  }

                })
                resolve(recipeObj)

              })
        }, timeoutNumber)

      }))

    }
  } catch (e) {
    console.log(e)
  }
  return Promise.all(promises)

}