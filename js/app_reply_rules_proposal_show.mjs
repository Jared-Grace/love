import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { app_shared_color_gray_dark } from "./app_shared_color_gray_dark.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { app_reply_rules_diff_show } from "./app_reply_rules_diff_show.mjs";
import { app_reply_rules_case_show } from "./app_reply_rules_case_show.mjs";
import { list_map } from "./list_map.mjs";
export function app_reply_rules_proposal_show(root, proposal) {
  arguments_assert(arguments, 2);
  ("One change to the reply rules laid out to be said yes or no to: what it is for, the lines it would alter, the exchanges it was measured to produce, and the questions about it that nobody else can answer.");
  ("★ THE ORDER IS THE ORDER SOMEBODY DECIDES IN, and it is not the order a change is written in. What it does comes first, because a reader who does not want it can stop there. The lines come next, because a reader who does want it has to see that it is small. The exchanges come after the lines rather than before them, because the whole reason to look at the lines is to believe the exchanges. The questions come last, because they are what is left once the change itself has been agreed to.");
  ("The name of the function is said under the title rather than in it. It is what makes the change findable afterwards, and it is not what the change is about.");
  ("The questions are numbered by being listed rather than by counting, because they are answered in a message written back and a person answering picks them out by their first few words.");
  let title = property_get(proposal, "title");
  let block = html_div(root);
  html_style_margin_top(block, "2.5em");
  let head = html_p_text(block, title);
  html_style_font_size(head, "1.2em");
  let gray = app_shared_color_gray_dark();
  let f_name = property_get(proposal, "fn");
  let named = text_combine_multiple(["in ", f_name]);
  let under = html_p_text(block, named);
  html_style_font_size(under, "0.75em");
  html_font_color_set(under, gray);
  let diff = property_get(proposal, "diff");
  app_reply_rules_diff_show(block, diff);
  let cases_head = html_p_text(block, "What it would answer");
  html_style_margin_top(cases_head, "1.5em");
  html_style_font_size(cases_head, "0.9em");
  html_font_color_set(cases_head, gray);
  let cases = property_get(proposal, "cases");
  function each_case(one) {
    let drawn = app_reply_rules_case_show(block, one);
    return drawn;
  }
  list_map(cases, each_case);
  let decide_head = html_p_text(block, "Yours to decide");
  html_style_margin_top(decide_head, "1.5em");
  html_style_font_size(decide_head, "0.9em");
  html_font_color_set(decide_head, gray);
  let decide = property_get(proposal, "decide");
  function each_question(question) {
    let line = html_p_text(block, question);
    html_style_font_size(line, "0.85em");
    return line;
  }
  let asked = list_map(decide, each_question);
  return asked;
}
