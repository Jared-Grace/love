import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { app_music_verses_build } from "./app_music_verses_build.mjs";
import { app_shared_bible_built_upload } from "./app_shared_bible_built_upload.mjs";
import { app_music } from "./app_music.mjs";
export async function app_music_verses_upload() {
  "Works out the words behind every passage the songs name and puts them in storage as one compressed file, so that from then on the page makes one request instead of one for each chapter.";
  "RUN IT AGAIN WHENEVER A SONG STARTS RESTING ON A PASSAGE IT DID NOT NAME BEFORE, and whenever a song is added. Nothing breaks when it is not run - the page works the missing ones out for itself - so the only sign is that the page got slow again.";
  arguments_assert(arguments, 0);
  let bible_folder = ebible_folder_english();
  async function build() {
    let texts = await app_music_verses_build(bible_folder);
    return texts;
  }
  let destination = await app_shared_bible_built_upload(
    app_music,
    bible_folder,
    build,
  );
  return destination;
}
