import { function_read } from "./function_read.mjs";
import { text_split_comma_dot } from "./text_split_comma_dot.mjs";
import { text_trim } from "./text_trim.mjs";
import { list_map } from "./list_map.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { property_set } from "./property_set.mjs";
export async function function_read_multiple(ids_comma) {
  "Who references each of several identifiers, asked in one command - one answer per identifier, under the identifier it belongs to.";
  "The plain search hands its comma list to an intersection, so it answers who references every one of them at once. That is the right question when you already know two names belong together, and it makes the commoner question unaskable: who references this one, and this one, and this one. Asking those separately is a command each, and the log has that run thirteen deep for a hundred and twenty commands nobody wanted to spend.";
  "An identifier nothing in the repo answers to is reported as nothing rather than thrown on, and that is the difference between a sweep and a loop. The plain search refuses an unknown name, which is the useful answer when it is the only name you asked about; over a list it would throw away every answer already paid for because one name was misspelt.";
  let ids_split = text_split_comma_dot(ids_comma);
  let ids = list_map(ids_split, text_trim);
  let found = {};
  for (let id of ids) {
    async function search_one() {
      let callers_one = await function_read(id);
      return callers_one;
    }
    let callers = await catch_null_async(search_one);
    property_set(found, id, callers);
  }
  return found;
}
