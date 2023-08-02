![Multi device picture of the website](documentation/marckup.png)

Access the link [here](#https://tes3103.github.io/Pi-Maths-Game/)

## Table Of Contents
* [About The Website](#about-the-website)
  * [Goal](#goal)
  * [Technologies Used](#technologies-used)
* [UX](#ux)
  * [Target Audience](#target-audience)
  * [User Stories](#user-stories)
* [Features](#features)
  * [Existing Features](#existing-features)
    * [Controle Button](#controle-button)
    * [Question Area](#question-area)
    * [Submit](#submit)
    * [Score Area](#score-area)
  * [Future Features](#future-features)
* [Design](#design)
  * [Wireframe](#wireframe)
  * [Topography](#topography)
* [Testing](#testing)
  * [Bugs](#bugs)
  * [Known Issues](#known-issues)
* [Deployment](#deployment)
* [Local Deployment](#local-deployment)
  * [To Fork](#to-fork)
  * [To Clone](#to-clone)
* [Credits](#credits)

* [Acknowledgements](#acknowledgements)  




## About the Website
## Goal
Pi math game website aims to help elementary students (from grade 1 to 4) to advance thir matematical computation. This site mainly works with comparison operations using the three matimatical signs (>, = , <) using easy to play rules with the focus of teaching kids using random numbers.
## Tecnologies Used
* [HTML5](#https://en.wikipedia.org/wiki/HTML5) for the structure of the website
* [CSS3](#https://en.wikipedia.org/wiki/CSS) - for the styling.
* [JS](#https://developer.mozilla.org/en-US/docs/Web/JavaScript) - functions and examples.
* [Blasmiq](#https://balsamiq.com/)  - Used to create wireframes.
* [Gitpod](#https://gitpod.io/workspaces) -  IDE used to create the site.
* [GitHub](#https://github.com/) - To save and store the files for the website.
* [Font Awesome](#https://fontawesome.com/) -  for importing the icones used in the website.
* [Google Fonts](#https://fonts.google.com/) -  for importing tee font style selected for the website.
## UX
## Target Audience
The main target audience for this game would be childrens who are  in elementary school, just start lerning mathematical operation. The random numbers used to compare are easy to guss based on their number knowlwdege and the result score will encourage them to be more accurate by forcing them to be in a competitive mood with their fellow students.
## User Stories
* As a User ,  
  * I would like to paly the game with ease and know what to expect when i press the key
  * I would like to know when i am correct when i play the game
  * I would like to know when i am not correct when i play the game
## Features

## Existing Features
### Control Button
 ![Control button](documentation/control-area.png)
 
 This three buttons are used to control the type of game that the user like to paly when they are clicked

 ### Question Area
 ![Question Area](documentation/question-area.png)

 The quastion area with its answer both will let the user actually play the game after selecing the type of game, the user will put his answer in the answer box provided with true or false

 ### Submit Button
 ![Submit button](documentation/submit.png)

 this button is used to submit the user answer, and the user will know wheather the answer was correct or not with the pop up message and and the curser will be in the empty answer box for the next trial 

 ### Score Area
 ![Score Area](documentation/score-area.png)

 The Score area used to score both correct and incorrect answer by adding on the oldscore to make a competitive environment when palying the game
## Future Features
To make the user more confortable the game will have another option to submit the answer by using only the enter key and adding manual instructions to guide the user how to play the game and all the rules need to be followed.
## Wireframes
* Desktop 
![here](wireframe/desktop-wireframe.png)
* ipad 
![here](wireframe/wireframe-ipad.png)
* Mobile 
![here](wireframe/wireframe-phone.png)
## Topography
Goggle Font link, was used to import the choosen, Roboto font light 300 wt., it is used  heading, paragraph and input text since it is one of the most distinct to read on screen.

## Testing
## Automated Testing
[W3C](#https://validator.w3.org/) was used to validate the HTML and  CSS. and the results are as follows,
  * [index.html](#documentation/html-validator-result.png) 
  * [style.css](#documentation/css-validator.png) 

* [Lighthouse](#/documnetation/lightho.png)

[jshint](#https://jshint.com/) was used to validate Script.js file and the result is as follows,
  * [script.js](#documentation/jshint.png) 
### Bugs
| Bug | Status |
| ---| ---|
| some texts are disappeared when testing responsiveness| adressed by debuging CSS error  |
|   texts overflow for smaller screen  | adressed by html error debuging |
| the correct answer mixed with the incorrect answer  | fixed with putting the right equal sign|

### Known Issues
* still there are some warnings persist  from the automated testing, but these warnings dose not have any issue with the full functionality of the site.
* most of the issues with small screen size have ovecomed, as per my knoweledge capacity but still need some improvement. 
## Manual Testing
Manual testing was performed using ipad mini in Goggle Chrome
* when the site is live, as expected, the default greater-than game will be acive, when the user submits the answer,

  * if the answer was correct, the pop-up button will confirm the user with a message "you are correct" and when the user clicks the ok button it will  increment the score by one.
  * if the answer was incorrect, the pop-up button  will raise a meaaasage "you are incorrect " and increment the wrong answer score by one

* when a user want to choose another game using the control button, as epected the desired game function well,  with the same procedure as metioned above 

### Testing User Stories
1. I would like to paly the game with ease and know what to expect when i press the key,this is achieved as follows,
  * the user will be aware of the result he score and the correct answer with the pop-up message and the user can easly select the type of game desired to play by clicking the button from the three options. 

![user answer with score](documentation/user-story-score.png)
2. I would like to know if am correct or not when i play the game, this is achieved as follows,
 * when the user submits the answer using the submit button, the pop-up alert will confirm if the user answer was correct or incorrect with a message "you are correct"
 or "you are incorrect, please try"

 ![correct answer conformation](documentation/user-story.png)
 
## Deployment 
* The stapes to follow are the following
1. Login or signup to GitHub
2. Locate the relevant repository
3. Go to settings, 
4. Scroll down to the Pages option on the left-hand side and click into it.
5. Select main in the Source drop down box below the 'Build and deployment' title and click save.

### To Fork 
1. Login/signup to GitHub.
2. Locate the relevant repository 
3. Click on the 'Fork' button in the upper left.
  
## Credits
* For the heading and paragraph, Roboto light 300 was used, which i think a good contrast and ease since it is one of the legible to read on screen.
* Most ideas and inspiration for my website was taken from the Love Math project. 
## Acknowledgmets
1. My mentor Mr. Rohit Sharma thank you for all the guidance and support
2. For all slack community contributers 