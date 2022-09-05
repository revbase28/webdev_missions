function animate({ duration, draw, timing }) {
  let start = performance.now();
  requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    let progress = timing(timeFraction);
    draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
}

function back(x, timeFraction) {
  return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x);
}

function animateEndless({ draw, timing, speed }) {
  let start = performance.now();
  requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / speed - 100;

    if (timeFraction > 200) start = performance.now();
    let progress = timing(timeFraction);
    draw(progress);

    requestAnimationFrame(animate);
  });
}

function dollyEffect(elem, interval, initSize, maxSize) {
  let size = initSize;
  let direction = 1;
  setInterval(function () {
    elem.style.width = size + "%";
    size = size + 0.05 * direction;
    if (size >= maxSize) {
      direction = -1;
    } else if (size <= initSize) {
      direction = 1;
    }
  }, interval);
}
