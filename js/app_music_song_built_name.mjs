import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_name_prefix_without_fn } from "./app_shared_name_prefix_without_fn.mjs";
import { app_music } from "./app_music.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_music_song_built_name(song) {
  "$plain song";
  "The name the built copy of one song's scripture is filed under - this page's own name, and then the word the song is reached by in an address.";
  "ONE FILE PER SONG, NOT ONE PER PAGE. The page kept a single file holding every passage any song named, which was right for exactly as long as a passage meant the same thing wherever it was sung. It does not: two songs resting on the same verse may each echo a different wording of it, and sixteen passages here are sung by both songs. One file keyed by the passage alone can only carry one of the two answers, so whichever song was built last would hand its wording to the other one - under a caption naming the translation the reader was not given.";
  "THE WORD THE SONG IS REACHED BY IS WHAT NAMES THE FILE, rather than its title. That word is already the one thing that tells the songs apart, and already has to survive being typed out by hand and read aloud, so it is already safe to put in a file name. A title would have to be made safe here and made safe the same way again in every reader.";
  "THE PAGE'S NAME IS KEPT IN FRONT OF IT so the file says which page asked for it. The bible folder these sit in is shared by every app that keeps one of these, so a song name alone would sit there beside the other apps' files claiming to be one of them.";
  arguments_assert(arguments, 1);
  let prefix = app_shared_name_prefix_without_fn(app_music);
  let hash_name = property_get(song, "hash_name");
  let built_name = text_combine_multiple([prefix, "_", hash_name]);
  return built_name;
}
