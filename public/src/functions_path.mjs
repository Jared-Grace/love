import path from "path";
export function functions_path() {
  let second = ["public", "src"];
  let joined = path.join(...second);
  return joined;
}
