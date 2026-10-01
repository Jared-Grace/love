import { arguments_assert } from "./arguments_assert.mjs";
import { public_chunks_orphaned } from "./public_chunks_orphaned.mjs";
import { property_list_map_property } from "./property_list_map_property.mjs";
import { folder_chunks_orphaned_delete } from "./folder_chunks_orphaned_delete.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_sum } from "./list_sum.mjs";
import { qa_promoted_pieces_gone_forget } from "./qa_promoted_pieces_gone_forget.mjs";
import { property_get } from "./property_get.mjs";
export async function public_chunks_orphaned_delete() {
  "Takes away every extra script file left over in any of the three folders a build writes into, and says for each folder how many went and how many are still there afterwards.";
  "IT FINDS ITS OWN FOLDERS AND ITS OWN FILES. Clearing one folder at a time is the same command run over a list somebody typed, and a typed list is a guess about which folders a build writes into that goes stale the moment one is added. The folders are taken from the same reading that names the leftovers, so there is one place that knows.";
  "Each folder is cleared by the single-folder removal rather than by a removal written again here, so the reading and the removal stay in the same breath for every folder - a file that has become wanted since the folders were listed is safe, because the list that decides is made inside that folder's own clearing.";
  "The counts left over are the proof. A clearing that quietly did nothing leaves a folder looking exactly like one it cleared, so the second reading each folder does is what tells the two apart, and it is expected to be nothing at all.";
  "Nothing is sent anywhere. What is being served goes on being served until somebody sends the folder out, and that is a decision about what people have in front of them.";
  "do NOT grant. It works out for itself which files to remove, which is precisely what a standing approval must never be given to - the set it acts on is not visible in the words that start it.";
  "Taking a file away also takes it out of the note of what each waiting app came out as, because that note is checked before anything is sent and a name in it for a file that is gone stops the sending of every app standing beside it - measured the day this line was written: one clearing held back sixteen apps, and the refusal named all sixteen and not the clearing.";
  "★ A FOLDER THAT REFUSES IS WRITTEN DOWN AND THE REST ARE STILL CLEARED. The folder people are served from is read first, and one noted file in it used to end the whole run - so the two folders nobody is served, holding four hundred and seventy-four dead files between them, were never reached at all. Measured 2026-10-02: a reader asked for the leftovers to be cleared, the served folder refused on its second file, and the answer was an error rather than a clearing; the other ninety-four percent of the work was possible the whole time and simply never attempted.";
  "The refusal itself is right and is not softened here. A noted file must not be removed, and the single-folder clearing is where that is decided - this only declines to treat one folder's honest no as a verdict on the other two, which is a question about the order the folders happen to come back in and nothing more.";
  "What refused travels out by name, because a clearing that stopped somewhere is a different situation from one that finished and the counts alone cannot tell them apart. A folder that refused is left out of the totals rather than counted as nothing cleared, so the number that comes back is what actually happened rather than an average of a success and a silence.";
  "It is worth running again after whatever the refusal was waiting on. A served folder's noted file stops being noted once its app is built and sent again, and this finds its own work, so the second run clears what the first could not and needs to be told nothing about the first.";
  arguments_assert(arguments, 0);
  let before = await public_chunks_orphaned();
  let folders = property_list_map_property(before, "folders", "folder");
  let cleared = [];
  let refused = [];
  for (let folder of folders) {
    async function folder_cleared() {
      let done = await folder_chunks_orphaned_delete(folder);
      return done;
    }
    let one = await catch_null_async(folder_cleared);
    let stopped = null_is(one);
    if (stopped) {
      list_add(refused, folder);
      continue;
    }
    list_add(cleared, one);
  }
  let deleted_counts = list_map_property(cleared, "deleted");
  let deleted = list_sum(deleted_counts);
  let left_counts = list_map_property(cleared, "left");
  let left = list_sum(left_counts);
  await qa_promoted_pieces_gone_forget();
  let r = {
    deleted,
    left,
    refused,
    bytes: property_get(before, "bytes"),
    folders: cleared,
  };
  return r;
}
