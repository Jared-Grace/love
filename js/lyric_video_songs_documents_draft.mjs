import { arguments_assert } from "./arguments_assert.mjs";
import { file_exists } from "./file_exists.mjs";
import { not } from "./not.mjs";
import { list_size } from "./list_size.mjs";
export async function lyric_video_songs_documents_draft(
  songs,
  named,
  path_of,
  draft_one,
) {
  arguments_assert(arguments, 4);
  ("$plain songs");
  ("$plain named");
  ("$plain path_of");
  ("$plain draft_one");
  ("Writes a first timing document for every song handed in that has no document yet, and says which those were, which were left alone, which were refused and which are still without one.");
  ("★ A SONG THAT ALREADY HAS A DOCUMENT IS LEFT ALONE, AND THAT IS THE WHOLE SAFETY OF RUNNING THIS TWICE. The times in a document are the one part of the work nobody can redo by command - somebody sat with the song and moved each line onto the beat it is sung on - and drafting over them would put an even spread back in their place. Nothing would go red; the loss would show up as a video whose words drift, which is only visible to a person watching it.");
  ("A song whose text or sound cannot be read is set aside with what went wrong, and the rest are still written. One missing translation of one psalm is no reason for the other twenty to go untimed, and stopping at the first would hide how many were actually reachable.");
  ("★ WHAT A SONG IS STAYS OUTSIDE, WHICH IS WHY A WHOLE CHAPTER AND A STANZA CAN SHARE THIS. A chapter is addressed by its number and a stanza by a number and two verse ends, and those are the only differences; leaving them to the caller means the leave-it-alone rule above is written once, and a second copy of that rule is the one copy that could quietly overwrite a person's evening of work.");
  ("The last walk is deliberately made again from the folder rather than worked out from the two lists, because what is being reported is which songs have no document now, and only asking the disk answers that. A song that was refused and a song whose write failed silently look the same in a tally and different on the disk.");
  let drafted = [];
  let kept = [];
  let refused = [];
  for (let song of songs) {
    let path_document = path_of(song);
    let already = await file_exists(path_document);
    if (already) {
      let v = named(song);
      kept.push(v);
      continue;
    }
    try {
      await draft_one(song, path_document);
      let v2 = named(song);
      drafted.push(v2);
    } catch (e) {
      refused.push({
        passage: named(song),
        went_wrong: e.message,
      });
    }
  }
  let undocumented = [];
  for (let song of songs) {
    let path_document = path_of(song);
    let there = await file_exists(path_document);
    if (not(there)) {
      let v3 = named(song);
      undocumented.push(v3);
    }
  }
  let r = {
    songs: list_size(songs),
    drafted,
    kept,
    refused,
    undocumented,
  };
  return r;
}
