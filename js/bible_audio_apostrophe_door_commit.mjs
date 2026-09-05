import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { git_file_text_arrived_commit } from "./git_file_text_arrived_commit.mjs";
export async function bible_audio_apostrophe_door_commit() {
  "The commit at which the reading began straightening the curly apostrophe before speaking, and so stopped dropping the end of every word that holds one.";
  "★ IT IS THE THIRD DOOR AND THE WORST FAULT OF THE THREE, BECAUSE THE OTHER TWO GET A NAME WRONG AND THIS ONE GETS A SENTENCE BACKWARDS. The Bible text spells the mark as the curly one, which is right on the page and unrecognised by the phonemiser: the word is cut at the mark and what is left is spoken as a word of its own. On a possessive that is an ending spelled out as a letter, so a man's house is read man ESS house. On a negative the whole negative goes, so isn't is spoken is, wasn't was, didn't did. A recording under this door can therefore say the opposite of what its own caption shows.";
  "★ IT IS THE LATEST OF THE THREE, SO ANYTHING UNDER IT IS UNDER ALL OF THEM. That is what lets a check that cares about any of the three faults ask this one alone for the set worth reading at all, and then use the earlier doors only to tell which reading spoke each chapter.";
  "★ THE COMMIT IS LOOKED FOR BY WHAT IT DID, FOR THE REASON THE OLDEST DOOR GIVES AT LENGTH: this history is rewritten on purpose to keep the pack small, and a rewrite renames every commit it touches while carrying the change through unaltered. What is looked for is the step that straightens the mark being named at all, in the one file that turns a line into a sound.";
  arguments_assert(arguments, 0);
  let said = "straightened";
  let f_name = fn_name("text_to_speech");
  let path_file = text_combine_multiple(["scripts/py/", f_name, ".py"]);
  let commit = await git_file_text_arrived_commit(path_file, said);
  return commit;
}
