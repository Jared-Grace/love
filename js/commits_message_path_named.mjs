import { arguments_assert } from "./arguments_assert.mjs";
import { commits_message_rules_since } from "./commits_message_rules_since.mjs";
import { git_commits_subjects_since } from "./git_commits_subjects_since.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_split } from "./text_split.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
export async function commits_message_path_named() {
  "Every commit made since the rule came in whose message carries a path reaching out of this repo into the machine it was written on.";
  "A COMMIT MESSAGE IS PUBLISHED AND NOBODY READS IT FIRST. This repo is public and its log is pushed as it is written, so a word put in a message is a word published unreviewed - and the arguments a command was run with go in there verbatim, whatever they happen to be. A path beginning at the root of the machine says who the account is called and how their folders are laid out, to anybody who ever clones this.";
  "IT IS THE REACHING OUT THAT OFFENDS, NOT THE BEING A PATH. Every file this repo is made of is named relative to the repo, so a real argument to a real command is already spelled that way and passes this untouched. Only a word starting at the root of the machine, or at somebody's home, could not have been a path inside the repo.";
  "THE TWO IT WAS WRITTEN FOR ARE OLDER THAN IT AND STAY WHERE THEY ARE. Editing them would throw away the id of every commit made since - over nine hundred of them, held right now in the working state of everybody sharing this tree, and already pushed to two public remotes. The rule earns its keep on the next one instead.";
  arguments_assert(arguments, 0);
  let since = commits_message_rules_since();
  let commits = await git_commits_subjects_since(since);
  let outward = ["/", "~/"];
  let offenders = [];
  for (let commit of commits) {
    let subject = property_get(commit, "subject");
    let words = text_split(subject, " ");
    for (let word of words) {
      for (let start of outward) {
        let reaching = text_starts_with(word, start);
        if (reaching) {
          let id = property_get(commit, "commit");
          let said = text_combine_multiple([id, " ", word]);
          list_add(offenders, said);
        }
      }
    }
  }
  let r = {
    walked: commits.length,
    offenders,
  };
  return r;
}
