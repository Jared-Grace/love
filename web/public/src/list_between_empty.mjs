import { list_between } from "../../../love/public/src/list_between.mjs";
export function list_between_empty(parts) {
  let combined = list_between(parts, "");
  return combined;
}
