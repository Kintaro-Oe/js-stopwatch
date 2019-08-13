function Stopwatch() {
  let startStamp = 0;
  let stopStamp = 0;
  let duration = 0;
  let running = false

  this.start = function() {
    if (running) {
      throw new Error('Stopwatch has already started.')
    }

    running = true;

    startStamp = Date.now();
  }

  this.stop = function() {
    if (!running) {
      throw new Error('Stopwatch is not started.')
    }

    running = false;

    stopStamp = Date.now();

    duration += (stopStamp - startStamp)/1000;
  }

  this.reset = function() {
    startStamp = 0;
    stopStamp = 0;
    duration = 0;
    running = false;
  }

  Object.defineProperty(this, 'duration', {
    get: function() {
      return duration;
    }
  });
}

// const stopwatch = new Stopwatch();
