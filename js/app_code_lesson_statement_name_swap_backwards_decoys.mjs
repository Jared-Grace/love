import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_split } from "./text_split.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { list_copy } from "./list_copy.mjs";
import { list_set } from "./list_set.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_swap_at } from "./list_swap_at.mjs";
import { list_index_last } from "./list_index_last.mjs";
import { subtract } from "./subtract.mjs";
import { list_map } from "./list_map.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function app_code_lesson_statement_name_swap_backwards_decoys(
  question,
  answer,
) {
  arguments_assert(arguments, 2);
  ("the wrong programs for keeping a number and swapping: the two starting numbers traded, the saving line moved after the line that overwrites, and the two writings out traded");
  ("Every one holds only the numbers on the screen. Filled from the other questions they held other numbers, so the one program starting at the screen's numbers was the answer and could be picked without reading the lines.");
  ("All of them write out the two numbers the wrong way round or lose one, so none of them writes out what the screen shows. Only for the last two lessons of the ladder: in the two before them both writings out give one number, so trading the writings out would give the right answer again.");
  let lines = text_split_newline(answer);
  function starting_traded() {
    "each of the first two lines keeps its name and takes the other's number";
    let s = list_first(lines);
    let first = text_split(s, " = ");
    let s2 = list_second(lines);
    let second = text_split(s2, " = ");
    let found = list_copy(lines);
    let first2 = list_first(first);
    let second2 = list_second(second);
    let value = text_combine_multiple([first2, " = ", second2]);
    list_set(found, 0, value);
    let first3 = list_first(second);
    let second3 = list_second(first);
    let value2 = text_combine_multiple([first3, " = ", second3]);
    list_set(found, 1, value2);
    return found;
  }
  function traded_at(index_a, index_b) {
    "the program with two of its lines in each other's places";
    let found = list_copy(lines);
    list_swap_at(found, index_a, index_b);
    return found;
  }
  let last = list_index_last(lines);
  let v = starting_traded();
  let v2 = traded_at(2, 3);
  let difference = subtract(last, 1);
  let v3 = traded_at(difference, last);
  let programs = [v, v2, v3];
  let found_all = list_map(programs, list_join_newline);
  return found_all;
}
