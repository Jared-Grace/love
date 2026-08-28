import { fn_name } from "./fn_name.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_size } from "./list_size.mjs";
import { subtract } from "./subtract.mjs";
import { each_index } from "./each_index.mjs";
import { equal_0 } from "./equal_0.mjs";
import { equal } from "./equal.mjs";
import { ternary } from "./ternary.mjs";
export function html_cycle_parts_and_list(codes) {
  arguments_assert(arguments, 1);
  ("a list of code words written out as the alternating plain-then-code parts ",
    fn_name("html_cycle_code"),
    " takes, joined the way English joins a list - handed the three arithmetic symbols it gives back the parts that paint + , - and /, each symbol as code and the punctuation between them as plain text");
  ("IT IS BUILT FROM THE LIST RATHER THAN TYPED OUT, which is the whole of why it exists: a row that names every one of something can then be built from the very list the rest of the code draws from, and cannot go on naming three of them after a fourth is added to that list.");
  ("The separator stands BEFORE each word rather than after it, because that is what puts an empty plain piece at the front. ",
    fn_name("html_cycle_code"),
    " paints the even places as prose and the odd places as code, so a parts list opening with a code word would have that word painted as prose and every piece after it painted as the wrong one of the two.");
  let parts_built = [];
  let count = list_size(codes);
  let last_index = subtract(count, 1);
  each_index(codes, part_add);
  return parts_built;
  function part_add(code_word, index) {
    let first_is = equal_0(index);
    let last_is = equal(index, last_index);
    let comma_word = ", ";
    let and_word = " and ";
    let empty_word = "";
    let joining_word = ternary(last_is, and_word, comma_word);
    let separator = ternary(first_is, empty_word, joining_word);
    list_add_multiple(parts_built, [separator, code_word]);
  }
}
