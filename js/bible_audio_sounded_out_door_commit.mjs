import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { git_file_text_arrived_commit } from "./git_file_text_arrived_commit.mjs";
export async function bible_audio_sounded_out_door_commit() {
  "The commit at which the reading gained the ability to sound out a name it does not know.";
  "★ IT IS THE PLACE THE DEFECT STOPS, AND SO THE ONLY THING THAT CAN TELL TWO RECORDINGS APART. Sound written under it can hold silence where a hard name was, because the reading of the day simply had nothing to say for a word outside its dictionary and left a gap while the caption still showed the word. Sound written over it cannot. Nothing in a finished recording says which of the two it is, so the moment this commit was made is the whole of the evidence.";
  "★ IT MUST NOT BE MOVED FORWARD LATER. Everything under it is a recording that has to be done again; everything over it is one that does not. Moved forward, chapters already good would be offered as work, and the pass they are added to is the most expensive thing in this repo's night.";
  "★ A COMMIT IS NAMED RATHER THAN A TIME BECAUSE A TIME WOULD HAVE TO BE COPIED OUT BY HAND. The second is asked of git from this name, so there is one fact here and not two that can disagree.";
  "★ BUT THE NAME OF A COMMIT IS NOT FIXED EITHER, SO IT IS NOT WRITTEN HERE ANY MORE. This history is rewritten on purpose to keep the pack small - twice in the three weeks up to the fourth of September 2026 - and a rewrite gives every commit it touches a new name. The word that stood here was written out by hand on the fourth of September, four hours after such a rewrite, and it was therefore already only as old as that morning; the same word written the day before had stopped naming anything. The sister door over commit messages was found dead exactly that way and mended the same day.";
  "SO THE COMMIT IS LOOKED FOR BY WHAT IT DID, and the looking is the same looking both mended doors do, so it is asked for by name rather than written out here twice. What is looked for is the fallback being built into the reading at all, in the one file that builds it.";
  arguments_assert(arguments, 0);
  let said = "EspeakFallback";
  let f_name = fn_name("text_to_speech");
  let path_file = text_combine_multiple(["scripts/py/", f_name, ".py"]);
  let commit = await git_file_text_arrived_commit(path_file, said);
  return commit;
}
