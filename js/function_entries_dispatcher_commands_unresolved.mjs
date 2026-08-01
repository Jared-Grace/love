import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { property_get } from "./property_get.mjs";
import { text_dispatcher_command_names } from "./text_dispatcher_command_names.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
export function function_entries_dispatcher_commands_unresolved(
  entries,
  f_names,
) {
  "Every command spelled out in the writing of these functions that names none of these live functions, each paired with the function whose writing spells it. Read-only, pure.";
  "Kept apart from where the functions came from, for the same reason its neighbours are: walking the repo is the half that differs between one caller and another, and asking a written-out list of entries is the half that can be answered against a case somebody wrote down. A sweep over a repo where nothing is broken cannot show that this half works at all.";
  "A command is a claim that a word is a live function, which is why there is nothing to weigh up here. A bare name mentioned in a docstring stays narrative and is never asked about - it may be recording a rename, and telling that apart from a stale reference needs a reader rather than a rule. Spelling out the whole command is what turns a mention into a promise.";
  "The corpus behind the reader is passed by. Its cases have to hold invented commands to say what they say, and every one of those names nothing on purpose, so reading them as broken promises would make this permanently red for the writing that proves it works.";
  arguments_assert(arguments, 2);
  let corpus = fn_name("text_dispatcher_command_names_cases");
  let unresolved = [];
  for (let entry of entries) {
    let f_name = property_get(entry, "name");
    let is_corpus = equal(f_name, corpus);
    if (is_corpus) {
      continue;
    }
    let code = property_get(entry, "code");
    let names = text_dispatcher_command_names(code);
    for (let name of names) {
      let missing = list_includes_not(f_names, name);
      if (missing) {
        let one = {
          name: name,
          f_name: f_name,
        };
        list_add(unresolved, one);
      }
    }
  }
  return unresolved;
}
