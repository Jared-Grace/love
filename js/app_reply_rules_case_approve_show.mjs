import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_reply_rules_file_outstanding_is } from "./app_reply_rules_file_outstanding_is.mjs";
import { not } from "./not.mjs";
import { app_reply_rules_file_card } from "./app_reply_rules_file_card.mjs";
import { html_div } from "./html_div.mjs";
import { app_reply_rules_case_show } from "./app_reply_rules_case_show.mjs";
import { app_reply_rules_approve_button } from "./app_reply_rules_approve_button.mjs";
export function app_reply_rules_case_approve_show(root, one, approvals) {
  arguments_assert(arguments, 3);
  ("One unit test still needing a verdict, drawn as its exchange with an approve button under it; a test already approved as it stands draws nothing.");
  ("The exchange goes in a holder of its own because the button puts away what it is handed once it is pressed, and a test is several things on the screen where a file is one.");
  let approval = property_get(one, "approval");
  let name = property_get(approval, "name");
  let lines = property_get(approval, "lines");
  let outstanding = app_reply_rules_file_outstanding_is(name, lines, approvals);
  if (not(outstanding)) {
    return;
  }
  ("A test is a card like a file is, so that which button belongs to which exchange can be seen.");
  let card = app_reply_rules_file_card(root, "test", name);
  let holder = html_div(card);
  app_reply_rules_case_show(holder, one);
  app_reply_rules_approve_button(card, name, lines, approvals, holder);
}
