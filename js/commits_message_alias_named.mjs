import { arguments_assert } from "./arguments_assert.mjs";
import { commits_message_alias_since } from "./commits_message_alias_since.mjs";
import { git_commits_subjects_since } from "./git_commits_subjects_since.mjs";
import { function_aliases } from "./function_aliases.mjs";
import { functions_names } from "./functions_names.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { property_get } from "./property_get.mjs";
import { text_split } from "./text_split.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_first } from "./list_first.mjs";
import { list_add } from "./list_add.mjs";
import { null_is } from "./null_is.mjs";
export async function commits_message_alias_named() {
  "Every commit made since the rule came in whose message opens with a short name the human types at the keyboard rather than with the name of the command that made the change.";
  "AN ALIAS KEY IS NOT AN IDENTITY. Pointing it somewhere else is a single command, and the log then reads as a record of a change made by whatever it points at now - a history that says a thing nobody did. A function name cannot be re-pointed like that: renaming one carries its aliases with it and leaves the old word answering to nothing.";
  "ONLY A WORD THAT IS AN ALIAS TODAY OFFENDS, and a word that merely names no live function does not. Names are renamed here constantly, so an old commit correctly named after the command that made it would start failing the moment that command was renamed - a rule that goes red for something nobody wrote is a rule that gets switched off.";
  arguments_assert(arguments, 0);
  let since = commits_message_alias_since();
  let commits = await git_commits_subjects_since(since);
  let aliases = await function_aliases();
  let f_names = await functions_names();
  let offenders = [];
  for (let commit of commits) {
    let subject = property_get(commit, "subject");
    let words = text_split(subject, " ");
    let word = list_first(words);
    let live = list_includes(f_names, word);
    if (live) {
      continue;
    }
    let target = property_or_null(aliases, word);
    let free = null_is(target);
    if (free) {
      continue;
    }
    let id = property_get(commit, "commit");
    let said = text_combine_multiple([id, " ", word, " -> ", target]);
    list_add(offenders, said);
  }
  let r = {
    walked: commits.length,
    offenders,
  };
  return r;
}
