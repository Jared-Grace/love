import { property_get } from "./property_get.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { add } from "./add.mjs";
import { permission_grant_context } from "./permission_grant_context.mjs";
import { property_set } from "./property_set.mjs";
import { property_exists } from "./property_exists.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
export async function permission_rows_grant_generic(rows, key, name_asked) {
  "Puts every dispatcher function a ranking of rows names to one question about granting it, and groups the answers by what each one came back as.";
  "Which field holds the name is the caller's to say, because the same ranking is arrived at from more than one place: the record of proved interruptions names the function in the field it grouped by, and a replay of the transcripts names it beside a command shape that may be a chain. One reader for both is what keeps the two from disagreeing about what may be granted.";
  "A name is asked once however many rows name it, with the rows counted together. The same function reached by a plain call and by a piped one is two shapes and one grant, so asking it twice would spend a walk of the repo to be told the second time that it was granted a moment ago.";
  "The question itself is the caller's, because there are two of them and they differ in one thing only: whether a name that passes is written down or merely reported. Everything before that - which names, how many times each, and the shared answers the checking needs - is the same work either way, and doing it twice is how the report and the granting would come to disagree.";
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
    let result = await name_asked(name, context);
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
