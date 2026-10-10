import { app_code_tokens_explain_colors } from "./app_code_tokens_explain_colors.mjs";
import { app_code_tokens_painted } from "./app_code_tokens_painted.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { app_code_quiz_tokens_order } from "./app_code_quiz_tokens_order.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { each } from "./each.mjs";
export function app_code_tokens_explain(parent) {
  arguments_assert(arguments, 1);
  ("what a token is, with a small example cut into its tokens, and the order tokens are read in, for a lesson's opening; as the human laid it out 2026-10-10: the example as plain code, then as written with each token in a colour of its own, then its tokens apart in those same colours, then its tokens apart and plain");
  ("The example has both braces, so the learner sees a { and a } each counted as a token of its own before any brace lesson leans on that.");
  html_div_cycle_code(parent, ["Each piece of code is called a token"]);
  let example = "if (a) { }";
  html_div_cycle_code(parent, ["Suppose this is our code:"]);
  html_div_cycle_code(parent, ["", example]);
  let order = app_code_quiz_tokens_order(example);
  let tokens = text_split_space(order);
  let parts = [""];
  function part_add(token) {
    list_add_multiple(parts, [token, " "]);
  }
  each(tokens, part_add);
  let colors = app_code_tokens_explain_colors();
  html_div_cycle_code(parent, ["Then we can add colors to each token/piece:"]);
  app_code_tokens_painted(parent, example, colors, false);
  html_div_cycle_code(parent, [
    "Therefore, here are the colored tokens separated from each other:",
  ]);
  app_code_tokens_painted(parent, example, colors, true);
  html_div_cycle_code(parent, ["And here are the tokens uncolored:"]);
  html_div_cycle_code(parent, parts);
  html_div_cycle_code(parent, [
    "We read the tokens of code left to right, then top to bottom",
  ]);
}
