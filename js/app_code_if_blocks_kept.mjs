import { not_equal } from "./not_equal.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_if_blocks } from "./app_code_if_blocks.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_size } from "./text_size.mjs";
import { text_trim } from "./text_trim.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function app_code_if_blocks_kept(code) {
  arguments_assert(arguments, 1);
  ("a program with every { ... } that does not run taken out of it, as the swallowing leaves it on the page: what was inside its braces goes, and with it the whole if when the if has no else, or the else from the end of its if; a line left with nothing on it goes too");
  let blocks = app_code_if_blocks(code);
  let removed = [];
  for (let block of blocks) {
    let runs = property_get(block, "runs");
    if (runs) {
      continue;
    }
    let open = property_get(block, "open");
    let close = property_get(block, "close");
    list_add(removed, {
      from: open + 1,
      to: close,
    });
    let after = property_get(block, "after");
    if (not_equal(after, null)) {
      list_add(removed, after);
    }
  }
  function removed_is(index) {
    "whether a letter of the program stands inside something taken out";
    for (let r of removed) {
      let from = property_get(r, "from");
      let to = property_get(r, "to");
      if (less_than_equal(from, index) && less_than(index, to)) {
        return true;
      }
    }
    return false;
  }
  let lines = text_split_newline(code);
  let kept = [];
  let start = 0;
  for (let line of lines) {
    let end = start + text_size(line);
    let written = "";
    for (let i = start; less_than(i, end); i++) {
      let b = removed_is(i);
      if (not(b)) {
        written = written + code[i];
      }
    }
    let trimmed = text_trim(written);
    if (not_equal(trimmed, "")) {
      list_add(kept, written);
    }
    start = end + 1;
  }
  let joined = list_join_newline(kept);
  return joined;
}
