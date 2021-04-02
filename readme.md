# Gothy - Game
https://github.com/mpagon25/gothy-game

## Description
Side scroll platformer with a bat as a protagonist who's goal it is to reach its cave.
This program/game will allow the user to maneuver a certain object through a 2D designed level and will be finished/the user wins the game when the object reaches the end of the level.

If the user lets the object collide with the enviroment or any other obstacle while flying the user loses one attempt(life).  But the user is able to land on certain obstacles. If the object collides with the bottom of the level (falls down) without landing on a platform, the user loses a life.

After losing all 3 attempts/lifes, the user lost the game and will be led to the restart screen, where the user can either restart or exit the game and will be directed to the main/splash screen.

The let the object fly, the user has to press a certain button to give the object an uplifting push otherwise the objec is constantly falling until it reaches the bottom of the level or a ground to land on. Every use of the "fly" skill consumes energy which is displayed on the sceen in form of a bar. Is the bar is empty, so is the object not able to use the fly skill anymore.

To fill the up the energy, the obeject got to consume/ "eat"  

The user will need a keyboard to start, control and end this program/game. It's designed to run on a desktop browser.


## MVP

As a user I want to see the start screen with the start button as I enter the site and want to be able to start the game as I click on the button
As a user I wan to be able to control and maneuver my object through the level in between the canvas
As a user I want that the level and background move sideways in the direction the object is pointin and moving as the object hits a certain point in the canvas



As a user I want the fame to randomly display bugs flying around (static)
As a user I want the game to create randomly positioned platforms where my object can land on
As a user I want a energy bar diplayed on top of the screen showing the energy of my object



As a user I want my object to be able to 'eat' bugs so its energy is filling up
As a user I want my object to lose energy everytime I use the 'fly' skill



As a user I want that the game is been declared and be send to the game over screen as lost as I hit an obstacle or the top/bottom border of the level
As a user I want the level to end at a defined certain point and declare that the level was successfully completed and display the winscreen


## Backlog
As a user I want the game to create randomly positioned 'obstacles' sticking out of the top and bottom of the canvas
As a user I want my attempts displayed as life on top of the screen
As a user I want to lose an attempt and start the level from the beginning everytime my object hits an obstacle or the top/bottom border of the level
As a user I want that the game is been declared and be send to the game over screen as lost as I all my attempts 




## Data structure
Classes and methods definition. Or functions.


## States y States Transitions
Definition of the different states and their transition (transition functions)

- splashScreen
- gameScreen
- gameoverScreen
- winScreen


## Task
- create splash screen
	- implement html and css for design and layout
		- adding start button
		- adding and displaying images

	- implement functtionality to start the game
		- adding function the the button to start the game

- create game screen
	- implement html and css for design and layout
	- creating Classes
		- create TopBotObstacle class
		- create MainCharacter class		
		- create Map class
		- create Plattform class
		- create Goal class
		- Create EnergyBar Class
		- Create Life Class
		
	- creating logic
		- create main.js

- create game-over screen
	- implement html and css for design and layout
	 	- adding restart button
	 	- adding back to start button
		- adding and displaying images



- create winning screen
		- implement html and css for design and layout
	 	- adding restart button
	 	- adding back to start button
		- adding and displaying images


## Additional Links


### Trello
https://trello.com/b/ns0mrfkd/project-gothy


### Slides
[Link Slides.com](http://slides.com)
