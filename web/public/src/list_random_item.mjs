import { floor } from "./floor.mjs";
import { random } from "./random.mjs";
export function list_random_item(arr) {
  const p = random() * arr.length;
  let r = arr[floor(p)];
  return r;
}
