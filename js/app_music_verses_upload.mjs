import { app_music_bible_default_version } from "./app_music_bible_default_version.mjs";
import { property_get } from "./property_get.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_music_verses_build } from "./app_music_verses_build.mjs";
import { app_shared_bible_built_upload } from "./app_shared_bible_built_upload.mjs";
import { app_music } from "./app_music.mjs";
export async function app_music_verses_upload() {
  "Works out the words behind every passage the songs name and puts them in storage as one compressed file, so that from then on the page makes one request instead of one for each chapter.";
  "RUN IT AGAIN WHENEVER A SONG STARTS RESTING ON A PASSAGE IT DID NOT NAME BEFORE, and whenever a song is added. Nothing breaks when it is not run - the page works the missing ones out for itself - so the only sign is that the page got slow again.";
  "RUN IT AGAIN ALSO WHENEVER A PASSAGE CHANGES WHICH TRANSLATION IT IS QUOTED FROM. The built file holds the words and not where they came from, so a passage newly pointed at another bible reads back out of the old file looking exactly as it always did - right shape, right reference, and the wording nobody chose.";
  arguments_assert(arguments, 0);
  let version = app_music_bible_default_version();
  let bible_folder = property_get(version, "bible_folder");
  let destination = await app_shared_bible_built_upload(
    app_music,
    bible_folder,
    app_music_verses_build,
  );
  return destination;
}
