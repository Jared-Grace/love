import { assert_multiple } from "../../../love/public/src/assert_multiple.mjs";
import { integer_is } from "../../../love/public/src/integer_is.mjs";
import { random } from "../../../love/public/src/random.mjs";
import { floor } from "../../../love/public/src/floor.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
import { multiply } from "../../../love/public/src/multiply.mjs";
import { subtract } from "../../../love/public/src/subtract.mjs";
export function integer_random(min, max) {
  let list = [min, max];
  assert_multiple(integer_is, list);
  let r = text_combine(
    floor(multiply(random(), text_combine(subtract(max, min), 1))),
    min,
  );
  return r;
}
