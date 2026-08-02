import { math_max } from "./math_max.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
export function path_extension(path) {
  let lastDot = path.lastIndexOf(".");
  let v = path.lastIndexOf("/");
  let v2 = path.lastIndexOf("\\");
  let lastSlash = math_max(v, v2);
  if (equal(lastDot, -1) || less_than(lastDot, lastSlash)) {
    let r = "";
    return r;
  }
  let extension = path.slice(lastDot);
  return extension;
}
