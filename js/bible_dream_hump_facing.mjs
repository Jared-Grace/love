import { round } from "./round.mjs";
import { divide } from "./divide.mjs";
import { subtract } from "./subtract.mjs";
import { multiply } from "./multiply.mjs";
import { less_than } from "./less_than.mjs";
export function bible_dream_hump_facing(samples, first, last) {
  "Say which way a bump points, as a direction of length one: from the middle of the straight line joining its two ends, out to the point of the curve that stands furthest from it.";
  "★ IT IS MEASURED AND NOT REASONED FROM THE SIGN OF THE BEND. Which way a bump faces for a given direction of bend depends on which way round the screen's up is and on which way along the line the hand went, and getting either backwards puts every ornament on the wrong side of the shape while nothing anywhere goes red. Taking the chord's middle and looking at where the curve actually is cannot be got backwards, because it asks the shape rather than a convention.";
  "How far apart the two ends are is measured here as well, because every caller that has the reach also wants it, and the two are only meaningful together: a bump is deep or shallow relative to how wide it is, and neither number says anything on its own about a drawing whose shapes differ in size by fifteen times.";
  "A bump whose ends meet where its middle is has no direction to give, and it is handed back nothing rather than a division by nearly zero. Callers must treat that as a bump with no ornament, which is right: a shape that comes back to itself is a loop, and a loop faces every way at once.";
  let n = divide(first + last, 2);
  let middle = samples[round(n)];
  let chord_sideways = divide(samples[first].x + samples[last].x, 2);
  let chord_up = divide(samples[first].y + samples[last].y, 2);
  let out_sideways = subtract(middle.x, chord_sideways);
  let out_up = subtract(middle.y, chord_up);
  let reach = Math.sqrt(
    multiply(out_sideways, out_sideways) + multiply(out_up, out_up),
  );
  if (less_than(reach, 0.001)) {
    return null;
  }
  let span_sideways = subtract(samples[last].x, samples[first].x);
  let span_up = subtract(samples[last].y, samples[first].y);
  let span = Math.sqrt(
    multiply(span_sideways, span_sideways) + multiply(span_up, span_up),
  );
  let r = {
    x: divide(out_sideways, reach),
    y: divide(out_up, reach),
    reach,
    span,
  };
  return r;
}
