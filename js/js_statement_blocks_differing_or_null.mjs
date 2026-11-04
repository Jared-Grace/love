import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { js_statement_blocks } from "./js_statement_blocks.mjs";
import { list_size } from "./list_size.mjs";
import { less_than } from "./less_than.mjs";
import { list_get } from "./list_get.mjs";
import { js_unparse_multiple } from "./js_unparse_multiple.mjs";
import { lists_equal_pair } from "./lists_equal_pair.mjs";
import { list_add } from "./list_add.mjs";
export function js_statement_blocks_differing_or_null(before, after) {
  "Which of the blocks held inside one statement came back written differently, given the same statement before and after an edit - or nothing at all, where the two do not line up block for block and no such comparison can be made.";
  "TWO STATEMENTS LINE UP OR THEY DO NOT, AND THAT IS A SEPARATE QUESTION FROM WHAT MOVED. Different kinds of statement hold different blocks, and the same kind holds a different number of them once an else appears or a catch goes - in either case there is no pairing to compare across, so an empty answer would be a lie and nothing is the truthful one.";
  "AN EMPTY LIST IS AN ANSWER AND NOT A FAILURE. Two statements that line up block for block with no block differing are two statements whose heads moved: the condition, the thing looped over. That is a real finding and the caller that wants to name it needs it told apart from the case where nothing could be compared, which is the whole reason this says nothing rather than nothing-found.";
  "BOTH READINGS OF AN EDITED STATEMENT ASK THIS. One names what happened inside the single branch that moved; the other names the head having moved instead. They were the same comparison written twice, and written twice they were free to disagree about what lines up.";
  arguments_assert(arguments, 2);
  let kind = property_get(before, "type");
  let kind_after = property_get(after, "type");
  let kinds_same = equal(kind, kind_after);
  if (not(kinds_same)) {
    return null;
  }
  let blocks_before = js_statement_blocks(before);
  let blocks_after = js_statement_blocks(after);
  let size = list_size(blocks_before);
  let right = list_size(blocks_after);
  let counts_same = equal(size, right);
  if (not(counts_same)) {
    return null;
  }
  let differing = [];
  for (let index = 0; less_than(index, size); index++) {
    let block_before = list_get(blocks_before, index);
    let block_after = list_get(blocks_after, index);
    let texts_before = js_unparse_multiple(block_before);
    let texts_after = js_unparse_multiple(block_after);
    let same = lists_equal_pair(texts_before, texts_after);
    if (not(same)) {
      list_add(differing, index);
    }
  }
  return differing;
}
