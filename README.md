# JS-Promises-Virtual-McDonald

## Submission Instructions [Please note]

## Maximum Marks - 10

- The Submission should not contain spaces, for example /js-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Input elements exist in html form- 2 marks
 ✅ ordering food items, and appending to DOM is working correctly - 3 marks
 ✅ ordering new food clears up previous order from DOM - 2 marks
 ✅ order Id is present in all orders - 2 mark
```

## Installation

- Use node version(LTS) should be `v16.16.0`
- Don't change/override package.json
- please make sure you do not push package-lock.json
- Download and unzip the boilerplate
- Navigate to the correct path
- Run **npm install --engine-strict** to install the node modules
- Run **npm test** for the test cases.

## Folder structure

- index.html
- src
  - McDonalds.js
  - `__tests__`
    - McDonalds.spec.js
- README.md
- package.json

## Description

#### use only `textContent` to append the data to the DOM

You have recently taken a McDonald’s franchise. You, being a software developer, want to design a virtual food ordering system to handle the orders coming in. Users should be able to place orders through it. Whenever one order is complete, it should be visible on the screen with the order number.

1. Create a button called 'Order Food'. Create a checkbox of 5 food items you can choose from.
   The input boxes for food items should have values "burger","mcPuff","wrap","cold_drink","coffee" in the same order.
2. When a user clicks on order food, create a promise that will resolve after random seconds.
3. Once the promise is resolved, show the image of the food in the centre and show the order id on the top right corner.
4. When 'Order Food' button is clicked again, previously selected items should be cleared from the DOM and only new items should be visible.
5. Try to make your virtual restaurant as real as possible.

6. See from this example that by default no items are showing:- ![image](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-01-18/Screenshot%202023-01-18%20at%206.07.56%20PM_120724.png)

and here if you see after order these are the items that are showing:- ![image](https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2023-01-18/Screenshot%202023-01-18%20at%206.07.19%20PM_193676.png)

## Instructions:

- All input elements (checkboxes) should have the same class: `food`
- All items that are selected from the menu, when added to the DOM should have the same id: `food-item`. However the Order ID to be displayed on the DOM needs to be different
- Your `McDonalds.js` file will have some functions:

  - Get the selected items from the menu in `getSelectedItems` function, and then invoke the `orderFood` function with array of selected items as argument

  **Note:- Do not use any other names for the methods other than mentioned.**

####

## Boilerplate

- Do not change the given folder structure
- index.html
- You can find JS code under src folder in a filename McDonalds.js
- you can find the testcase under `__tests__ ` folder

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug before itself
- we also request you to not to just submit it last minute
- try to keep one submission at a time
