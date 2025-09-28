import { assert_arguments } from "./assert_arguments.mjs";
import { not } from "./not.mjs";
import { folder_previous } from "./folder_previous.mjs";
export function path_join(segments, a) {
  assert_arguments(arguments, 2);
  let parts = [];
  for (let seg of segments) {
    if (not(seg)) {
      continue;
    }
    let split = seg.split(/[\\/]+/);
    for (let s of split) {
      if (s === "" || s === ".") {
        continue;
      }
      if (s === folder_previous()) {
        if (parts.length > 0 && parts[parts.length - 1] !== folder_previous()) {
          parts.pop();
        } else {
          let previous = folder_previous();
          parts.push(previous);
        }
      } else {
        parts.push(s);
      }
    }
  }
  let joined = parts.join("/");
  return joined;
}
