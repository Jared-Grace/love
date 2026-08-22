import { arguments_assert } from "./arguments_assert.mjs";
import { app_music_songs } from "./app_music_songs.mjs";
import { property_get } from "./property_get.mjs";
import { add } from "./add.mjs";
import { bible_reference_chapter_verse_shape_is } from "./bible_reference_chapter_verse_shape_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_size } from "./list_size.mjs";
export function app_music_song_references_shape_gate_run() {
  "QA gate: every passage any song on the music page rests on is written so a chapter and a verse can be read out of it.";
  "ONE MALFORMED REFERENCE EMPTIES THE REST OF THE PAGE, which is why this is a gate and not a nicety. The passages are filled in together, and reading a reference with no colon in it throws part-way through that filling - so the lines before it carry their scripture, the line itself and every line after it carry none, and nothing anywhere says so. A page missing most of its point still draws, still scrolls, and still looks finished.";
  "It asks the registry rather than a list of songs written out here, so a song added later is checked without anybody remembering to come back. What it can ask offline is the writing alone; whether a verse exists is a question for the bible itself, and that arrives over the wire.";
  arguments_assert(arguments, 0);
  let songs = app_music_songs();
  let malformed = [];
  let checked = 0;
  for (let song of songs) {
    let title = property_get(song, "title");
    let references_get = property_get(song, "references");
    let references = references_get();
    for (let reference of references) {
      checked = add(checked, 1);
      let shaped = bible_reference_chapter_verse_shape_is(reference);
      if (shaped) {
        continue;
      }
      list_add(malformed, {
        title,
        reference,
      });
    }
  }
  list_empty_is_assert_json(malformed, {
    hint: "these passages are written in a way the reader cannot cut into a chapter and a verse, and each one abandons the filling of every passage after it - write the chapter even where the book has only one, so Jude 24 becomes Jude 1:24",
  });
  ("Says how much it looked at, because a gate that answers nothing cannot be told apart from one that did nothing.");
  let r = {
    songs: list_size(songs),
    references: checked,
    malformed: 0,
  };
  return r;
}
