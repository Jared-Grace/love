export function g_ripple_delay_seconds(index) {
  "how long the thing this far along a ripple waits before it moves.";
  "Each place further along waits one more small gap than the place before it, so a row of things moves as a wave running down it rather than as one piece sliding. The gap is small on purpose: it is a delay before a slide that itself takes a moment, so the later ones are already moving while the earlier ones are still finishing.";
  let gap = 0.05;
  let place = add(index, 1);
  let seconds = multiply(place, gap);
  return seconds;
}
