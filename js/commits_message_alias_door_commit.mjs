import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { git_file_text_arrived_commit } from "./git_file_text_arrived_commit.mjs";
export async function commits_message_alias_door_commit() {
  "The commit at which a message naming an alias key stopped being possible to write.";
  ("BOTH SEAMS PASS THROUGH ONE PLACE NOW. Every commit this repo makes is worded in ",
    fn_name("git_call_message"),
    ", and that is where a short name typed at the keyboard is spelled out into the name of the command it reaches. Before it there was a door on one seam only: the by-name commit refused shorthand and the human's own keyboard did not, so the log gained offenders faster than anybody could answer for them and the gate over them stood red with no repair available at all.");
  ("IT IS THE COMMIT THAT PUT THE SPELLING OUT THERE, made on the first of September 2026, and it must not be moved forward afterwards. Everything under it is history that cannot be edited, and everything over it was worded by a door that was already shut - so the place decides which of those two an offender is. Moved forward, a live offence would read as an old one, which is the one thing this must not make easy.");
  ("★ THE NAME OF A COMMIT IS NOT AS FIXED AS THIS WAS BUILT TO ASSUME. The word written here on the day was 5733eed5232dc085376bb7400b38cd17420f2e7c, and on the third of September 2026 the history was written again and that word stopped naming anything at all - every commit made after the middle of August was given a new name, and the fifty one commits the record beside this one holds went the same way in the same moment. So the whole of this rule went out at once: the door threw rather than sorting, and the one repair the gate offers could not be run.");
  ("★ SO THE COMMIT IS NOT NAMED HERE ANY MORE, IT IS LOOKED FOR BY WHAT IT DID, by the same looking its sister door does - one reading of the history, asked for by name from both. The line looked for is the one the wording place says about itself, because prose stating what a thing is for is the most settled text in that file.");
  ("THIS IS NOT THE FORWARD MOVE THE PARAGRAPH ABOVE REFUSES, and it is not a date either. It asks the history which commit made the change, exactly as before - only by a question the history can still answer. A date was the other way to go and it is wrong here for the reason the sorting beside this one gives: two commits made in the same minute can sit on either side of a door, so a date cannot say which side either of them is on.");
  arguments_assert(arguments, 0);
  let f_name = fn_name("git_call_message");
  let path_file = text_combine_multiple(["js/", f_name, ".mjs"]);
  let said = "IS SPELLED OUT HERE";
  let commit = await git_file_text_arrived_commit(path_file, said);
  return commit;
}
