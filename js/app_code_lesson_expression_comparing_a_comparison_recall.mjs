import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_expression_arithmetic_less_than } from "./app_code_lesson_expression_arithmetic_less_than.mjs";
import { app_code_operators_comparison_or_list } from "./app_code_operators_comparison_or_list.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_lesson_expression_comparing_a_comparison_recall(
  root,
  context,
) {
  arguments_assert(arguments, 2);
  ("the word comparison put back in front of the learner before this lesson leans on every line of it. It does NOT define the word: the arithmetic-comparison lesson does that, where the word is first met, bold on its first mention, followed by these same six operators");
  ("One line, with the six operators inlined rather than spelled out as six whole comparisons. The symbol is the only thing that differs between them, so six worked-out lines would repeat two numbers six times to show one difference - and they would also read as six things to learn where there is one");
  ("The six come from the one list that holds them, so no other lesson can teach the word a different set");
  ("Nothing here is bold, and that is the point. A bold word is how the repo says a term is BEING DEFINED, and it is spent at first mention - bolding it a second time tells a learner a second term has arrived and stops them on a line they were meant to recognise and pass over in a second. Same reason this says Remember and joins the six with or: it echoes the shape of the defining line rather than restating it a new way, and a recall is worth its card only when it is recognised");
  let card = app_code_container_light_blue(root);
  let line = app_code_remember_from_lesson(
    card,
    context,
    app_code_lesson_expression_arithmetic_less_than,
    ["a comparison uses one of "],
  );
  app_code_operators_comparison_or_list(line);
}
