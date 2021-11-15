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
                  <img src= https://spoonacular.com/recipeImages/${each.id}-312x150.jpg />
                  <div class="card">
                    <div class="icon">
                    <a href="#"><i class="fa fa-heart-o"></i></a>
                    </div>
                  <div class="text">
                    <h1 class="food">
                        ${each.title}
                    </h1>
                    <i class="fa fa-clock-o">${each.readyInMinutes}</i>
                    <i class="fa fa-users">${each.servings}</i>

                    <div class="stars">
         <li>
            <a href="#"><i class="fa fa-star"></i></a>
            <a href="#"><i class="fa fa-star"></i></a>
            <a href="#"><i class="fa fa-star"></i></a>
            <a href="#"><i class="fa fa-star"></i></a>
            <a href="#"><i class="fa fa-star-o"></i></a>
         </li>
      </div>
      </div>
      <a href="#" class="btn">Let's Cook!</a>
      </div>
                  

              `

                meal_output.innerHTML = card
            })


        })

})