import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_bold } from "./html_bold.mjs";
import { html_div } from "./html_div.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { js_operator_percent_sign } from "./js_operator_percent_sign.mjs";
export function app_code_lesson_expression_remainder_subtract_above(root) {
  arguments_assert(arguments, 1);
  ("what a learner reads before the quiz on this lesson: subtracting the same number again and again, one step to a line, until the answer would go below zero - and then the name that act is given");
  ("Lifted out of the lesson because the lesson itself is a list of what the quiz asks and this is a screen laid out once; the two are read on different occasions and by different people, and holding them in one body meant every reader of either paid for both.");
  ("The operator symbol is asked for here rather than handed in, so the screen is answerable by its own name with nothing to set up first.");
  let percent = js_operator_percent_sign();
  let setup = app_code_container_light_blue(root);
  html_div_cycle_code(setup, [
    "You already know how to subtract like ",
    "20 - 5 - 5",
  ]);
  html_div_cycle_code(setup, [
    "What if you keep subtracting the same number until you can not subtract it again?",
  ]);
  ("ONE STEP TO A LINE. Three lines carried six steps between them: a chain and its value, then a second chain proposed and worked out and judged too many all in one breath, then the reason for that judgement folded together with the conclusion drawn from it. A learner who lost the thread had no line to go back to, because each line held the step they missed AND the step after it.");
  ("The count of 5s is now said out loud as its own line - We used three 5s - so the four-5s line has something to be four OF. It used to be the first mention of counting the subtractions at all, and it arrived already claiming the count was too big.");
  ("Too many is reached rather than asserted. The chain is proposed, worked out to -3, the -3 is called below zero on a line of its own, and only then is four called too many. Every one of those is a step a learner can disagree with separately, which is what makes the conclusion theirs.");
  let work = app_code_container_light_blue(root);
  html_div_cycle_code(work, ["", "17 - 5 - 5 - 5", " solves to ", "2"]);
  html_div_cycle_code(work, ["We used three ", "5", "s"]);
  html_div_cycle_code(work, [
    "If we used another ",
    "5",
    " - if we used four ",
    "5",
    "s then we would have ",
    "17 - 5 - 5 - 5 - 5",
    " which is ",
    "-3",
  ]);
  html_div_cycle_code(work, ["", "-3", " is below zero"]);
  html_div_cycle_code(work, [
    "Four ",
    "5",
    "s solved to a negative number, so that was too many ",
    "5",
    "s",
  ]);
  html_div_cycle_code(work, [
    "So three ",
    "5",
    "s is the most we can subtract from ",
    "17",
  ]);
  let result = app_code_container_light_blue(root);
  html_div_cycle_code(result, [
    "So ",
    "2",
    " is what remains after we kept subtracting ",
    "5",
    " from ",
    "17",
  ]);
  html_div_cycle_code(result, ["So we write ", "17 % 5 === 2"]);
  let define = app_code_container_light_blue(root);
  html_div_cycle_code(define, [
    "",
    percent,
    " means we keep subtracting the second number from the first number until what remains is smaller than the second number",
  ]);
  let named = html_div(define);
  html_span_text(named, "When we ");
  html_span_text_code_dark(named, percent);
  html_span_text(named, ", what remains is called the ");
  let word = html_span_text(named, "remainder");
  html_bold(word);
}
