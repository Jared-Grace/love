import { arguments_assert } from "./arguments_assert.mjs";
import { app_music_songs } from "./app_music_songs.mjs";
import { app_music_song_verses_upload } from "./app_music_song_verses_upload.mjs";
import { list_add } from "./list_add.mjs";
export async function app_music_verses_upload() {
  "Puts the scripture behind every song on this page into storage, one file per song, and hands back where each of them went.";
  "IT IS THE ONE TO RUN BY HAND, because a person filling these in wants the page filled in and not one song of it, and a song whose file was forgotten is invisible - it works, and it works slowly.";
  "EACH SONG IS A FILE OF ITS OWN because a song says for itself which bible each of its passages is quoted from, and two songs here sing sixteen of the same passages. One file for the page could carry only one answer at each of those sixteen, so the song built second handed its wording to the song built first.";
  "THEY GO UP ONE AFTER ANOTHER RATHER THAN TOGETHER. Each one is already some sixty chapters coming down several at a time, so running two of them at once asks the same shelf for twice as much and finishes no sooner; and this is run by a person watching it, for whom a failure that names the song it was on is worth more than a minute.";
  "RUN IT AGAIN WHENEVER A SONG IS ADDED, whenever a song starts resting on a passage it did not name before, and whenever a passage changes which translation it is quoted from. Nothing breaks when it is not run - the page works the missing passages out for itself - so the only sign is that the page got slow again.";
  arguments_assert(arguments, 0);
  let songs = app_music_songs();
  let destinations = [];
  for (let song of songs) {
    let destination = await app_music_song_verses_upload(song);
    list_add(destinations, destination);
  }
  return destinations;
}
