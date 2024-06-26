### README

## Project Overview

This project is a web-based interactive spreadsheet for displaying and manipulating student assignment scores. It calculates average percentages dynamically based on user input and highlights whether the scores are above or below average.

## Files in the Project

- `index.html`
- `styles.css`
- `scripts.js`
- `script-example.js`

## Detailed Breakdown

### index.html

This is the main HTML file that contains the structure of the webpage (see full HTML code in this repository).
![Alt-text](https://github.com/SFrank80/SBA-JavaScript-Fundamentals/blob/994452c087716f7352c43944e03d9cc89260a23a/Assignment%20Snippet%20Image/html%20snippet%20image.JPG)

### styles.css

This file contains the CSS styles used to style the webpage (see full CSS code in this repository).
![Alt-text](https://github.com/SFrank80/SBA-JavaScript-Fundamentals/blob/994452c087716f7352c43944e03d9cc89260a23a/Assignment%20Snippet%20Image/css%20snippet%20image%201.JPG)
![Alt-text](https://github.com/SFrank80/SBA-JavaScript-Fundamentals/blob/994452c087716f7352c43944e03d9cc89260a23a/Assignment%20Snippet%20Image/css%20snippet%20image%202.JPG)
![Alt-text](https://github.com/SFrank80/SBA-JavaScript-Fundamentals/blob/994452c087716f7352c43944e03d9cc89260a23a/Assignment%20Snippet%20Image/css%20snippet%20image%203.JPG)

### scripts.js

This file contains the JavaScript logic for the webpage, including calculating average percentages and updating the HTML dynamically (see full JS code in this repository).
![Alt-text](https://github.com/SFrank80/SBA-JavaScript-Fundamentals/blob/994452c087716f7352c43944e03d9cc89260a23a/Assignment%20Snippet%20Image/javascript%20snippet%20image%201.JPG)
![Alt-text](https://github.com/SFrank80/SBA-JavaScript-Fundamentals/blob/994452c087716f7352c43944e03d9cc89260a23a/Assignment%20Snippet%20Image/javascript%20snippet%20image%202.JPG)
![Alt-text](https://github.com/SFrank80/SBA-JavaScript-Fundamentals/blob/994452c087716f7352c43944e03d9cc89260a23a/Assignment%20Snippet%20Image/javascript%20snippet%20image%203.JPG)
![Alt-text](https://github.com/SFrank80/SBA-JavaScript-Fundamentals/blob/994452c087716f7352c43944e03d9cc89260a23a/Assignment%20Snippet%20Image/javascript%20snippet%20image%204.JPG)
![Alt-text](https://github.com/SFrank80/SBA-JavaScript-Fundamentals/blob/994452c087716f7352c43944e03d9cc89260a23a/Assignment%20Snippet%20Image/javascript%20snippet%20image%205.JPG)

### script-example.js

This file contains the basic foundation and example code used as a starting point for the project (see full JS example code in this repository).
![Alt-text](https://github.com/SFrank80/SBA-JavaScript-Fundamentals/blob/994452c087716f7352c43944e03d9cc89260a23a/Assignment%20Snippet%20Image/jsexample%20snippet%20image%201.JPG)
![Alt-text](https://github.com/SFrank80/SBA-JavaScript-Fundamentals/blob/994452c087716f7352c43944e03d9cc89260a23a/Assignment%20Snippet%20Image/jsexample%20snippet%20image%202.JPG)
![Alt-text](https://github.com/SFrank80/SBA-JavaScript-Fundamentals/blob/994452c087716f7352c43944e03d9cc89260a23a/Assignment%20Snippet%20Image/jsexample%20snippet%20image%203.JPG)
![Alt-text](https://github.com/SFrank80/SBA-JavaScript-Fundamentals/blob/994452c087716f7352c43944e03d9cc89260a23a/Assignment%20Snippet%20Image/jsexample%20snippet%20image%204.JPG)
![Alt-text](https://github.com/SFrank80/SBA-JavaScript-Fundamentals/blob/994452c087716f7352c43944e03d9cc89260a23a/Assignment%20Snippet%20Image/jsexample%20snippet%20image%205.JPG)
![Alt-text](https://github.com/SFrank80/SBA-JavaScript-Fundamentals/blob/994452c087716f7352c43944e03d9cc89260a23a/Assignment%20Snippet%20Image/jsexample%20snippet%20image%206.JPG)
![Alt-text](https://github.com/SFrank80/SBA-JavaScript-Fundamentals/blob/994452c087716f7352c43944e03d9cc89260a23a/Assignment%20Snippet%20Image/jsexample%20snippet%20image%207.JPG)
![Alt-text](https://github.com/SFrank80/SBA-JavaScript-Fundamentals/blob/994452c087716f7352c43944e03d9cc89260a23a/Assignment%20Snippet%20Image/jsexample%20snippet%20image%208.JPG)
![Alt-text](https://github.com/SFrank80/SBA-JavaScript-Fundamentals/blob/994452c087716f7352c43944e03d9cc89260a23a/Assignment%20Snippet%20Image/jsexample%20snippet%20image%209.JPG)



## Debugging Steps

1. **Initial Issue Identification**:
   - The initial JavaScript code failed to dynamically update the `NULL` string when scores were changed.
   - Identified issues with event listeners not correctly updating the DOM elements.

2. **Fixing Event Listeners**:
   - Added `input` event listeners to ensure the average percentage updates correctly when scores are input.
   - Ensured that `calculateAverage` function correctly handles cases where scores are zero or `NULL`.

3. **Manual Testing**:
   - Tested the application by inputting various scores in the table and verifying the `NULL` handling and average percentage calculations.
   - Verified the responsive design by resizing the browser window and ensuring the layout adapts correctly.

4. **Final Validation**:
   - Confirmed that the average percentage column dynamically updates based on input changes.
   - Ensured that the percentages for below and above average students are calculated and displayed correctly.

## Manual Changes to HTML/CSS

1. **HTML**:
   - Added `table`, `thead`, `tbody`, and `tr` elements to structure the student scores table.
   - Included summary elements to display below and above average percentages.

2. **CSS**:
   - Applied styles to make the table visually appealing, including borders and background colors.
   - Implemented responsive design using media queries to ensure the table adapts to various screen sizes.

## Conclusion

This project demonstrates an interactive spreadsheet application for managing and displaying student assignment scores. The detailed steps, debugging process, and manual changes ensure a robust and user-friendly experience. The `script-example.js` file provides a foundational example, while `scripts.js` includes the comprehensive logic for dynamic updates and calculations.

## Image of the Completed SBA-JavaScript Fundamentals Project
![Alt-text](https://github.com/SFrank80/SBA-JavaScript-Fundamentals/blob/994452c087716f7352c43944e03d9cc89260a23a/Assignment%20Snippet%20Image/SBA%20JavaScript%20Fundamentals%20Assignment%20Completed.JPG)




















