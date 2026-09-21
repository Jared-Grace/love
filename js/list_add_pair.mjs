import { list_add } from "./list_add.mjs";
import { each_pair } from "./each_pair.mjs";
export function list_add_pair(list_a, list_b) {
  each_pair(list_a, list_b, list_add);
}
