import { multiply_floor } from "./multiply_floor.mjs";
import { list_size } from "./list_size.mjs";
import { random } from "./random.mjs";
export function list_random_index(list) {
  let index = multiply_floor(random(), list_size(list));
  return index;
}
