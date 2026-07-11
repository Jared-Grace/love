import { floor } from "../../../love/public/src/floor.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { random } from "../../../love/public/src/random.mjs";
import { multiply } from "../../../love/public/src/multiply.mjs";
export function list_random_index(list) {
  let p = multiply(random(), list_size(list));
  let index = floor(p);
  return index;
}
