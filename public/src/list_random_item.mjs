import { list_get } from "./list_get.mjs";
import { floor } from "./floor.mjs";
import { list_size } from "./list_size.mjs";
import { random } from "./random.mjs";
export function list_random_item(arr) {
  const p = random() * list_size(arr);
  let index = floor(p);
  let r = list_get(arr, index);
  return r;
}
