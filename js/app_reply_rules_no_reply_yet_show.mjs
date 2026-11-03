import { greater_than } from "./greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_filter_size } from "./list_filter_size.mjs";
import { word_count_pluralize } from "./word_count_pluralize.mjs";
import { list_size } from "./list_size.mjs";
import { text_from_number } from "./text_from_number.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_p_text } from "./html_p_text.mjs";
export function app_reply_rules_no_reply_yet_show(root, rows) {
  arguments_assert(arguments, 2);
  ("Says how many messages have no reply chosen yet, and draws only the ones that now need something: somebody really said it, or a rule has started answering it.");
  ("★ A LISTED MESSAGE NOBODY HAS SAID ASKS NOTHING OF ANYBODY, SO IT IS COUNTED AND NOT DRAWN. Reading it today could only produce a reply nobody needs yet.");
  function said_is(row) {
    let said = property_get(row, "said");
    let r = greater_than(said, 0);
    return r;
  }
  let count_said = list_filter_size(rows, said_is);
  let count_total = list_size(rows);
  let counted = word_count_pluralize(count_total, "message");
  let t_said = text_from_number(count_said);
  let summary = text_combine_multiple([
    counted,
    " with no reply yet, ",
    t_said,
    " really said.",
  ]);
  html_p_text(root, summary);
  for (let row of rows) {
    let message = property_get(row, "message");
    if (property_get(row, "answered")) {
      let answered_line = text_combine_multiple([
        "a rule answers this now, so it can leave the list: ",
        message,
      ]);
      html_p_text(root, answered_line);
      continue;
    }
    if (said_is(row)) {
      let said_line = text_combine_multiple([
        "somebody really said this, so choose its reply: ",
        message,
      ]);
      html_p_text(root, said_line);
    }
  }
}
