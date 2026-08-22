import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_label_solve_left_to_right } from "./app_code_label_solve_left_to_right.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_cross_precedence_rule(
  root,
  weak_symbol,
  strong_symbol,
) {
  "the rule of a cross-precedence pair lesson said a line at a time, in its own container: the ordinary left-to-right rule recalled, then that some operators go before others, then that this STRONG one goes before this WEAK one, then that it holds even where the weak one is written first";
  "THE RULE IS BUILT IN FOUR STEPS RATHER THAN STATED IN ONE: the ordinary rule the learner already has, that it has exceptions at all, which two operators this one is about, and only last the case where the strong one is written second. Stated in one line it is four new things arriving together, and the only one a learner can check against anything they already know is the last.";
  "THE FIRST LINE IS THE SENTENCE THE SAME-STRENGTH PAIR LESSONS END ON, word for word, which is why it is a shared unit rather than typed again here. A recall reworded is read as a second rule, and a second rule is the one thing this screen must not add - what follows takes the first line away, so the learner has to recognise it as the very sentence being taken away.";
  "EVERY LINE SAYS SOLVE. Do was the word before, and it is broader than the act being taught - solve is what the learner already calls this from school arithmetic, so the four lines name one act four times rather than naming it and then naming something vaguer.";
  "THE LAST LINE SEPARATES WRITTEN FROM SOLVED. It used to say comes first ... comes later ... do first, spending first on where an operator stands and on when it is solved. Position is now written and solving order is first, so the one line that exists to prise those two apart no longer uses one word for both.";
  arguments_assert(arguments, 3);
  let header = app_code_container_light_blue(root);
  let same_strength = app_code_label_solve_left_to_right();
  html_div_cycle_code(header, [same_strength]);
  html_div_cycle_code(header, [
    "But some operators are solved before other operators",
  ]);
  html_div_cycle_code(header, [
    "We solve ",
    strong_symbol,
    " before ",
    weak_symbol,
  ]);
  html_div_cycle_code(header, [
    "Even when ",
    weak_symbol,
    " is written before ",
    strong_symbol,
    ", we still solve ",
    strong_symbol,
    " first",
  ]);
}
