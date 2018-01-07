## Salad Bar

[Play SaladBar!](https://gevuong.github.io/SaladBar/)

### Background

Salad Bar, inspired by Agario, Scoop, and my daily lunch recipe, involves collecting falling salad ingredients until all salad ingredients are made. As ingredients continue to fall from the salad bar, it is the salad bowl holder's duty to catch the necessary ingredients. But...be careful, falling items that do not belong in the salad bowl must be avoided.

As more salad ingredients are collected, the capacity of the salad bowl increases, making it more challenging to dodge non-salad ingredients.


### Features and Implementation

With the Salad Bar simulator, users are able to:

- [x] Start and reset the game
- [x] Move salad bowl horizontally from one side of map to the other
- [x] Catch falling salad ingredients in salad bowl, and dodge non-salad ingredients
- [x] Bowl enlarges as you collects more ingredients


### Game User Interface
![wireframes](images/saladbar.gif)


### Architecture and Technologies

This project utilizes the following technologies:

- Javascript and Vanilla JavaScript
- `p5.js` library


5 scripts involved in this project:

`sketch.js`: this script will handle the logic for creating and updating the necessary objects and rendering them to canvas.

`sketch.js`
`salad_bowl.js`
`good_ingredient.js`
`bad_ingredient.js`
`special_ingredient.js`


### Additional Resources and References
[p5 library](https://p5js.org/)

[Daniel Shiffman from Coding Challenge 5: Space Invaders in JavaScript with p5.js](https://www.youtube.com/watch?v=biN3v3ef-Y0)


### Future Direction
Some anticipated updates are:

- [ ] Add a timer and/or different stages
- [ ] Incorporate score count per ingredient (nutritional value)
- [ ] Diversify falling ingredients
- [ ] User has ability to select a salad type
- [ ] Add calorie count as health bar
