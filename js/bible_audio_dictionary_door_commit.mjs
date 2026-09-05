import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { git_file_text_arrived_commit } from "./git_file_text_arrived_commit.mjs";
export async function bible_audio_dictionary_door_commit() {
  "The commit at which the reading gained a written dictionary of Bible names, and so began saying them the way somebody wrote them down rather than the way it guessed.";
  "★ IT IS A SECOND DOOR AND NOT A CORRECTION OF THE FIRST, BECAUSE THE TWO FAULTS ARE DIFFERENT FAULTS. The older door is where the reading stopped leaving an unknown name silent. This one is where it stopped saying a known name wrongly. A recording made between them holds no silence at all and can still say Pontius Pilate with neither name right, which is exactly what Luke 3 does: its sound was written two days over the older door and two days under this one.";
  "★ IT IS THE LATER OF THE TWO, SO ANYTHING UNDER IT IS UNDER BOTH. That is what lets a check that cares about either fault ask this one alone and be sure it has missed nothing.";
  "★ THE COMMIT IS LOOKED FOR BY WHAT IT DID, FOR THE REASON THE OTHER DOOR GIVES AT LENGTH: this history is rewritten on purpose to keep the pack small, and a rewrite renames every commit it touches while carrying the change through unaltered. What is looked for is the dictionary being read into the reading at all, in the one file that builds the reading.";
  arguments_assert(arguments, 0);
  let said = "bible_pronunciations";
  let f_name = fn_name("text_to_speech");
  let path_file = text_combine_multiple(["scripts/py/", f_name, ".py"]);
  let commit = await git_file_text_arrived_commit(path_file, said);
  return commit;
}
