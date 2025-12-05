import { lambda_invoke_multiple } from "../../../love/public/src/lambda_invoke_multiple.mjs";
import { list_shuffle } from "../../../love/public/src/list_shuffle.mjs";
export function lambda_invoke_multiple_shuffle(choices) {
  list_shuffle(choices);
  lambda_invoke_multiple(choices);
}
