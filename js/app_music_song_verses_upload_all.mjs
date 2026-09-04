import { arguments_assert } from "./arguments_assert.mjs";
import { app_music_songs } from "./app_music_songs.mjs";
import { app_music_song_verses_upload } from "./app_music_song_verses_upload.mjs";
import { list_add } from "./list_add.mjs";
export async function app_music_song_verses_upload_all() {
  "Works out the words behind every passage every song on the music page rests on, and puts each song's in storage as its own file, so that from then on each song's page makes one request instead of one for each chapter.";
  "IT FINDS ITS OWN SONGS. The door beside it takes one song and had to be run once per song by hand, which is two runs today and more later, and a run done by hand is a run that can be forgotten - so a song added to the page would keep working out its words one chapter at a time and nothing would say so. Asking the page for its own list means the set can never drift from what is actually there.";
  "IT IS THE ONE TO REACH FOR AFTER CHANGING WHICH TRANSLATION A PASSAGE IS QUOTED FROM, and that is the case the door beside it warns about and cannot see. A built file holds the words and not where they came from, so a passage newly pointed at another bible reads back out of the old file looking exactly as it always did - right shape, right reference, and the wording nobody chose. Rebuilding every song is the cheap way to be sure, because the change that needs it leaves no mark to look for.";
  "EACH SONG IS DONE IN TURN RATHER THAN ALL AT ONCE. Every one of them reads whole chapters out of several bibles before it writes anything, so running them together would ask for all of it at the same moment for no gain worth having - the page is not waiting on this, and a person running it is.";
  arguments_assert(arguments, 0);
  let songs = app_music_songs();
  let destinations = [];
  for (let song of songs) {
    let destination = await app_music_song_verses_upload(song);
    list_add(destinations, destination);
  }
  return destinations;
}
