import { fn_name } from "./fn_name.mjs";
import { list_includes } from "./list_includes.mjs";
import { function_calls_name_is } from "./function_calls_name_is.mjs";
import { data_identifiers_search } from "./data_identifiers_search.mjs";
import { properties_get } from "./properties_get.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_add } from "./list_add.mjs";
import { list_unique } from "./list_unique.mjs";
import { or } from "./or.mjs";
export async function function_open_names() {
  "Every fn that puts a VS Code window on the human's screen, by calling one of the two fns that do it";
  "Those refuse on the ai seam, so this is also the list a Claude cannot run and a permission rule must never name";
  "A fn that only hands one of the two names to something else is left out, since naming a thing is not doing it, and the list is read as though everything on it opens a window";
  "Membership is settled on the tree, so a name written inside a message can never be mistaken for a call";
  "The two roots are named rather than imported, because this wants the word and never the fn. Importing them to read a name off pulled the editor launcher into everything that asks this question, and the launcher shells out, so every caller came out reaching a command runner - which is a refusal the safety check over permission rules hands down, and it handed it down to the check itself once this list was shared with it. A named marker is followed by a rename just as an import is, and carries none of that weight.";
  let ids_comma = fn_name("file_open");
  let by_file = await data_identifiers_search(ids_comma);
  let ids_comma2 = fn_name("function_open");
  let by_function = await data_identifiers_search(ids_comma2);
  let names = properties_get(by_file);
  let more = properties_get(by_function);
  list_add_multiple(names, more);
  let unique = list_unique(names);
  let f_name = fn_name("file_open");
  let f_name2 = fn_name("function_open");
  let openers = [f_name, f_name2];
  ("The two fns that do the opening are on the list because of what they are, not because of what they call, and one of them calls neither");
  for (let name of unique) {
    if (list_includes(openers, name)) {
      continue;
    }
    let called_name = fn_name("file_open");
    let by_one = await function_calls_name_is(name, called_name);
    let called_name2 = fn_name("function_open");
    let by_two = await function_calls_name_is(name, called_name2);
    let calls = or(by_one, by_two);
    if (calls) {
      list_add(openers, name);
    }
  }
  return openers;
}
