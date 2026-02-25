import { list_includes } from "../../../love/public/src/list_includes.mjs";
export function list_includes_if(values, value, lambda_if) {
  let includes = list_includes(values, value);
  if (includes) {
    lambda_if();
  }
}
