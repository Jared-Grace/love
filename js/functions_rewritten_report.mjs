import { arguments_assert } from "./arguments_assert.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { list_filter_property_not } from "./list_filter_property_not.mjs";
import { list_size } from "./list_size.mjs";
import { list_map_property } from "./list_map_property.mjs";
export async function functions_rewritten_report(f_names, lambda$f_name) {
  "$plain f_names";
  "Offers every named function to one rewrite and says how many were asked, which of them changed, which refused, and why.";
  "A sweep that rewrites functions one at a time answers in this same shape whatever the rewrite is, because the shape belongs to the offering and not to the rewrite: every function whose source so much as mentions the thing is offered, and the rewrite itself decides whether there is really anything there to change. So most of what is asked changes nothing, and the three lists are the whole of what a person needs to read afterwards.";
  "BOTH FILTERS NAME THE VALUE THEY WANT, and that is not a spare detail. Asking for the property alone compares it against nothing at all, so every entry fails the test and the report comes back with empty lists - which is how the first real run of one of these claimed nothing had changed while it was rewriting twenty files.";
  "The count of what was asked is taken from the list handed in rather than from the answers, so a rewrite that threw and was caught somewhere below still leaves the count honest about how many were offered.";
  "They are offered one after another rather than all at once, because each one writes a file and two rewrites landing in the same file at the same moment is a lost write rather than a slow sweep.";
  arguments_assert(arguments, 2);
  let results = await list_map_async(f_names, lambda$f_name);
  let changed = list_filter_property(results, "changed", true);
  let refused = list_filter_property_not(results, "error_message", "");
  let report = {
    asked: list_size(f_names),
    changed: list_map_property(changed, "name"),
    refused: list_map_property(refused, "name"),
    reasons: list_map_property(refused, "error_message"),
  };
  return report;
}
