import { invoke_multiple } from "../../../love/public/src/invoke_multiple.mjs";
import { list_shuffle } from "../../../love/public/src/list_shuffle.mjs";
export function lambda_invoke_multiple_shuffle(choices) {
  list_shuffle(choices);
  invoke_multiple(choices);
}
