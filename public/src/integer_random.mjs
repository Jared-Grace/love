import { each } from "../../../love/public/src/each.mjs";
import { integer_is } from "../../../love/public/src/integer_is.mjs";
import { assert } from "../../../love/public/src/assert.mjs";
import { random } from "../../../love/public/src/random.mjs";
import { floor } from "../../../love/public/src/floor.mjs";
export function integer_random(min, max) {
  let fn = integer_is;
  let ii = fn(min);
  assert(ii);
  function lambda(item) {}
  each(list, lambda);
  let r = floor(random() * (max - min + 1)) + min;
  return r;
}
