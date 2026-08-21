import { arguments_assert } from "./arguments_assert.mjs";
import { app_music_songs } from "./app_music_songs.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
export function app_music_references_all() {
  "Every passage of scripture any song on this page rests on, each named once.";
  "IT IS THE LIST THE BUILT FILE IS BUILT FROM, so it has to name what every song asks for and not only the song a reader happens to open. One file for the page rather than one per song: a reader who opens a second song then pays nothing, and the page never has to work out which file it wants before it can ask for it.";
  "Each song says for itself what it rests on, so a song added to the list is carried in here by that one edit.";
  arguments_assert(arguments, 0);
  let songs = app_music_songs();
  let references = [];
  for (let song of songs) {
    let named = song.references();
    for (let reference of named) {
      let already = list_includes(references, reference);
      if (already) {
        continue;
      }
      list_add(references, reference);
    }
  }
  return references;
}
