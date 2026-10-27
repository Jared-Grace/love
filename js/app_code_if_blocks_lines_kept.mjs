import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { less_than } from "./less_than.mjs";
import { app_code_if_block_reached } from "./app_code_if_block_reached.mjs";
import { not } from "./not.mjs";
import { list_get } from "./list_get.mjs";
import { property_get } from "./property_get.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { not_equal } from "./not_equal.mjs";
import { list_add } from "./list_add.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_size } from "./text_size.mjs";
import { list_size } from "./list_size.mjs";
import { list_slice } from "./list_slice.mjs";
import { text_get } from "./text_get.mjs";
import { text_trim } from "./text_trim.mjs";
export function app_code_if_blocks_lines_kept(code, blocks, count) {
  arguments_assert(arguments, 3);
  ("a program as its steps leave it once the first count sections of blocks, ",
    fn_name("app_code_if_blocks"),
    "'s of code, have been answered: each line still standing, as the places in code of the letters it keeps. What does not run is gone, every if and else around what runs is gone, what ran stands moved out to where it now belongs, and a line left with nothing on it goes too");
  ("Places rather than letters, so a caller drawing the program can still find a pair's braces by where they stood in code; a section not reached is skipped, as the steps skip it.");
  let removed = [];
  let dedents = [];
  for (let n = 0; less_than(n, count); n++) {
    let b = app_code_if_block_reached(blocks, n);
    if (not(b)) {
      continue;
    }
    let block = list_get(blocks, n);
    let steps = property_get(block, "steps");
    for (let step of steps) {
      let fades = property_get(step, "fades");
      list_add_multiple(removed, fades);
      let dedent = property_get(step, "dedent");
      if (not_equal(dedent, null)) {
        list_add(dedents, dedent);
      }
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
    let written = [];
    for (let i = start; less_than(i, end); i++) {
      let b2 = removed_is(i);
      if (not(b2)) {
        list_add(written, i);
      }
    }
    let moved = 0;
    for (let d of dedents) {
      let from = property_get(d, "from");
      let to = property_get(d, "to");
      if (less_than(from, start) && less_than(end, to)) {
        moved = moved + property_get(d, "size");
      }
    }
    let to2 = list_size(written);
    let outdented = list_slice(written, moved, to2);
    let text = "";
    for (let i of outdented) {
      text = text + text_get(code, i);
    }
    let trimmed = text_trim(text);
    if (not_equal(trimmed, "")) {
      list_add(kept, outdented);
    }
    start = end + 1;
  }
  return kept;
}
