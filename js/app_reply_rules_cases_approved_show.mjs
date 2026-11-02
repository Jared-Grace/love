import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_reply_rules_file_outstanding_is } from "./app_reply_rules_file_outstanding_is.mjs";
import { not } from "./not.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_size } from "./list_size.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_shared_container_blue_collapsible } from "./app_shared_container_blue_collapsible.mjs";
import { noop } from "./noop.mjs";
import { app_reply_rules_file_card } from "./app_reply_rules_file_card.mjs";
import { app_reply_rules_case_show } from "./app_reply_rules_case_show.mjs";
import { each } from "./each.mjs";
export function app_reply_rules_cases_approved_show(root, cases, approvals) {
  arguments_assert(arguments, 3);
  ("The tests already approved, kept shut under one line that opens to show them. With none approved it draws nothing.");
  ("One line for all of them rather than one for each, so a page of answered questions still takes no room and any of them can still be read again.");
  function approved_is(one) {
    let approval = property_get(one, "approval");
    let name = property_get(approval, "name");
    let lines = property_get(approval, "lines");
    let outstanding = app_reply_rules_file_outstanding_is(
      name,
      lines,
      approvals,
    );
    let r = not(outstanding);
    return r;
  }
  let approved = list_filter(cases, approved_is);
  let none = list_empty_is(approved);
  if (none) {
    return;
  }
  let size = list_size(approved);
  let title = text_combine_multiple(["approved tests (", size, ")"]);
  let fold = app_shared_container_blue_collapsible(root, title, noop);
  let body = property_get(fold, "body");
  let collapsed_set = property_get(fold, "collapsed_set");
  collapsed_set(true);
  function each_approved(one) {
    let approval = property_get(one, "approval");
    let name = property_get(approval, "name");
    let card = app_reply_rules_file_card(body, "test", name);
    app_reply_rules_case_show(card, one);
  }
  each(approved, each_approved);
}
