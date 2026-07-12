import { json_from } from "./json_from.mjs";
import { json_to } from "./json_to.mjs";
export function json_copy(o) {
  let json = json_to(o);
  let copy = json_from(json);
  return copy;
}
