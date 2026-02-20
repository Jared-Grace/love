import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { folder_previous } from "../../../love/public/src/folder_previous.mjs";
export function path_join(segments) {
  arguments_assert(arguments, 1);
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
  let path = parts.join("/");
  return path;
}
