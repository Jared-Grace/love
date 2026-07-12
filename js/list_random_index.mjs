import { floor } from "./floor.mjs";
import { list_size } from "./list_size.mjs";
import { random } from "./random.mjs";
import { multiply } from "./multiply.mjs";
export function list_random_index(list) {
  let p = multiply(random(), list_size(list));
  let index = floor(p);
  return index;
}
