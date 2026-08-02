import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { not } from "./not.mjs";
import { text_combine } from "./text_combine.mjs";
import { subtract } from "./subtract.mjs";
export function path_join(segments) {
  if (not(segments) || not(segments.length)) {
    throw new Error("Missing segments");
  }
  let parts = [];
  let isAbsolute = false;
  for (let i = 0; less_than(i, segments.length); i++) {
    let seg = segments[i];
    if (not(seg)) {
      continue;
    }
    if (equal(i, 0)) {
      if (seg.startsWith("/") || /^[a-zA-Z]:[\\/]/.test(seg)) {
        isAbsolute = true;
      }
    }
    let split = seg.split(/[\\/]+/);
    for (let s of split) {
      if (equal(s, "") || equal(s, ".")) {
        continue;
      }
      if (equal(s, "..")) {
        if (parts.length && not_equal(parts[subtract(parts.length, 1)], "..")) {
          parts.pop();
        } else {
          parts.push("..");
        }
      } else {
        parts.push(s);
      }
    }
  }
  let joined = parts.join("/");
  let r = isAbsolute ? text_combine("/", joined) : joined;
  return r;
}
