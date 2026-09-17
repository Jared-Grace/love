import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { lyric_video_picture_note_key } from "./lyric_video_picture_note_key.mjs";
import { fn_name } from "./fn_name.mjs";
import { path_name } from "./path_name.mjs";
import { lyric_video_picture_note_parts } from "./lyric_video_picture_note_parts.mjs";
import { app_shared_notes_review } from "./app_shared_notes_review.mjs";
export function lyric_video_review_notes(parent, picture) {
  "$plain parent";
  "$plain picture";
  "The notes already standing against one background picture of a lyric video, and under them a box to add another with one press for the part it is about.";
  "IT IS HANDED THE PICTURE AND WORKS OUT THE KEY ITSELF. Whoever draws this is watching a video and knows which picture is on the screen; asking them for a key as well would be asking them to know how the notes are filed, and there would then be two places that had to agree about it.";
  arguments_assert(arguments, 2);
  let path = property_get(picture, "path");
  let key = lyric_video_picture_note_key(picture);
  let store = fn_name("lyric_video_picture_note_add");
  let subject = path_name(path);
  let names = lyric_video_picture_note_parts();
  let holder = app_shared_notes_review(parent, store, key, subject, names);
  return holder;
}
