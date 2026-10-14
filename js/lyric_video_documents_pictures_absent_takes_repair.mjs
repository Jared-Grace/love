import { arguments_assert } from "./arguments_assert.mjs";
import { giveaway_psalms_paintings_files_missing } from "./giveaway_psalms_paintings_files_missing.mjs";
import { lyric_video_document_name_take_is } from "./lyric_video_document_name_take_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_unique_sorted } from "./list_unique_sorted.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { lyric_video_document_pictures_absent_remove } from "./lyric_video_document_pictures_absent_remove.mjs";
export async function lyric_video_documents_pictures_absent_takes_repair() {
  arguments_assert(arguments, 0);
  ("Finds every superseded lyric video take that still names a picture no longer on this machine, takes those pictures out of each one, and says what is left over.");
  ("★ IT TAKES NO ARGUMENT BECAUSE THE SET IS NOT A CHOICE, AND THAT IS WHAT MAKES IT RUNNABLE AGAIN AND AGAIN. The names it would repair cannot be known before it asks, because every painting swap manufactures more of them - a crop is redrawn under a new name and every earlier take goes on naming the one that was deleted. A caller handing in a list would be handing in a list copied out of an older answer. Asking for the set, repairing exactly that set, then asking again is also the only proof available that it worked, since there is no other record of which pictures were ever there.");
  ("★ THE DOCUMENTS IT WILL NOT TOUCH ARE THE POINT OF THE SPLIT, NOT A SHORTFALL IN IT. An absent picture in a take is finished business, because the take has already been superseded and will never be rendered again. The same absence in the version in use means the opposite: a crop still has to be drawn, and taking the line out would silently shorten a video nobody has made yet. So the live ones are reported back by name and deliberately left alone, which is the one thing that still needs a person.");
  ("Each repair commits itself under its own name and its own argument, so a run of several lands as several replayable commands rather than one sweep claiming to be one command. The note of already-changed files is emptied first, or the first repair would file somebody else's leftover work under its name.");
  ("Nothing to repair is answered without writing or committing anything, so it is safe to run when the answer is already clean.");
  let found = await giveaway_psalms_paintings_files_missing();
  let takes = [];
  let live = [];
  for (let one of found.missing) {
    let take = lyric_video_document_name_take_is(one.document_name);
    if (take) {
      list_add(takes, one.document_name);
      continue;
    }
    list_add(live, one.document_name);
  }
  let take_names = list_unique_sorted(takes);
  let live_names = list_unique_sorted(live);
  if (list_empty_is(take_names)) {
    let none = {
      repaired: [],
      live_documents_needing_a_crop: live_names,
      missing_after: found.missing,
    };
    return none;
  }
  await ai_git_noted();
  let repaired = [];
  for (let name of take_names) {
    let args = [name];
    let one = await function_call_commit(
      lyric_video_document_pictures_absent_remove,
      args,
    );
    list_add(repaired, one);
  }
  let after = await giveaway_psalms_paintings_files_missing();
  let result = {
    repaired,
    live_documents_needing_a_crop: live_names,
    missing_after: after.missing,
  };
  return result;
}
