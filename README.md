## Website Performance Optimization portfolio project

This is my P6 project. My mission is to make the index.html get 90 scores at least in PageSpeed. And optimizing the main.js file to get 60 fps and make the size of pizza less than 5 ms when change the size.The following shows how to run this project and what changes I have made.

To get started, check out the repository and inspect the code.

### Getting started
1. Run the index.min.html to check the first one. Also you can put the url "https://liuyuan512.github.io/" in the PageSpeed to see the result cause I make it in my github.
2. Run the pizza.html to see my second one. You can open the main.js file to see what changes I have made.

####Part 1: Optimize PageSpeed Insights score for index.html

I make 5 changes in this part.

1. I compress the html file.
2. I compress the print.css file and add the media ueries.
3. I inline the style.css file.
4. I add the "async" to the perfmatters.js and minify it.
5. I compress the profilepic.ipg using Grunt.

####Part 2: Optimize Frames per Second in pizza.html

I make 4 changes in this part.

1. I change the function updatePositions() in line 507, which is putting the layout "document.body.scrollTop / 1250" out of the loop cause they can trigger the layout.
2. I change the function changePizzaSizes(size) in line 458. I make the "var dx" and var "newwidth" out of the loop cause they can trigger the layout.
3. I replace all the document.querySelector to document.getElementById / document.getElementByClassName.
4. I dynamically calculate the number of pizzas.
