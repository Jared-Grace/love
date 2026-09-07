import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_picture_notes } from "./lyric_video_picture_notes.mjs";
import { property_equals } from "./property_equals.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
import { lyric_video_picture_notes_write } from "./lyric_video_picture_notes_write.mjs";
export async function lyric_video_picture_note_done(key, words) {
  "$plain key";
  "$plain words";
  "Mark every note against one background picture whose words are the ones given as answered, so it comes off the list a watcher is shown.";
  "IT MARKS AND NEVER DELETES. The notes are the account of why a picture was redrawn, and a press that threw one away would leave whoever looks at that picture next with no account of it - and no way back, because the press is in a browser and the writing is on a disk nobody is watching.";
  "IT IS ADDRESSED BY THE NOTE'S OWN WORDS AND NEVER BY ITS PLACE IN THE LIST. Another note can be filed while the video is still playing, and a number would then name whichever note had slid into that place rather than the one that was pressed.";
  "MARKING WORDS THAT MATCH NOTHING IS NOT A FAILURE. The same words filed twice are answered together, which is right, and words answered already are answered again to no effect.";
  arguments_assert(arguments, 2);
  let notes = await lyric_video_picture_notes(key);
  function mark(one) {
    let same = property_equals(one, "note", words);
    if (same) {
      property_set(one, "done", true);
    }
  }
  each(notes, mark);
  let path = await lyric_video_picture_notes_write(key, notes);
  return path;
}
