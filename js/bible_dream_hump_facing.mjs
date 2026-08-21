export function bible_dream_hump_facing(samples, first, last) {
  "Say which way a bump points, as a direction of length one: from the middle of the straight line joining its two ends, out to the point of the curve that stands furthest from it.";
  "★ IT IS MEASURED AND NOT REASONED FROM THE SIGN OF THE BEND. Which way a bump faces for a given direction of bend depends on which way round the screen's up is and on which way along the line the hand went, and getting either backwards puts every ornament on the wrong side of the shape while nothing anywhere goes red. Taking the chord's middle and looking at where the curve actually is cannot be got backwards, because it asks the shape rather than a convention.";
  "A bump whose ends meet where its middle is has no direction to give, and it is handed back nothing rather than a division by nearly zero. Callers must treat that as a bump with no ornament, which is right: a shape that comes back to itself is a loop, and a loop faces every way at once.";
  let middle = samples[Math.round((first + last) / 2)];
  let chord_sideways = (samples[first].x + samples[last].x) / 2;
  let chord_up = (samples[first].y + samples[last].y) / 2;
  let out_sideways = middle.x - chord_sideways;
  let out_up = middle.y - chord_up;
  let reach = Math.sqrt(out_sideways * out_sideways + out_up * out_up);
  if (reach < 0.001) {
    return null;
  }
  return { x: out_sideways / reach, y: out_up / reach, reach };
}
