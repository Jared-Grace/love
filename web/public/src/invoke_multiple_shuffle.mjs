import { invoke_multiple } from "../../../love/public/src/invoke_multiple.mjs";
import { list_shuffle } from "../../../love/public/src/list_shuffle.mjs";
export function invoke_multiple_shuffle(list) {
  list_shuffle(list);
  invoke_multiple(list);
}
