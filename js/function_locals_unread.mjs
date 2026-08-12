import { js_identifiers_named_counts } from "./js_identifiers_named_counts.mjs";
import { equal } from "./equal.mjs";
import { function_parse_declaration } from "./function_parse_declaration.mjs";
import { js_declared_names } from "./js_declared_names.mjs";
import { list_filter } from "./list_filter.mjs";
import { property_get } from "./property_get.mjs";
export async function function_locals_unread(f_name) {
  "$plain f_name";
  "Which names one function binds inside itself and then never reads.";
  "A name bound and never read is work whose answer was thrown away. That is not always a fault - a line may be there only for what it does on the way - but it is always worth a second look, because the way it reads and the way it runs have come apart. One found the day this was written had a whole publish step bound to a name nothing read, so the function handed back the answer of the step BEFORE it and no caller could tell a refused publish from a clean one.";
  "Being read is asked by counting how many times the name is written down anywhere in the function, and one mention means the binding itself and nothing else. That cannot be wrong in the direction that matters: a name read somewhere is mentioned at least twice, so nothing that is read can be reported. Two separate scopes using one name hide each other's reading and neither is reported, which is a miss rather than a false accusation.";
  "The counting is done over the whole function rather than over its body, so a name read in what a parameter falls back to still counts as read.";
  "This asks the same question the repair asks, deliberately. What puts a bound name right is a transform that already exists and that nothing was calling, and it acts on exactly the names mentioned once - so anything reported here is something that can be put right, rather than a complaint with no answer to it.";
  let parsed = await function_parse_declaration(f_name);
  let declaration = property_get(parsed, "declaration");
  let body = property_get(declaration, "body");
  let declared = js_declared_names(body);
  ("The counting is done for every name in one walk rather than a walk for each name. A function declares a handful of names and the tree was being read from the top again for each one: measured 2026-08-11, that was the whole cost of this sweep across the repo. The walk was already looking at every name; only the tallying differed.");
  let counts = js_identifiers_named_counts(declaration);
  function unread_is(name) {
    let count = counts.get(name);
    let alone = equal(count, 1);
    return alone;
  }
  let unread = list_filter(declared, unread_is);
  let finding = {
    name: f_name,
    unread,
  };
  return finding;
}
