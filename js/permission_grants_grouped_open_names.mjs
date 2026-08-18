import { property_or_null } from "./property_or_null.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { equal } from "./equal.mjs";
export function permission_grants_grouped_open_names(grouped) {
  "The functions a grant reading found nothing against, by name — the answer to what could stop prompting today.";
  "Empty rather than missing on a day when there are none. The group is only written once something lands in it, so a summary that read it straight would work only while there was work to do, and fail on exactly the day the answer was good news.";
  let open = property_or_null(grouped, "grantable");
  let none = equal(open, null);
  if (none) {
    let empty = [];
    return empty;
  }
  let names = list_map_property(open, "name");
  return names;
}
