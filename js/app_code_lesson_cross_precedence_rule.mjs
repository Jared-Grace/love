import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_label_comes_first_done_first } from "./app_code_label_comes_first_done_first.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
export function app_code_lesson_cross_precedence_rule(
  root,
  weak_symbol,
  strong_symbol,
) {
  "the rule of a cross-precedence pair lesson said a line at a time, in its own container: the ordinary left-to-right rule recalled, then that some operators go before others, then that this STRONG one goes before this WEAK one, then that it holds even where the weak one is written first";
  "THE RULE IS BUILT IN FOUR STEPS RATHER THAN STATED IN ONE: the ordinary rule the learner already has, that it has exceptions at all, which two operators this one is about, and only last the case where the strong one is written second. Stated in one line it is four new things arriving together, and the only one a learner can check against anything they already know is the last.";
  "THE FIRST LINE IS THE SENTENCE THE SAME-STRENGTH PAIR LESSONS END ON, word for word, which is why it is a shared unit rather than typed again here. A recall reworded is read as a second rule, and a second rule is the one thing this screen must not add - what follows takes the first line away, so the learner has to recognise it as the very sentence being taken away.";
  "IT DOES NOT SAY NORMALLY OR USUALLY. The but on the next line is what makes the first line the ordinary case, and doing that job twice would hedge the recall at the moment it is meant to be firm.";
  arguments_assert(arguments, 3);
  let header = app_code_container_light_blue(root);
  let same_strength = app_code_label_comes_first_done_first();
  html_div_cycle_code(header, [same_strength]);
  html_div_cycle_code(header, [
    "But some operators are done before other operators",
  ]);
  html_div_cycle_code(header, [
    "We do ",
    strong_symbol,
    " before ",
    weak_symbol,
  ]);
  html_div_cycle_code(header, [
    "Even when ",
    weak_symbol,
    " comes first and ",
    strong_symbol,
    " comes later, we still do ",
    strong_symbol,
    " first",
  ]);
}
