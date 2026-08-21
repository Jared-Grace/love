import { arguments_assert } from "./arguments_assert.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { app_music_songs } from "./app_music_songs.mjs";
import { equal } from "./equal.mjs";
export function app_music_song_named(name) {
  "$plain name";
  "The song an address names, or nothing when it names none - matched without regard to which letters were capitals.";
  "CASE IS NOT PART OF THE NAME. A link to a song is typed out by hand, read aloud and written down, and dictated into a phone, and every one of those loses the capitals. A page that answered only the exact spelling would show the list of songs to somebody who had been sent a link to one, and nothing would say why.";
  arguments_assert(arguments, 1);
  let wanted = text_lower_to(name);
  let songs = app_music_songs();
  for (let song of songs) {
    let hash_name = text_lower_to(song.hash_name);
    let same = equal(hash_name, wanted);
    if (same) {
      return song;
    }
  }
  return null;
}
