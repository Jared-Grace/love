import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_reply_rules_file_outstanding_is } from "./app_reply_rules_file_outstanding_is.mjs";
import { app_reply_rules_case_approve_show } from "./app_reply_rules_case_approve_show.mjs";
import { app_reply_rules_file_card } from "./app_reply_rules_file_card.mjs";
import { app_reply_rules_case_show } from "./app_reply_rules_case_show.mjs";
import { app_reply_rules_rewrite_changed_show } from "./app_reply_rules_rewrite_changed_show.mjs";
export function app_reply_rules_case_warned_show(root, one, approvals) {
  arguments_assert(arguments, 3);
  ("One passing test whose real message gets a different answer, always drawn open with its warning under it, whether or not it has been approved.");
  ("★ THE WARNING IS NOTHING WITHOUT THE EXCHANGE IT IS ABOUT. An approved test draws nothing where the warnings are drawn and sits folded away below, so the warning used to appear alone on the page with no way of telling which test it meant. Approving a test settles its words and says nothing about the real message, so approval is no reason to put this one away.");
  let approval = property_get(one, "approval");
  let name = property_get(approval, "name");
  let lines = property_get(approval, "lines");
  let answered = property_get(one, "answered");
  let outstanding = app_reply_rules_file_outstanding_is(name, lines, approvals);
  if (answered && outstanding) {
    app_reply_rules_case_approve_show(root, one, approvals);
  } else {
    let card = app_reply_rules_file_card(root, "test", name);
    app_reply_rules_case_show(card, one);
  }
  app_reply_rules_rewrite_changed_show(root, one);
}
