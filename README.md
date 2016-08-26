# escaping-shia

This project was my first experience coding a project from start to finish for GA's web development class. I learned a lot about planning projects and using game logic. It was entirely front-end designed and a deployed version can be found <a href="http://echerney.github.io/escaping-shia">here</a>

First off, my game will likely make no sense if you haven't seen the pop-culture classic, <a href="https://www.youtube.com/embed/o0u4M6vppCI">Rob Cantor's Shia Lebouf song.</a>

My game is an interactive maze that will ask the user to solve simple math problems quickly to keep them away from Shia LeBouf, who is chasing them. The game opens showing the song this game is based on, a silly creation of Rob Cantor painting a story of actor Shia Lebouf as a cannibal chasing the main character through a forest. When the game begins, the player is shown a question chosen randomly out of an array of 25 questions. When answered correctly, the player progresses one space in the maze. 

The maze is a table with the cells numbered by ID's of B and the number of the space in the maze. I first tried to make the ID just the number, but it created some problems with the CSS. In order to know where each character should move next, a jQuery function identifies the IDs of the character (identified by classes) and removes that class. It then removes the B and parses the string into a number, adds the B back to the ID and adds the class of the character to the cell with that ID. 

Shia Lebouf is seen chasing the player with his character following at an interval of 4.5 seconds, which after some testing seemed to be enough time to solve the math problems shown but also created some pressure.

Another function is run each time the player or Shia moves, and uses jQuery to check the position of both characters. If the player has made it to the end, they see a video of Shia Lebouf applauding for them. If Shia has won, the player is alerted. If Shia is only one cell behind the player, the screen shakes and a warning shows up below the input box.

Before the player is able to get to the end of the maze, they get "caught in a bear trap" and must first tell the game they plan to gnaw their leg off to get away, and then answer an algebra question correctly to see if they successfully gnaw off their leg in order to escape Shia and get to the cottage at the end of the game.



<img src="https://github.com/echerney/escaping-shia/blob/master/Screen%20Shot%202016-06-08%20at%2012.17.03%20PM.png?raw=true">


##Bibliography:

I used <a href="cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.css">skeleton</a>, <a href="http://s.mlcdn.co/animate.css">animate</a>, and <a href="https://code.jquery.com/jquery-2.2.4.min.js>jquery</a> libraries for this project. Images used were the <a href="http://www.kokean.com/i/creepy-forest-wallpaper-background.jpg">background</a>, the <a href="http://vignette2.wikia.nocookie.net/nozombiesallowed/images/6/66/Log_Cabin.png/revision/latest?cb=20120725114501">cabin in the woods</a>, the <a href="http://www.clipartbest.com/cliparts/bTy/EzA/bTyEzAoXc.png">wrong answer symbol, the <a href="http://s3.amazonaws.com/thisismyjam/i/f48ef711bcb9adbc3b0e63e69cfa5bde.jpg?1336256520">closeup of Shia Lebouf's bloody face</a>, the <a href="http://rs195.pbsrc.com/albums/z124/SylviaG_Photo/Smiley%20Faces/running20stick20man.gif~c200">running stick figure</a>, and the crawling stick figure with a bloody stump leg, which I surprisingly enough had to make myself. The internet failed me this time. I used videos from <a href="https://www.youtube.com/user/robcantormusic">Rob Cantor</a> and referenced <a href="http://colours.neilorangepeel.com/">Neil's Orange Peel</a> for colors. I researched how to change an element's <a href="http://www.w3schools.com/css/css_image_transparency.asp">opacity</a>, how to set and clear <a href="https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setInterval#Example">intervals</a>, and how to make youtube videos <a href="http://stackoverflow.com/questions/3405242/how-can-i-autoplay-a-video-using-the-new-embed-code-style-for-youtube">autoplay</a>. Fonts came from <a href="http://fonts.googleapis.com/css?family=Walter+Turncoat">Googleapis</a>.
