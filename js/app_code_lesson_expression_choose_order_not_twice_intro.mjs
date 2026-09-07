import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { js_operator_bang_symbol } from "./js_operator_bang_symbol.mjs";
import { app_code_operator_code } from "./app_code_operator_code.mjs";
import { app_code_operator_code_before } from "./app_code_operator_code_before.mjs";
import { noop } from "./noop.mjs";
import { html_style_code_dark } from "./html_style_code_dark.mjs";
import { html_bold } from "./html_bold.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { html_div_cycle } from "./html_div_cycle.mjs";
export function app_code_lesson_expression_choose_order_not_twice_intro(
  parent,
) {
  "the first card of this lesson: the two words for how many things an operator is handed, binary and unary, each shown on a line the learner has already read";
  "The words arrive on arithmetic rather than on ! , because + and - are the operators a learner has been counting sides on since the start of the run. A new word lands on a line that is already understood, so the only new thing on the line is the word.";
  "- CARRIES BOTH WORDS, once with a number on each side and once with a number only after it. So the two words are told apart by how many numbers stand there, never by which symbol is written - and a learner who read them as facts about symbols would have no way to answer here, because the symbol is the same one twice.";
  "EVERY NUMBER BEING COUNTED IS A CODE CHIP, including the ones inside the round brackets of the English. The sentence says there are two numbers and then names them, so the named ones have to look like the numbers on the line above or the sentence is pointing at nothing a learner can match.";
  "Each word is bold at its first mention, the one way this app writes a word it is defining.";
  arguments_assert(arguments, 1);
  let plus = js_operator_plus_symbol();
  let minus = js_operator_minus_symbol();
  let bang = js_operator_bang_symbol();
  let three_plus_four = app_code_operator_code("3", plus, "4");
  let six_minus_five = app_code_operator_code("6", minus, "5");
  let minus_seven = app_code_operator_code_before(minus, "7");
  ("three pieces of code stand before the word being defined, and the plain, code, plain, bold turn cannot put a code piece and a bold piece where these two sentences want them, so both of them say their styling part by part");
  let cycles = [
    noop,
    html_style_code_dark,
    noop,
    html_style_code_dark,
    noop,
    html_style_code_dark,
    noop,
    html_bold,
    noop,
  ];
  html_div_cycle_code(parent, [
    "For ",
    plus,
    ", we use two numbers: ",
    three_plus_four,
  ]);
  html_div_cycle(parent, cycles, [
    "Because there are two numbers (",
    "3",
    " and ",
    "4",
    "), ",
    plus,
    " is a ",
    "binary",
    " operator",
  ]);
  html_div_cycle_code(parent, [
    "Likewise, for ",
    six_minus_five,
    " then ",
    minus,
    " is a binary operator because there are two numbers (",
    "6",
    " and ",
    "5",
    ")",
  ]);
  html_div_cycle(parent, cycles, [
    "But for ",
    minus_seven,
    ", where ",
    minus,
    " is the negative sign, then ",
    minus,
    " is a ",
    "unary",
    " operator",
  ]);
  html_div_cycle_code(parent, [
    "It's called a unary operator because there is only one number (",
    "7",
    ")",
  ]);
  html_div_cycle_code(parent, ["", bang, " is always a unary operator"]);
}
