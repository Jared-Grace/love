import { less_than } from "./less_than.mjs";
export function path_directory(p) {
  let i = p.lastIndexOf("/");
  if (less_than(i, 0)) {
    let r = ".";
    return r;
  }
  let dir = p.slice(0, i);
  return dir;
}
