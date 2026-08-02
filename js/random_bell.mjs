export function random_bell(next) {
  "One draw from a seeded generator, reshaped so numbers near the middle come up often and numbers near either end come up rarely. Answers between minus one and one, and sits near zero.";
  "A plain draw is FLAT - every value equally likely - which reads as noise rather than as a population. Averaging three flat draws bends it into a hill, because landing in the middle can happen many ways and landing at an end has to happen the one way. Three is the fewest that gives a recognisable hill.";
  "The caller decides what the ends and the middle mean, because the shape is the reusable part and the range never is.";
  let a = next();
  let b = next();
  let c = next();
  let summed = a + b + c;
  let averaged = summed / 3;
  let centered = averaged - 0.5;
  let r = centered * 2;
  return r;
}
