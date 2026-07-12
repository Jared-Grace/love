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
  let r = text_combine(
    floor(multiply(random(), text_combine(subtract(max, min), 1))),
    min,
  );
  return r;
}
