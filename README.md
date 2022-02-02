# NookApp
App gets jokes from api and displays them to the user
This application is programmed in Javascript through the React Native framework and Expo.
It utilized the Navigation library to implement 2 tabs at the bottom as well as a drawer to the side, which consists of the button to retrieve the joke.
Once the button is pressed in the drawer, depending on the type of joke, it may trigger a notification (given the correct permissions) consisting of the jokes setup.
If the user clicks the notification it will show the punchline. If there is no setup, then it will take the user to the joke directly. 
The joke sits on a stack navigator which allows the user to return to the previous screen once the joke is read. 
