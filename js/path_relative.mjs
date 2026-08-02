import { not_equal } from "./not_equal.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function path_relative(from_dir, to_path) {
  arguments_assert(arguments, 2);
  function lambda(s) {
    let r = not_equal(s, "") && not_equal(s, ".");
    return r;
  }
  let from_parts = from_dir.split("/").filter(lambda);
  function lambda2(s) {
    let r2 = not_equal(s, "") && not_equal(s, ".");
    return r2;
  }
  let to_parts = to_path.split("/").filter(lambda2);
  let i = 0;
  for (
    ;
    less_than(i, from_parts.length) &&
    less_than(i, to_parts.length) &&
    equal(from_parts[i], to_parts[i]);
    i++
  ) {}
  let segments = [];
  for (let u = i; less_than(u, from_parts.length); u++) {
    segments.push("..");
  }
  for (let d = i; less_than(d, to_parts.length); d++) {
    segments.push(to_parts[d]);
  }
  let joined = segments.join("/");
  if (equal(joined, "")) {
    let r3 = ".";
    return r3;
  }
  if (equal(segments[0], "..")) {
    return joined;
  }
  let r4 = "./" + joined;
  return r4;
}
