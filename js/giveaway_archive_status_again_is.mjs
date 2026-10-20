import { arguments_assert } from "./arguments_assert.mjs";
import { list_includes } from "./list_includes.mjs";
export function giveaway_archive_status_again_is(status) {
  arguments_assert(arguments, 1);
  ("$plain status");
  ("Says whether a number the host answered with is the sort that is worth trying again, or the sort that will say the same thing however long anyone waits.");
  ("★ THE DIVIDE IS WHETHER THE HOST IS BUSY OR WHETHER THE ASK IS WRONG, AND ONLY THE FIRST ONE MENDS ITSELF. A host that is too busy, or broken for a moment, or asking to be asked more slowly, will take the same file happily in a minute. A host that says the name is refused, or that the keys are not good, or that there is no such address, will say it again in an hour and again tomorrow - so trying again there is not patience, it is thirty-two minutes of pretending.");
  ("The numbers are listed rather than worked out from the hundreds they fall in. Four hundred and twenty-nine belongs here and the rest of the four hundreds do not, and five hundred and one - a thing the host simply cannot do - does not belong here either, so there is no rule about hundreds that would come out right.");
  let again = [429, 500, 502, 503, 504];
  let again_is = list_includes(again, status);
  return again_is;
}
