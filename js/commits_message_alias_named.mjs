import { arguments_assert } from "./arguments_assert.mjs";
import { commits_message_rules_since } from "./commits_message_rules_since.mjs";
import { git_commits_subjects_since } from "./git_commits_subjects_since.mjs";
import { function_aliases } from "./function_aliases.mjs";
import { functions_names } from "./functions_names.mjs";
import { property_get } from "./property_get.mjs";
import { git_message_hand_made } from "./git_message_hand_made.mjs";
import { equal } from "./equal.mjs";
import { text_split } from "./text_split.mjs";
import { list_first } from "./list_first.mjs";
import { list_includes } from "./list_includes.mjs";
import { property_or_null } from "./property_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_add } from "./list_add.mjs";
export async function commits_message_alias_named() {
  "Every commit made since the rule came in whose message opens with a short name the human types at the keyboard rather than with the name of the command that made the change.";
  "AN ALIAS KEY IS NOT AN IDENTITY. Pointing it somewhere else is a single command, and the log then reads as a record of a change made by whatever it points at now - a history that says a thing nobody did. A function name cannot be re-pointed like that: renaming one carries its aliases with it and leaves the old word answering to nothing.";
  "THE HAND-MADE MESSAGE IS LET THROUGH FIRST AND BY ITSELF, because that word is registered as an alias key like any other and would otherwise be the only thing this ever found - it is the one message the convention asks for where nothing named made the change, and nine tenths of the log is it.";
  "ONLY A WORD THAT IS AN ALIAS TODAY OFFENDS, and a word that merely names no live function does not. Names are renamed here constantly, so an old commit correctly named after the command that made it would start failing the moment that command was renamed - a rule that goes red for something nobody wrote is a rule that gets switched off.";
  "WHAT EACH OFFENDER IS CALLED HAS TO BE MADE OF THINGS THAT CANNOT CHANGE, AND THE NAME OF A COMMIT IS NOT ONE OF THEM. It was called after the commit and the word until 2026-09-04, when a rewrite of this history renamed every commit in it and all fifty one names in the record died together - the gate went red naming fifty one commits that had gone and fifty one that had arrived, over a repo that had not changed at all. A rewrite carries the second a commit was made at through unaltered, so it is the second and the word and nothing else.";
  "Where the word points is the very thing this rule says is not fixed, and a name written down in a record is compared against the name found on the next run: had the target been part of it, re-pointing a key would have altered the name of a commit that nobody had touched, and the record would have gone stale over the repo working exactly as it is meant to. The target is worth reading and it is read below, but it is read to decide, not to name.";
  "THE NAME OF THE COMMIT IS STILL HANDED ON, beside the written-down name rather than inside it. Which side of the door an offender falls on is asked of the history by name, and no second can answer that: two commits made in the same second can sit on either side of it. So the record keeps the fact that survives a rewrite and the door keeps the fact that answers its question, and neither is made to do the other's work.";
  arguments_assert(arguments, 0);
  let since = commits_message_rules_since();
  let commits = await git_commits_subjects_since(since);
  let aliases = await function_aliases();
  let f_names = await functions_names();
  let offenders = [];
  let rows = [];
  for (let commit of commits) {
    let subject = property_get(commit, "subject");
    let right = git_message_hand_made();
    let by_hand = equal(subject, right);
    if (by_hand) {
      continue;
    }
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
    let second = property_get(commit, "second");
    let said = text_combine_multiple([second, " ", word]);
    list_add(offenders, said);
    let row = {
      commit: id,
      second,
      word,
      said,
    };
    list_add(rows, row);
  }
  let r = {
    walked: commits.length,
    offenders,
    rows,
  };
  return r;
}
