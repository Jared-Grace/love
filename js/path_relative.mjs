import { arguments_assert } from "./arguments_assert.mjs";
export function path_relative(from_dir, to_path) {
  arguments_assert(arguments, 2);
  let from_parts = from_dir.split("/").filter((s) => s !== "" && s !== ".");
  let to_parts = to_path.split("/").filter((s) => s !== "" && s !== ".");
  let i = 0;
  for (
    ;
    i < from_parts.length && i < to_parts.length && from_parts[i] === to_parts[i];
    i++
  ) {}
  let segments = [];
  for (let u = i; u < from_parts.length; u++) {
    segments.push("..");
  }
  for (let d = i; d < to_parts.length; d++) {
    segments.push(to_parts[d]);
  }
  let joined = segments.join("/");
  if (joined === "") {
    return ".";
  }
  if (segments[0] === "..") {
    return joined;
  }
  return "./" + joined;
}
