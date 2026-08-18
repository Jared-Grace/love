import { git_push_text } from "./git_push_text.mjs";
export function git_push_upstream_set_words() {
  "The push that also records where this branch is to be pushed from now on, written as the words git receives.";
  "Said in two places - the first publishing of a repo, and the repair that rebuilds a history from nothing - so it is written once here and the two ask for it rather than spelling it. The words are the same words its text twin joined with spaces; what changed is only that nothing has to split them apart again.";
  let push = git_push_text();
  let words = [push, "--set-upstream", "origin", "main"];
  return words;
}
