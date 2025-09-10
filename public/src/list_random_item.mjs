import { floor } from "./floor.mjs";
import { list_size } from "./list_size.mjs";
import { random } from "./random.mjs";
export function list_random_item(arr) {
  const p = random() * list_size(arr);
  let r = arr[floor(p)];
  return r;
}
