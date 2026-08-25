import { arguments_assert } from "./arguments_assert.mjs";
import { kinds_all_is } from "./kinds_all_is.mjs";
export function commit_edit_diff_kinds_only_named_or_null(kinds) {
  "The few words for a commit whose changed lines are all of one kind - imports, prose, values chosen, or names standing alone - or nothing, where the lines are of more than one kind.";
  "A log of commits is read to find the ones worth opening, and a commit that only moved imports about or only reworded a sentence is not one of them. Those two are the commonest kind in this repo, because the canonicalizing pass writes imports on almost every commit, so saying so in three words is most of what the reading is for.";
  "A VALUE CHOSEN IS SET ASIDE WITH THE OTHER TWO. A number raised in a record or a colour picked is hand-made and always will be, so it is no more a line worth opening than a reworded sentence is, and counting it as program called every such commit several lines of code. It gets a name of its own rather than joining the prose, because a person scanning the log for what changed wants to know which of the two it was.";
  "A NAME STANDING ALONE GETS A NAME OF ITS OWN AND SAYS SO. An entry added to a register, a part written into a record and an argument of a call broken over several lines are all written as one name and a comma, so a commit made only of those lines cannot be placed by the lines; naming the doubt is honest, and folding it into the bucket beside it would have had that bucket claim the change was imports and values when it was neither.";
  "EACH OF THESE IS ASKED OF EVERY LINE AND NOT OF MOST OF THEM, so a commit holding one line of program among fifty imports falls through all four and is placed by the program, which is what the caller does next.";
  arguments_assert(arguments, 1);
  let only_import = kinds_all_is(kinds, "import");
  if (only_import) {
    let r = "imports only (the canonicalizing pass)";
    return r;
  }
  let only_comment = kinds_all_is(kinds, "comment");
  if (only_comment) {
    let r2 = "comment prose only";
    return r2;
  }
  let only_data = kinds_all_is(kinds, "data");
  if (only_data) {
    let r9 = "values chosen only";
    return r9;
  }
  let only_alone = kinds_all_is(kinds, "name alone");
  if (only_alone) {
    let r10 = "names or numbers standing alone, values or program";
    return r10;
  }
  return null;
}
