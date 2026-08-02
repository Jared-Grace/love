import { arguments_assert } from "./arguments_assert.mjs";
import { divide } from "./divide.mjs";
import { floor } from "./floor.mjs";
export function divide_floor(number, divisor) {
  arguments_assert(arguments, 2);
  ("One number shared out among another, kept to whole ones - anything left over is");
  ("dropped.");
  ("How many whole rows a list fills, which page a position lands on, how many");
  ("whole minutes a count of seconds comes to. All of them share out and then");
  ("throw the fraction away, and the fraction in between has no meaning of its own");
  ("in any of them.");
  let shared = divide(number, divisor);
  let whole = floor(shared);
  return whole;
}
