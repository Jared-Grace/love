import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { app_music_verses_get } from "./app_music_verses_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { app_shared_bible_reference_text } from "./app_shared_bible_reference_text.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { list_map_limited_async } from "./list_map_limited_async.mjs";
export async function app_music_references_fill(asked_list) {
  "$plain asked_list";
  "Gets the words of every passage the song has made a place for, and writes each into its own place.";
  "THEY COME DOWN TOGETHER, IN ONE PIECE. A song rests on sixty chapters or so, and each of those used to be a request of its own - a few at a time, each a round trip, the reader watching the page fill in for several seconds. The whole set is known before anybody opens the page, so it is built ahead of time into a single file and the page asks once.";
  "A passage the built file does not carry is fetched on its own. That is what happens to a line that started resting on a new passage since the file was last built, and it is the difference between one line arriving late and the page being wrong.";
  "A passage this bible does not hold at all leaves its place empty rather than saying so. The name of it is already on the screen as a link, so the reader still has the one thing they came for - somewhere to go - and a line of apology in the middle of a song would be the loudest thing on the page.";
  arguments_assert(arguments, 1);
  let folder = ebible_folder_english();
  let texts = await app_music_verses_get();
  async function lambda$fill(asked) {
    let text = property_get_or_null(texts, asked.reference);
    let unbuilt = null_is(text);
    if (unbuilt) {
      text = await app_shared_bible_reference_text(folder, asked.reference);
    }
    let unheld = null_is(text);
    if (unheld) {
      return;
    }
    html_text_set(asked.words, text);
  }
  await list_map_limited_async(asked_list, lambda$fill, 4);
}
