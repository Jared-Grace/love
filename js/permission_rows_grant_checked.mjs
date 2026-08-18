import { permission_grant_context } from "./permission_grant_context.mjs";
import { permission_rule_grant_checked_context } from "./permission_rule_grant_checked_context.mjs";
import { list_add } from "./list_add.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { add } from "./add.mjs";
import { not } from "./not.mjs";
export async function permission_rows_grant_checked(rows, key) {
  "write an allow rule for every dispatcher function a ranking of rows names and that passes the safety check, and say why for each one it refuses — grouped by what happened to it";
  "which field holds the name is the caller's to say, because the same ranking is arrived at from more than one place: the record of proved interruptions names the function in the field it grouped by, and a replay of the transcripts names it beside a command shape that may be a chain. one reader for both is what keeps the two from disagreeing about what may be granted.";
  "a name is checked once however many rows name it, with the rows counted together. the same function reached by a plain call and by a piped one is two shapes and one grant, so checking it twice would spend a walk of the repo to be told the second time that it was granted a moment ago.";
  "nothing here decides whether a grant is safe — that judgment is asked of the one function a single grant asks, so the two can never come apart. the refusals are the more useful half of the answer: a name that keeps costing prompts and keeps being refused is a function that wants narrowing, and it stays visible here until somebody narrows it.";
  let counted = new Map();
  for (let row of rows) {
    let name = property_get(row, key);
    let nameless = text_empty_is(name);
    if (nameless) {
      continue;
    }
    let count = property_get(row, "count");
    let seen = counted.has(name);
    if (seen) {
      let before = counted.get(name);
      count = add(before, count);
    }
    counted.set(name, count);
  }
  let context = await permission_grant_context();
  let grouped = {};
  for (let name of counted.keys()) {
    let count = counted.get(name);
    let result = await permission_rule_grant_checked_context(name, context);
    property_set(result, "count", count);
    let action = property_get(result, "action");
    let known = property_exists(grouped, action);
    if (not(known)) {
      let empty = [];
      property_set(grouped, action, empty);
    }
    let list = property_get(grouped, action);
    list_add(list, result);
  }
  return grouped;
}
