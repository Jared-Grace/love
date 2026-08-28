import { bible_audio_recording_bucket } from "./bible_audio_recording_bucket.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_audio_recordings } from "./bible_audio_recordings.mjs";
import { bible_audio_recording_manifest_row } from "./bible_audio_recording_manifest_row.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
export async function bible_audio_verses_manifest_write_all() {
  "Re-notes every recording on this disk against the current cutting rule, and says how many are cut the way it cuts, how many of those still say what their chapter says, how many are cut some other way, and how many could not be asked.";
  "★ IT FINDS ITS OWN SET, SO IT IS ONE COMMAND RATHER THAN FIVE HUNDRED INVOCATIONS. A loop of the same command over a list of chapters leaves nothing behind and drifts from the disk the moment a recording is added or deleted. Asking the folders each time means the sweep and the disk cannot disagree.";
  "★ RE-NOTING IS NOT RE-RECORDING, AND THE DIFFERENCE IS THE WHOLE REASON THIS IS SAFE TO RUN. It replaces a note that is derived from the sound and the chapter with the same note derived again, so nothing is lost that running it once more would not bring back. No sound is made, deleted or changed.";
  "★ THE ONES THAT LINE UP ARE SPLIT AGAIN, BECAUSE A BARE COUNT OF THEM HIDES THE ONLY ACTIONABLE ANSWER THERE IS. A recording cut the current way whose words no longer match its chapter is a short list of pieces to re-record - the cheapest repair on the disk and the one worth doing first. Counted together with the ones that match, it disappears into a number that looks like good news.";
  "★ THE FIVE ANSWERS ADD UP TO EVERY RECORDING, AND THAT IS CHECKED BY CONSTRUCTION RATHER THAN HOPED FOR. Every recording lands in exactly one of empty, clean, stale, cut some other way, and could not be asked, because one named reader says which of the five it is and this only puts the recording where that one word points. A sweep whose parts do not sum to its total has looked at a category it never named.";
  "★ WHICH OF THE FIVE A RECORDING IS, IS NOT DECIDED HERE, BECAUSE THAT JUDGMENT HAS TO BE CHECKABLE WITHOUT A DISK. It is a short run of tests whose order is the whole of the rule, and every order of them still adds up to the total, so nothing here could ever catch a swapped one. Written down under its own name it is held against written cases in a millisecond. Sixteen folders with no sound in them were counted as clean before that was true, and the count was being read as evidence that recordings were right when nothing had been looked at.";
  arguments_assert(arguments, 0);
  let recordings = await bible_audio_recordings();
  async function recording_each(recording) {
    let row = await bible_audio_recording_manifest_row(recording);
    return row;
  }
  let rows = await list_map_async(recordings, recording_each);
  let empty = [];
  let clean = [];
  let stale = [];
  let recut = [];
  let unjudged = [];
  let buckets = {
    empty,
    clean,
    stale,
    recut,
    unjudged,
  };
  function row_each(row) {
    let bucket = bible_audio_recording_bucket(row);
    let landed = property_get(buckets, bucket);
    list_add(landed, row);
  }
  each(rows, row_each);
  let report = {
    recordings: rows.length,
    empty: empty.length,
    clean: clean.length,
    stale: stale.length,
    recut: recut.length,
    unjudged: unjudged.length,
    nothing_recorded: empty,
    words_changed: stale,
    cut_another_way: recut,
    not_judged: unjudged,
  };
  return report;
}
