import { arguments_assert } from "./arguments_assert.mjs";
import { app_music_verses_get } from "./app_music_verses_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { app_music_reference_version } from "./app_music_reference_version.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_bible_reference_text } from "./app_shared_bible_reference_text.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { list_map_limited_async } from "./list_map_limited_async.mjs";
export async function app_music_references_fill(asked_list, versions) {
  "$plain asked_list";
  "Gets the words of every passage the song has made a place for, and writes each into its own place.";
  "THEY COME DOWN TOGETHER, IN ONE PIECE. A song rests on sixty chapters or so, and each of those used to be a request of its own - a few at a time, each a round trip, the reader watching the page fill in for several seconds. The whole set is known before anybody opens the page, so it is built ahead of time into a single file and the page asks once.";
  "A passage the built file does not carry is fetched on its own. That is what happens to a line that started resting on a new passage since the file was last built, and it is the difference between one line arriving late and the page being wrong.";
  "A passage this bible does not hold at all leaves its place empty rather than saying so. The name of it is already on the screen as a link, so the reader still has the one thing they came for - somewhere to go - and a line of apology in the middle of a song would be the loudest thing on the page.";
  "THE PASSAGE FETCHED ON ITS OWN IS FETCHED OUT OF ITS OWN SONG'S TRANSLATION. The bible used to be settled once for the whole page, which was right while every passage came out of the same one, and then once per passage, which was right while a passage meant the same thing in every song. It is now the answer this song gives for this passage, and asking any wider question would put the wrong wording on the screen under a caption naming the right one - and only for the passages the built file happens to be missing, so it would be right every time anybody rebuilt and looked.";
  "A PASSAGE THAT FAILS TO ARRIVE IS TREATED THE SAME WAY AS ONE THIS BIBLE DOES NOT HOLD, and that is what stops a bad minute of network taking the whole page down. Fetching one passage can end in a refusal rather than in an answer, and a refusal nobody catches leaves the page holding a rejected promise - which the shared error box listens for, so the reader is handed a full-screen apology laid over a song that had already finished drawing. The words of the song never depended on this: they were on the screen before the first passage was asked for. So the one card that failed stays empty and the rest fill in, which is exactly the behaviour written down above for a passage that was never there to fetch.";
  arguments_assert(arguments, 2);
  let texts = await app_music_verses_get();
  async function lambda$fill(asked) {
    let text = property_get_or_null(texts, asked.reference);
    let unbuilt = null_is(text);
    if (unbuilt) {
      let version = app_music_reference_version(versions, asked.reference);
      let folder = property_get(version, "bible_folder");
      async function fetch_one() {
        let fetched = await app_shared_bible_reference_text(
          folder,
          asked.reference,
        );
        return fetched;
      }
      text = await catch_null_async(fetch_one);
    }
    let unheld = null_is(text);
    if (unheld) {
      return;
    }
    html_text_set(asked.words, text);
  }
  await list_map_limited_async(asked_list, lambda$fill, 4);
}
