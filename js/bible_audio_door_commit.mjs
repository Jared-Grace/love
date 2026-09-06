import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { git_file_text_arrived_commit } from "./git_file_text_arrived_commit.mjs";
export async function bible_audio_door_commit(said) {
  "$plain said";
  "The commit at which a given word first arrived in the one file that turns a line into a sound - which is what every door into the read Bible's history is.";
  "★ THE THREE DOORS DIFFER IN ONE WORD AND IN NOTHING ELSE. Each names a fault the reading used to have - a name left silent, a name said wrongly, a sentence turned backwards by a curly apostrophe - and each finds its own moment by asking when the mending was written into the reading script. What the door knows is which word to look for; where to look and how to ask were the same three lines written out three times, and three copies of a judgment do not break, they drift.";
  "★ THE COMMIT IS LOOKED FOR BY WHAT IT DID RATHER THAN BY ITS NAME. This history is rewritten on purpose to keep the pack small, and a rewrite gives every commit it touches a new name while carrying the change through unaltered. A door written out as a commit name is therefore only as old as the last rewrite, and one written the day before has stopped naming anything at all.";
  "The file is spelled from the reading's own function name rather than written out, so that renaming the reading moves every door with it.";
  arguments_assert(arguments, 1);
  let f_name = fn_name("text_to_speech");
  let path_file = text_combine_multiple(["scripts/py/", f_name, ".py"]);
  let commit = await git_file_text_arrived_commit(path_file, said);
  return commit;
}
