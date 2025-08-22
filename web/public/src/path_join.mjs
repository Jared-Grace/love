import path from "path";
export function path_join(list_of_segments) {
  let v = path.join(...list_of_segments);
  return v;
}
