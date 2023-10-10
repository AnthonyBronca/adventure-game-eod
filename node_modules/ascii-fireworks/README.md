# ASCII FIREWORKS

I utilized JavaScript to create some simple animated fireworks for that celebratory
console.log! To use, simply install using:

```
npm i ascii-fireworks
```

Then import it using:

```
const fireWorkAnimation = require('ascii-fireworks');
```

![fireworks-example](https://user-images.githubusercontent.com/95654116/225565805-dae3cc48-c516-4f2e-a81c-409719809f97.gif?raw=true)

fireWorkAnimation has 2 optional arguments.

If nothing is passed in, you simply get the default firework animation with no text.
It will run this for 10 frames, at 1 frame per 350 milliseconds

The first argument is an optional message you want displayed at the center of the fireworks. There are some basic error handlings so it will convert non-strings to an empty string.

The second argument is an optional time change for the setInterval frames. setInterval runs using miliseconds, so if you want 1 frame per second you can use 1000. I recommend using between 300 - 600 for a smoother animation. Anything less than 300 may be too fast and not look as smooth.

Please let me know if there are any bugs or updates needed!

P.S this was made for educational purposes, as I want my students to be able to easily import this into their terminal based games as needed.
