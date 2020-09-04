# password-generator

For this exercise, Javascript code was used to generate a random password for the user when applied to the already supplied HTML and CSS files.

When the user clicks the "generate password" button, they are met with a prompt to enter a valid password length. If they enter an undefined length, they are alerted that their choice is invalid, but they can click the "generate password" button to try again. Once they enter a defined length, they are then asked if they want to include numbers, uppercase letters, lowercase letters, and/or symbols. Again, if they do not choose any of the characters, they are alerted that their choice is invalid and they must click "generate password" again. 

All of the user's variables are collected using concat arrays, and these arrays are put through a loop to generate a random assortment of the user's preferred characters at their defined lenght. The password is then displayed in the textbox on the screen.
