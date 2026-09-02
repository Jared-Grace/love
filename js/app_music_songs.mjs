import { arguments_assert } from "./arguments_assert.mjs";
import { song_image_couplets_title } from "./song_image_couplets_title.mjs";
import { song_title_hash_name } from "./song_title_hash_name.mjs";
import { app_music_song_image_couplets_show } from "./app_music_song_image_couplets_show.mjs";
import { song_image_couplets_references } from "./song_image_couplets_references.mjs";
import { song_image_couplets_versions } from "./song_image_couplets_versions.mjs";
import { list_add } from "./list_add.mjs";
import { song_god_our_savior_title } from "./song_god_our_savior_title.mjs";
import { app_music_song_god_our_savior_show } from "./app_music_song_god_our_savior_show.mjs";
import { song_god_our_savior_references } from "./song_god_our_savior_references.mjs";
import { song_god_our_savior_versions } from "./song_god_our_savior_versions.mjs";
import { list_sort_text_property } from "./list_sort_text_property.mjs";
export function app_music_songs() {
  "Every song this page can show: what each is called, the word it is reached by in an address, what draws it, what it rests on, and which passages it quotes from something other than the page's usual bible.";
  "A SONG IS LISTED HERE ONLY ONCE ITS WORDS AND THEIR EXPLANATION EXIST. The page is what a description under a video points at, so a song that appeared here with nothing behind it would turn that pointing into a dead end - which is worse than the video saying nothing.";
  "Each song carries the thing that draws it rather than being looked up in a second list somewhere, because the songs are unalike: one is a hymn written in couplets with a picture and a passage behind each, and the next one will not be.";
  "It carries what it rests on as well as what draws it, because the scripture behind the whole page is fetched in one piece before anybody opens it, and that can only be worked out if each song will say what it names without being drawn first.";
  "IT CARRIES ITS OWN TRANSLATION CHOICES FOR THE SAME REASON IT CARRIES ITS OWN PASSAGES. Which bible a passage is quoted from is a fact about the song, not about the passage: two songs resting on the same verse may each echo a different wording of it, and each is owed the one it was written against. Kept in a single list keyed by the passage alone - which is how it was kept - whichever song was decided first decided for the other in silence, and sixteen passages on this page are sung by both.";
  "THEY COME BACK IN ALPHABETICAL ORDER, NOT IN THE ORDER THEY WERE ADDED. A reader arriving at the list has a name in mind and looks for it by its first letter; the order a song happened to be written in is a fact about this repo that nobody outside it can know, so it gives them nothing to look by. The order is settled here rather than where the buttons are drawn, so that everything walking this list meets the same one - and so a song added later takes its own place instead of landing on the end.";
  arguments_assert(arguments, 0);
  let songs = [];
  let title = song_image_couplets_title();
  let hash_name = song_title_hash_name(title);
  let hymn = {
    title: title,
    hash_name: hash_name,
    show: app_music_song_image_couplets_show,
    references: song_image_couplets_references,
    versions: song_image_couplets_versions,
  };
  list_add(songs, hymn);
  let savior_title = song_god_our_savior_title();
  let savior_hash_name = song_title_hash_name(savior_title);
  let savior = {
    title: savior_title,
    hash_name: savior_hash_name,
    show: app_music_song_god_our_savior_show,
    references: song_god_our_savior_references,
    versions: song_god_our_savior_versions,
  };
  list_add(songs, savior);
  list_sort_text_property(songs, "title");
  return songs;
}
