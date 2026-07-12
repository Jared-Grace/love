import { list_between } from "./list_between.mjs";
export function list_between_comma_space(ds) {
  let between = ", ";
  let mapped = list_between(ds, between);
  return mapped;
}
