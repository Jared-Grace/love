import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { not_equal } from "./not_equal.mjs";
import { subtract } from "./subtract.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_lesson_prose_code_drawers } from "./app_code_lesson_prose_code_drawers.mjs";
import { js_blocks_all } from "./js_blocks_all.mjs";
import { app_code_lesson_prose_tail_text_node_or_null } from "./app_code_lesson_prose_tail_text_node_or_null.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { app_code_lesson_prose_drawer_name_after } from "./app_code_lesson_prose_drawer_name_after.mjs";
import { list_includes } from "./list_includes.mjs";
import { text_combine } from "./text_combine.mjs";
import { property_set } from "./property_set.mjs";
import { property_delete } from "./property_delete.mjs";
import { each } from "./each.mjs";
export function app_code_lesson_prose_colon_ast_add(ast) {
  arguments_assert(arguments, 1);
  ("Put a colon on the end of every line of lesson writing that has a block of code drawn underneath it, and hand back how many were changed.");
  ("A colon is what tells a reader the line above is pointing at the code below rather than saying something on its own. The screens were written one at a time and most of them have it; the ones that do not read as a sentence stopping and a block of code appearing for no stated reason.");
  ("Only a line that is already sitting above a code block is touched, so what gets a colon is decided by what the screen does rather than by how the sentence is worded. That is what makes this safe to run over everything: a line with nothing under it is left exactly as it was, and running it twice changes nothing the second time.");
  ("A line whose written text has a space at either end is left alone. Adding a colon after a trailing space would put the mark in the wrong place, and the surrounding space is there to join the line to something, so a line shaped that way is not a sentence waiting for punctuation.");
  ("The characters somebody typed are dropped along with the value being set, because a written-out piece of text is kept twice over and the characters are what gets printed back. Setting the value alone leaves the file identical.");
  let prose_fn = fn_name("html_div_cycle_code");
  let drawers = app_code_lesson_prose_code_drawers();
  let colon = ":";
  let added = 0;
  let blocks = js_blocks_all(ast);
  function lambda_block(block) {
    let body = block.body;
    let count = body.length;
    let place = 0;
    while (less_than(place, count)) {
      let node = body[place];
      let expression = node.expression;
      let saying = false;
      if (expression) {
        if (expression.callee) {
          saying = equal(expression.callee.name, prose_fn);
        }
      }
      place = place + 1;
      if (not(saying)) {
        continue;
      }
      let tail = app_code_lesson_prose_tail_text_node_or_null(node);
      if (not(tail)) {
        continue;
      }
      let wording = tail.value;
      let tidy = text_trim(wording);
      let spaced = not_equal(tidy, wording);
      if (spaced) {
        continue;
      }
      let already = text_ends_with(wording, colon);
      if (already) {
        continue;
      }
      let place2 = subtract(place, 1);
      let follower = app_code_lesson_prose_drawer_name_after(body, place2);
      let draws = list_includes(drawers, follower);
      if (not(draws)) {
        continue;
      }
      let after = text_combine(wording, colon);
      property_set(tail, "value", after);
      property_delete(tail, "raw");
      added = added + 1;
    }
  }
  each(blocks, lambda_block);
  return added;
}
