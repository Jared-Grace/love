import path from "path";
export function path_join(list_of_segments) {
  let joined = path.join(...list_of_segments);
  return joined;
}
