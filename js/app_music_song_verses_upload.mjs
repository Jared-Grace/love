import { arguments_assert } from "./arguments_assert.mjs";
import { app_music_song_verses_built_generic } from "./app_music_song_verses_built_generic.mjs";
import { app_shared_bible_built_upload } from "./app_shared_bible_built_upload.mjs";
export async function app_music_song_verses_upload(song) {
  "$plain song";
  "Works out the words behind every passage one song rests on and puts them in storage as one compressed file, so that from then on that song's page makes one request instead of one for each chapter.";
  "THE NAME IT IS FILED UNDER IS COMPOSED NEXT DOOR AND THE READER COMPOSES IT THE SAME WAY, which is the whole of the agreement between them. Both take it off the song, so a song renamed in an address moves its file and its reader together.";
  "RUN IT AGAIN WHENEVER THIS SONG STARTS RESTING ON A PASSAGE IT DID NOT NAME BEFORE, and whenever a passage of its changes which translation it is quoted from. The built file holds the words and not where they came from, so a passage newly pointed at another bible reads back out of the old file looking exactly as it always did - right shape, right reference, and the wording nobody chose.";
  "Nothing breaks when it is not run - the page works the missing ones out for itself - so the only sign of the first of those is that the page got slow again, and there is no sign at all of the second.";
  "THE AGREEMENT WITH THE READER IS NOW ONE PIECE OF CODE RATHER THAN TWO THAT MATCH. Both used to work out the filed name, the bible beneath it and the way of building for themselves, in the same five lines; either one edited alone would have quietly filed the copy where the other was not looking.";
  arguments_assert(arguments, 1);
  let destination = await app_music_song_verses_built_generic(
    song,
    app_shared_bible_built_upload,
  );
  return destination;
}
