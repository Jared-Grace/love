import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_color_red } from "./app_shared_color_red.mjs";
import { app_reply_rules_case_show } from "./app_reply_rules_case_show.mjs";
import { app_reply_rules_rewrite_changed_show } from "./app_reply_rules_rewrite_changed_show.mjs";
import { property_get } from "./property_get.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { list_map } from "./list_map.mjs";
export function app_reply_rules_corpus_show(root, cases) {
  arguments_assert(arguments, 2);
  ("Every worked case run against the reply rules as they stand, each drawn as the exchange it stands for, and each one carrying whichever of the two things has gone wrong with it: that it has stopped doing what it was written to do, or that it only ever worked because of whose name was in it.");
  ("★ WHAT WAS EXPECTED IS ONLY SHOWN WHEN IT IS NOT WHAT HAPPENED. On a case that is doing its job the expectation and the outcome are the same words, and printing both puts the same sentence on the screen twice for every case in the corpus - which is how a screen teaches a reader to stop reading it. Shown only on the ones that differ, the red line is the entire finding.");
  ("The corpus is shown at all because a change is reviewed against a rule set somebody believes is working. Reviewing one change while three cases have quietly gone wrong is reviewing a thing that is not there, and the cheapest way to be wrong about that is to have never put it on the screen.");
  ("The two red lines are different faults and are said separately. One is a case that has drifted from the rules; the other is a rule that has drifted from everybody except one person. Rolled into a single warning the second would be read as the first and fixed by rewriting the case, which is the exact opposite of what it needs.");
  let red = app_shared_color_red();
  function each_shown(one) {
    let drawn = app_reply_rules_case_show(root, one);
    app_reply_rules_rewrite_changed_show(root, one);
    let ok = property_get(one, "ok");
    if (ok) {
      return drawn;
    }
    let wanted = property_get(one, "outputs_wanted");
    let joined = list_join_space(wanted);
    let said = text_combine_multiple([
      "this case was written expecting: ",
      joined,
    ]);
    let line = html_p_text(root, said);
    html_style_font_size(line, "0.7em");
    html_font_color_set(line, red);
    return line;
  }
  let all = list_map(cases, each_shown);
  return all;
}
