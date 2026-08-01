import { text_ends_with } from "./text_ends_with.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { text_dispatcher_command_names } from "./text_dispatcher_command_names.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_add } from "./list_add.mjs";
export function function_entries_dispatcher_commands_unresolved(
  entries,
  f_names,
) {
  "Every command spelled out in the writing of these functions that names none of these live functions, each paired with the function whose writing spells it. Read-only, pure.";
  "Kept apart from where the functions came from, for the same reason its neighbours are: walking the repo is the half that differs between one caller and another, and asking a written-out list of entries is the half that can be answered against a case somebody wrote down. A sweep over a repo where nothing is broken cannot show that this half works at all.";
  "A command is a claim that a word is a live function, which is why there is nothing to weigh up here. A bare name mentioned in a docstring stays narrative and is never asked about - it may be recording a rename, and telling that apart from a stale reference needs a reader rather than a rule. Spelling out the whole command is what turns a mention into a promise.";
  "A written-down corpus is passed by, and every one of them, not the one this was written next to. A corpus holds text somebody else's reader is going to be asked about, and the names inside it are invented on purpose - written real they would be turned into references by the canonicalizer and stop saying what the case says. So a corpus is the one kind of writing here that spells a command while telling nobody to run it, and reading those as broken promises would make this permanently red for the very writing that proves the readers work. Two corpora already spell nine such commands between them, and the second one was found by this check on its first run rather than by anybody remembering it was there.";
  arguments_assert(arguments, 2);
  let corpus_suffix = "_cases";
  let unresolved = [];
  for (let entry of entries) {
    let f_name = property_get(entry, "name");
    let is_corpus = text_ends_with(f_name, corpus_suffix);
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
