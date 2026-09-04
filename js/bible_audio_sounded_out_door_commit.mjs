import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { folder_current_absolute } from "./folder_current_absolute.mjs";
import { text_combine } from "./text_combine.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_filter } from "./list_filter.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { list_empty_not_is_assert_json } from "./list_empty_not_is_assert_json.mjs";
import { list_last } from "./list_last.mjs";
export async function bible_audio_sounded_out_door_commit() {
  "The commit at which the reading gained the ability to sound out a name it does not know.";
  "★ IT IS THE PLACE THE DEFECT STOPS, AND SO THE ONLY THING THAT CAN TELL TWO RECORDINGS APART. Sound written under it can hold silence where a hard name was, because the reading of the day simply had nothing to say for a word outside its dictionary and left a gap while the caption still showed the word. Sound written over it cannot. Nothing in a finished recording says which of the two it is, so the moment this commit was made is the whole of the evidence.";
  "★ IT MUST NOT BE MOVED FORWARD LATER. Everything under it is a recording that has to be done again; everything over it is one that does not. Moved forward, chapters already good would be offered as work, and the pass they are added to is the most expensive thing in this repo's night.";
  "★ A COMMIT IS NAMED RATHER THAN A TIME BECAUSE A TIME WOULD HAVE TO BE COPIED OUT BY HAND. The second is asked of git from this name, so there is one fact here and not two that can disagree.";
  "★ BUT THE NAME OF A COMMIT IS NOT FIXED EITHER, SO IT IS NOT WRITTEN HERE ANY MORE. This history is rewritten on purpose to keep the pack small - twice in the three weeks up to the fourth of September 2026 - and a rewrite gives every commit it touches a new name. The word that stood here was written out by hand on the fourth of September, four hours after such a rewrite, and it was therefore already only as old as that morning; the same word written the day before had stopped naming anything. The sister door over commit messages was found dead exactly that way and mended the same day.";
  "SO THE COMMIT IS LOOKED FOR BY WHAT IT DID. A rewrite renames commits and carries the changes themselves through unaltered, so the change is the durable name and the sha is the perishable one. What is looked for is the fallback being built into the reading at all, in the one file that builds it; the oldest commit to touch that word is the one that put it there, because a later commit taking it away would match too and only the oldest can be the arrival.";
  "IT THROWS RATHER THAN COMING BACK EMPTY, and here that is worth more than usual. An empty answer would place every recording over the door and offer none of them as work, so a whole Bible would keep its silent names and nothing would say so. A throw stops the night instead, which is the same choice the reading itself makes one file away when the fallback cannot be built.";
  arguments_assert(arguments, 0);
  let folder = folder_current_absolute();
  let said = "EspeakFallback";
  let probe = text_combine("-S", said);
  let words = [
    "log",
    probe,
    "--format=%H",
    "--",
    text_combine_multiple(["scripts/py/", fn_name("text_to_speech"), ".py"]),
  ];
  let out = await git_folder_run(folder, words);
  let lines = text_split_newline(out);
  let full = list_filter(lines, text_empty_not_is);
  list_empty_not_is_assert_json(full, said);
  let commit = list_last(full);
  return commit;
}
