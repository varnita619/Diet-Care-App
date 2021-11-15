var user_calories = document.querySelector("#search-bar")
var meal_btn = document.querySelector("#meal-btn")
var meal_output = document.querySelector(".column")
var nutrients_output = document.querySelector("#nutrients_output")


meal_btn.addEventListener('click', () => {
    var calories = user_calories.value

    let url = `https://api.spoonacular.com/mealplanner/generate?apiKey=46e6b328f9b947bbba22a9e64575cadc&timeFrame=day&targetCalories=${calories}`

    fetch(url)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
           
          var card = ''

          data.meals.forEach((each) => {
              console.log(each)
              card += `
              
              <div class="card">
              <div class="icon">
              <a href="#"><i class="fa fa-heart-o"></i></a>
              </div>
                  <img src= https://spoonacular.com/recipeImages/${each.id}-312x150.jpg />
                  <h4>${each.title}</h4>
                  </div>

              `

              meal_output.innerHTML = card
          })


        })

})