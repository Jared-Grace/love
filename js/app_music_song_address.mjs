import { arguments_assert } from "./arguments_assert.mjs";
import { firebase_project_url_jg } from "./firebase_project_url_jg.mjs";
import { app_music_song_hash_name } from "./app_music_song_hash_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_music_song_address(title) {
  "$plain title";
  "Where a song's words and their explanation are on the web: the whole address, the kind a person can be handed, typed out, or tapped.";
  "IT IS BUILT AND NOT WRITTEN DOWN. The part after the hash is made out of the song's own name by the same reading the page matches with, so a song that is renamed keeps a working address instead of leaving one that opens the list of songs and says nothing about why.";
  arguments_assert(arguments, 1);
  let site = firebase_project_url_jg();
  let hash_name = app_music_song_hash_name(title);
  let r = text_combine_multiple([site, "/music.html#", hash_name]);
  return r;
}
