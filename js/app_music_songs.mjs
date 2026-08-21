import { song_image_couplets_references } from "./song_image_couplets_references.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { song_image_couplets_title } from "./song_image_couplets_title.mjs";
import { app_music_song_hash_name } from "./app_music_song_hash_name.mjs";
import { app_music_song_image_couplets_show } from "./app_music_song_image_couplets_show.mjs";
import { list_add } from "./list_add.mjs";
export function app_music_songs() {
  "Every song this page can show: what each is called, the word it is reached by in an address, and what draws it.";
  "A SONG IS LISTED HERE ONLY ONCE ITS WORDS AND THEIR EXPLANATION EXIST. The page is what a description under a video points at, so a song that appeared here with nothing behind it would turn that pointing into a dead end - which is worse than the video saying nothing.";
  "Each song carries the thing that draws it rather than being looked up in a second list somewhere, because the songs are unalike: one is a hymn written in couplets with a picture and a passage behind each, and the next one will not be.";
  "It carries what it rests on as well as what draws it, because the scripture behind the whole page is fetched in one piece before anybody opens it, and that can only be worked out if each song will say what it names without being drawn first.";
  arguments_assert(arguments, 0);
  let songs = [];
  let title = song_image_couplets_title();
  let hash_name = app_music_song_hash_name(title);
  let hymn = {
    title: title,
    hash_name: hash_name,
    show: app_music_song_image_couplets_show,
    references: song_image_couplets_references,
  };
  list_add(songs, hymn);
  return songs;
}
