import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_lesson_braces_run_explain_generic } from "./app_code_lesson_braces_run_explain_generic.mjs";
export function app_code_lesson_braces_run_generic(
  title,
  rules,
  code_get,
  names,
) {
  arguments_assert(arguments, 4);
  ("a lesson on whether each section of code runs, in programs of one shape, code_get's, whose ifs ask names: each { ... } is coloured in turn and the learner says whether it runs; one that does not is swallowed, and one that runs loses the if around it, its lines moving out to where they now stand. rules are the lines that say what is new about the shape, each a list of pieces for ",
    fn_name("html_div_cycle_code"));
  ("Asked for by the human 2026-10-11: one of these straight before the first lesson of every shape of ifs with two or three pairs of braces, that shape's lesson then asking what it writes out. So each of these is where its shape is first met, and its rules say what the shape does, which the lesson after says again in its own way.");
  ("There is one quiz, the same answering as the worked example, because the question - a program - and the answer - what runs of it - are the lesson's whole fact. The answer kept for a correction is the program as the steps leave it.");
  function explain(root, context) {
    "the rules, in a box of their own";
    let box_rules = app_code_container_light_blue(root);
    for (let pieces of rules) {
      html_div_cycle_code(box_rules, pieces);
    }
  }
  let lesson = app_code_lesson_braces_run_explain_generic(
    title,
    explain,
    code_get,
    names,
  );
  return lesson;
}
