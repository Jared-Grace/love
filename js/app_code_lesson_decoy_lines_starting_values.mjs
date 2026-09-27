import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_parse } from "./js_parse.mjs";
import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
import { list_first } from "./list_first.mjs";
import { text_to } from "./text_to.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
import { each } from "./each.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_size } from "./list_size.mjs";
import { list_add } from "./list_add.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function app_code_lesson_decoy_lines_starting_values(question, answer) {
  arguments_assert(arguments, 2);
  ("the tempting wrong answers for a program that moves numbers between names: every way of writing the numbers the names started with on the lines the answer has, except the answer itself");
  ("The mistakes a learner makes about swapping are all of this shape - both names holding the first number, both holding the second, or each still holding what it started with - so offering every one of them means each mistake has a button to be caught on.");
  ("The question is read for the numbers the program starts with, because the answer alone cannot give them: after a = b; b = a; both lines of the answer are the same number, and the one that was lost is exactly the one a learner expects to see.");
  let ast = js_parse(question);
  let starting = [];
  function starting_add(statement) {
    "the number a line starting a name gives it, if it is a line that starts a name with a number";
    let b = equal(statement.type, "VariableDeclaration");
    if (not(b)) {
      return;
    }
    let init = list_first(statement.declarations).init;
    let b2 = equal(init.type, "Literal");
    if (not(b2)) {
      return;
    }
    let b3 = equal(typeof init.value, "number");
    if (not(b3)) {
      return;
    }
    let text = text_to(init.value);
    list_add_if_not_includes(starting, text);
  }
  each(ast.body, starting_add);
  let lines = text_split_newline(answer);
  let count = list_size(lines);
  let written = [[]];
  for (let i = 0; less_than(i, count); i++) {
    let longer = [];
    for (let before of written) {
      for (let value of starting) {
        let item = list_concat(before, [value]);
        list_add(longer, item);
      }
    }
    written = longer;
  }
  let decoys = [];
  for (let each_lines of written) {
    let text = list_join_newline(each_lines);
    let b4 = equal(text, answer);
    if (not(b4)) {
      list_add(decoys, text);
    }
  }
  return decoys;
}
