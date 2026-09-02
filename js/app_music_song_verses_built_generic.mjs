import { arguments_assert } from "./arguments_assert.mjs";
import { app_music_bible_default_version } from "./app_music_bible_default_version.mjs";
import { property_get } from "./property_get.mjs";
import { app_music_song_built_name } from "./app_music_song_built_name.mjs";
import { app_music_song_verses_build } from "./app_music_song_verses_build.mjs";
export async function app_music_song_verses_built_generic(song, built_fn) {
  "$plain song";
  "the song is the one being asked about. It names an entry in the music page's own list and nothing that runs.";
  "Hand one song's built-ahead wording to whichever of the two shared doors is wanted - the one that reads a copy back, or the one that works the copy out and puts it in storage.";
  "THE TWO DOORS DIFFER IN NOTHING BUT WHICH ONE THEY ARE, and that was the whole of the duplication. Both need the name the file is filed under, the bible it is filed beneath, and a way of working the words out if there is no file; both then hand those same three things over in the same order. Only the door itself changed, so the door is what comes in.";
  "IT IS THE DOOR AND NEVER A WORD NAMING ONE. A name would need a list here turning names into doors, which is a second copy of the two facts this exists to hold once, and a name nobody put in that list would fail at the moment of use rather than at the moment of writing.";
  "WHICH BIBLE IS NAMED IS ONLY WHERE THE COPY IS FILED, not what is in it. The file is a mixture - most of it the usual bible, some of it passages quoted from another - and the name is there to tell two mixtures apart rather than to describe one.";
  arguments_assert(arguments, 2);
  let version = app_music_bible_default_version();
  let bible_folder = property_get(version, "bible_folder");
  let built_name = app_music_song_built_name(song);
  async function build() {
    let texts = await app_music_song_verses_build(song);
    return texts;
  }
  let value = await built_fn(built_name, bible_folder, build);
  return value;
}
