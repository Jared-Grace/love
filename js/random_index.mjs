export function random_index(next, size) {
  "A whole number that can stand as a position in a list of the size given - nought up to one below it.";
  "The generator is RECEIVED, which is the whole difference between this and the pick that reaches for the machine's own randomness. A game seeded on its save has to draw every choice out of that seed, and one pick quietly drawn from somewhere else makes the same save play differently twice.";
  let drawn = next();
  let r = multiply_floor(drawn, size);
  return r;
}
