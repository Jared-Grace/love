import { lambda_invoke_multiple_shuffle } from "../../../love/public/src/lambda_invoke_multiple_shuffle.mjs";
export function lambda_invoke_multiple_shuffle_2(correct, wrong) {
  let choices = [correct, wrong];
  lambda_invoke_multiple_shuffle(choices);
}
