import { argument_alias_groups } from "./argument_alias_groups.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { properties_get } from "./properties_get.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { assert_json } from "./assert_json.mjs";
export function argument_alias_group(group_name) {
  "One named group of short spellings, refusing a name no group answers to.";
  "Asking for a group that does not exist is a mistake in the code rather than in what somebody typed, so it says so plainly and lists the groups that do exist. A missing group returned as nothing would instead make every value in it look unrecognised, which sends the reader hunting through what they typed for a fault that is not there.";
  let groups = argument_alias_groups();
  let known = property_exists(groups, group_name);
  let names = properties_get(groups);
  let named = list_join_comma(names);
  assert_json(known, {
    hint: "no group of argument spellings answers to this name - the groups that exist are listed here",
    group_name,
    named,
  });
  let group = property_get(groups, group_name);
  return group;
}
