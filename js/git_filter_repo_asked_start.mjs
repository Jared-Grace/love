import { arguments_assert } from "./arguments_assert.mjs";
export function git_filter_repo_asked_start() {
  arguments_assert(arguments, 0);
  ("The words every rewrite of this repository's past begins with, before it says what it is actually changing.");
  ("★ KEEPING EVERY COMMIT IS A CHOICE, AND THE TOOL'S OWN DEFAULT IS THE OTHER ONE. A rewrite that stops carrying a file leaves behind every commit whose only work was on that file, and such a commit now says nothing - so the tool throws it away unless it is told not to. Measured on a real purge here, fifty-two forgotten files took fifteen thousand three hundred and thirty-one commits out of ninety thousand with them, a sixth of the whole record, and the run reported that as a success. Nothing about a list of file names says how much of the record removing them will take, so the choice is made once, here, rather than guessed at each place a rewrite is written.");
  ("The two words say the same thing about two shapes of commit. One is about an ordinary commit left with no work in it; the other is about a joining commit left with nothing to join, which the tool counts separately because joins are what hold the shape of a history together. Saying only the first leaves the second still being thrown away, quietly, and a count that came out right afterwards would still be wrong.");
  ("This is the whole opening rather than the choice on its own, so that a rewrite written later cannot get the opening right and this wrong. The forcing word belongs here for the same reason every rewrite here runs on a copy made for it: there is never anything in that copy worth protecting from the run it was made for.");
  let asked = [
    "filter-repo",
    "--force",
    "--prune-empty=never",
    "--prune-degenerate=never",
  ];
  return asked;
}
