## Stopwatch

Create a simple console app that meets the specification below, using ECMA S6 syntax (let/const etc) and Object.defineProperty approach to create getter/setter methods.

## Specifications

* The stopwatch can be started
* The stopwatch can be stopped
* The stopwatch can be restarted
* The stopwatch duration can be shown
* An error is thrown if trying to start when already started
* An error is thrown if trying to stop when not yet started

## How to use this app

* Clone this repo
* Navigate to the new repo from the command line and enter: `open index.html`. This will launch the application within your browser where you can interact with the app through the dev tools console.

* `const stopwatch = new Stopwatch();` creates a stopwatch object
* `.start()` starts the timer
* `.stop() ` stops the timer
* `.reset() ` resets the timer
* `.duration` displays the duration passed in seconds.
