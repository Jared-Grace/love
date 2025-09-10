import { random } from "./random.mjs";
import { floor } from "./floor.mjs";
export function integer_random(min, max) {
  let v = floor(random() * (max - min + 1)) + min;
  return v;
}
