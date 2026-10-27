import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_if_blocks } from "./app_code_if_blocks.mjs";
import { list_size } from "./list_size.mjs";
import { app_code_if_blocks_lines_kept } from "./app_code_if_blocks_lines_kept.mjs";
import { text_get } from "./text_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function app_code_if_blocks_kept(code) {
  arguments_assert(arguments, 1);
  ("a program as its steps leave it on the page once every section has been answered: what does not run is gone, every if and else around what runs is gone, and what ran stands moved out to where it now belongs; a line left with nothing on it goes too");
  ("2026-10-12: the lines are ",
    fn_name("app_code_if_blocks_lines_kept"),
    "'s, with every section answered, so a walkthrough stopping partway leaves the program as this does at the end.");
  let blocks = app_code_if_blocks(code);
  let count = list_size(blocks);
  let lines = app_code_if_blocks_lines_kept(code, blocks, count);
  let kept = [];
  for (let line of lines) {
    let written = "";
    for (let i of line) {
      written = written + text_get(code, i);
    }
    list_add(kept, written);
  }
  let joined = list_join_newline(kept);
  return joined;
}
