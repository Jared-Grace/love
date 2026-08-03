import { add } from "./add.mjs";
import { assert_multiple } from "./assert_multiple.mjs";
import { integer_is } from "./integer_is.mjs";
import { random } from "./random.mjs";
import { floor } from "./floor.mjs";
import { text_combine } from "./text_combine.mjs";
import { multiply } from "./multiply.mjs";
import { subtract } from "./subtract.mjs";
export function integer_random(min, max) {
  let list = [min, max];
  assert_multiple(integer_is, list);
  let left = random();
  let left2 = subtract(max, min);
  let right = add(left2, 1);
  let p = multiply(left, right);
  let left3 = floor(p);
  let r = text_combine(left3, min);
  return r;
}
