import { random } from "../../../love/public/src/random.mjs";
import { floor } from "../../../love/public/src/floor.mjs";
export function integer_random(min, max) {
  let r = floor(random() * (max - min + 1)) + min;
  return r;
}
