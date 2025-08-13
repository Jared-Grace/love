import { string_empty_is } from "./string_empty_is.mjs";
export function string_empty_not_is(name) {
  const ne = !string_empty_is(name);
  return ne;
}
