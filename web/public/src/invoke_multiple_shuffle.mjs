import { marker } from "../../../love/public/src/marker.mjs";
import { invoke_multiple } from "../../../love/public/src/invoke_multiple.mjs";
import { list_shuffle } from "../../../love/public/src/list_shuffle.mjs";
export function invoke_multiple_shuffle(choices) {
  marker("1");
  list_shuffle(choices);
  invoke_multiple(choices);
}
