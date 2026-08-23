import { apps_frozen_names } from "./apps_frozen_names.mjs";
import { list_concat } from "./list_concat.mjs";
export function apps_page_not_app_allowed_names() {
  ("the only page names in a public folder that are allowed to have no app behind them.");
  ("404 is the host's own page rather than one of ours - it is served when an address matches nothing at all, so by definition no app answers to it.");
  ("a frozen app is a DATED COPY kept exactly as it shipped, so it deliberately has no living entry point; the list of them is asked for rather than written out again, so freezing one more page needs no edit here.");
  ("everything else is either an app or a page kept alive to send a reader somewhere else, and the second is recognised by what it does rather than by being named here - so this list stays short instead of growing one line per one-off.");
  let host_error = ["404"];
  let frozen = apps_frozen_names();
  let r = list_concat(host_error, frozen);
  return r;
}
