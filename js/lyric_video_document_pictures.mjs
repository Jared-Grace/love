import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
export function lyric_video_document_pictures(document) {
  arguments_assert(arguments, 1);
  ("$plain document");
  ("The pictures an authored lyric video document asks to have shown behind its words, and nothing at all when it asks for none.");
  ("A DOCUMENT THAT NAMES NO PICTURES IS NOT A DOCUMENT WITH SOMETHING MISSING. Every document written before there were pictures describes a video of words on black, and that is a finished thing rather than a draft - it was watched, it was corrected, and it renders today exactly as it always did. So a document that says nothing here is answered with nothing rather than refused, and the psalms already timed stay renderable without anybody going back over them.");
  ("It is asked for through a name rather than read at the one place that needs it, because a document is written by a person and this is where what a person may leave out is decided. Spread across the callers, the same absence would be forgiving in one and fatal in another.");
  let asked = document.pictures;
  let none = equal(asked, undefined);
  if (none) {
    let empty = [];
    return empty;
  }
  return asked;
}
