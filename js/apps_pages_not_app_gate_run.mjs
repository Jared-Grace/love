import { apps_pages_not_app } from "./apps_pages_not_app.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_empty_not_is_assert_json } from "./list_empty_not_is_assert_json.mjs";
import { property_get } from "./property_get.mjs";
export async function apps_pages_not_app_gate_run() {
  "Gate: a page at an address of its own must be an app. Nothing else may sit in a public folder.";
  "held against nothing rather than against the ones that already fail, because every page passed the day this was written - so a page that stops being an app is a new fault rather than an old one being uncovered.";
  "an address is the one thing here that cannot be taken back. A page can be rewritten or deleted, but a reader who kept the address keeps it, and a one-off page put up to try something out is a promise nobody meant to make. The sandbox's hash is where a one-off goes instead: reachable while it is wanted, and gone by closing the tab.";
  "the pages that were looked at are counted before the offenders are read, because an empty offender list is also what a sweep over no pages hands back.";
  let report = await apps_pages_not_app();
  let checked = property_get(report, "checked");
  list_empty_not_is_assert_json(checked, {
    hint: "no page was looked at at all, which is not a pass - it is a sweep that found nothing to check. The public folders it reads have moved",
  });
  let offenders = property_get(report, "offenders");
  list_empty_is_assert_json(offenders, {
    hint: "these pages have an address of their own and no app behind them - either give each one an entry point named after it, or take the page down and put the screen behind the sandbox's hash instead",
    sandbox: fn_name("app_sandbox"),
    offenders,
  });
  let r = {
    pages: checked.length,
  };
  return r;
}
