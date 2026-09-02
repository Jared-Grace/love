import { arguments_assert } from "./arguments_assert.mjs";
import { app_music_song_verses_built_generic } from "./app_music_song_verses_built_generic.mjs";
import { app_shared_bible_built_get } from "./app_shared_bible_built_get.mjs";
export async function app_music_song_verses_get(song) {
  "$plain song";
  "The words behind every passage one song rests on, in one piece: the copy built ahead of time when there is one, and the working out itself when there is not.";
  "ONE REQUEST INSTEAD OF SIXTY. Where the copy lives, fetching it, remembering it for the life of the page, and falling back to the working out are all next door and shared, because every app that names a fixed set of passages wants exactly this. What is here is only which song is asking and which bible it is filed under.";
  "A READER WHO OPENS A SECOND SONG PAYS FOR IT AGAIN, and that is the price of each song getting the wording it was written against. A single file for the page was one download for both songs, and it could hold only one answer for the sixteen passages they both sing.";
  "THE BIBLE NAMED HERE IS ONLY WHERE THE COPY IS FILED, NOT WHAT IS IN IT. Most of what is in it is that bible, and some passages are quoted from another - the file is one mixture rather than one translation. Filing it under the usual one is still right, because what the name has to do is tell two mixtures apart, and changing the usual bible changes every passage that did not ask for something else.";
  "WORKING OUT WHAT TO ASK FOR IS SHARED WITH THE COMMAND THAT PUTS THE COPY IN STORAGE, and this says nothing but which of the two doors it wants. The two opened with the same five lines, and the second copy of those is the one nobody would have updated.";
  arguments_assert(arguments, 1);
  let value = await app_music_song_verses_built_generic(
    song,
    app_shared_bible_built_get,
  );
  return value;
}
