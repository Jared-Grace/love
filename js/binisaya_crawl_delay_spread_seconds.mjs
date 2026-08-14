export function binisaya_crawl_delay_spread_seconds() {
  "How far above the rate binisaya.com asks for the waiting is allowed to wander, in seconds.";
  "The waiting is spread rather than held at one number so that the askings do not arrive on a perfect beat. A queue that ticks to the second is a machine announcing itself, and it is also the shape most likely to line up badly with something else on the far end that happens to run on a beat of its own.";
  "It only ever spreads upward. The rate the site stated is a floor and not an average, so a spread that reached below it would be under the stated rate a good part of the time while the arithmetic still averaged out - which is ignoring what was said, with a number to hide behind.";
  let r = 6;
  return r;
}
