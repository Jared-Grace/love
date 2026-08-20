import { property_not } from "./property_not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_join } from "./list_join.mjs";
import { permission_grant_add_multiple } from "./permission_grant_add_multiple.mjs";
import { permission_replay_reading } from "./permission_replay_reading.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
export async function permission_replay_grants_add() {
  "do NOT grant this - it writes allow rules, and a command that writes them is the one command the human has to see every time.";
  arguments_assert(arguments, 0);
  ("Grants every function the daily reading says could stop prompting, so a day's worth of interruptions costs the human one approval instead of one each.");
  ("It finds its own set rather than being handed one. A list pasted into a command is a list somebody had to read off a report and retype, and the set drifts from what the record actually holds between the reading and the typing - where this cannot, because it is the same file the reading was written to.");
  ("Both halves of the reading are taken. One ranks what a rule would still stop and the other what actually stopped somebody, neither can be read off the other, and a function in either is a function worth not being asked about again.");
  ("Nothing is judged here. The batch adder checks every name before it writes anything, and one name that must never hold a standing approval stops the whole batch - so this can hand over the whole set without deciding which of them deserves it.");
  ("It is deliberately left asking. A command that writes allow rules is the one command the human has to see, and finding its own set is what makes that single approval worth their while rather than a formality.");
  let reading = await permission_replay_reading();
  let missing = property_not(reading, "written");
  if (missing) {
    return reading;
  }
  let names = [];
  let items = property_get(reading, "grantable");
  list_add_multiple(names, items);
  let items2 = property_get(reading, "grantable_replay");
  list_add_multiple(names, items2);
  let none = list_empty_is(names);
  if (none) {
    let nothing = {
      asked: 0,
      granted: [],
    };
    return nothing;
  }
  let names_comma = list_join(names, ",");
  let report = await permission_grant_add_multiple(names_comma);
  property_set(report, "granted", names);
  return report;
}
