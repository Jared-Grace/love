import { list_includes } from "./list_includes.mjs";
export function list_includes_if(values, value, lambda) {
  let includes = list_includes(values, value);
  if (includes) {
    lambda();
  }
}
