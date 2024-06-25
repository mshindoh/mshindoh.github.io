/**
 * Function to filter items
 * Inspired by suggestions and code provided by ChatGPT.
 */
// function filterSelection(category) {
//       var items = document.getElementsByClassName("portfolioItem");
//       if (category === "all") category = "";
//       for (var i = 0; i < items.length; i++) {
//             items[i].classList.remove("show");
//             if (items[i].className.indexOf(category) > -1) {
//                   items[i].classList.add("show");
//             }
//       }
//       updateActiveButton(category);
// }

// document.addEventListener("DOMContentLoaded", function () {
//       filterSelection('all');
// });

// function updateActiveButton(category) {
//       var buttons = document.getElementsByClassName("button");
//       for (var i = 0; i < buttons.length; i++) {
//             buttons[i].classList.remove("primary");
//       }
//       for (var i = 0; i < buttons.length; i++) {
//             if (buttons[i].textContent.toLowerCase().includes(category)) {
//                   buttons[i].classList.add("primary");
//                   break;
//             }
//       }
// }

function filterSelection(category) {
      var items = document.getElementsByClassName("portfolioItem");
      if (category === "all") category = "";
      for (var i = 0; i < items.length; i++) {
            items[i].classList.remove("show");
            if (items[i].className.indexOf(category) > -1) {
                  items[i].classList.add("show");
            }
      }
      updateActiveButton(category);
}

function updateActiveButton(category) {
      var buttons = document.getElementsByClassName("button");
      for (var i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("primary");
            if (buttons[i].textContent.toLowerCase().substring(0, 2) == category.substring(0, 2)) {
                  buttons[i].classList.add("primary");
            } else if (buttons[i].textContent.toLowerCase() == "all" && category == "") {
                  buttons[i].classList.add("primary"); // handle all
            }
      }
}

document.addEventListener("DOMContentLoaded", function () {
      filterSelection('all');
});