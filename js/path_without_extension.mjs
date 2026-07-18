import { path_extension } from "./path_extension.mjs";
export function path_without_extension(p) {
  let extension = path_extension(p);
  let length = p.length - extension.length;
  let v = p.slice(0, length);
  return v;
}
