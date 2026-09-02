import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_built_destination } from "./app_shared_bible_built_destination.mjs";
import { firebase_upload_object_compressed } from "./firebase_upload_object_compressed.mjs";
export async function app_shared_bible_built_upload(
  built_name,
  bible_folder,
  build,
) {
  "$plain built_name";
  "$plain bible_folder";
  "Works out the scripture something needs and puts it in storage as one compressed file under the name it is filed by, so that from then on the page makes one request instead of one per chapter.";
  "IT MUST BE RUN AGAIN WHENEVER THE ASKER NAMES A PASSAGE IT DID NOT NAME BEFORE. Nothing goes wrong when it is not - the page falls back to working the passages out for itself, which is what it did before this existed - so the only sign is that the page got slow again. That is the price of the file being an optimisation rather than the source of truth, and it is the right way round.";
  "THE NAME IS HANDED IN RATHER THAN TAKEN OFF AN APP, so that one app may keep several of these files. The music page keeps one per song, because two songs quoting the same verse from different bibles cannot share a file keyed by the verse.";
  arguments_assert(arguments, 3);
  let value = await build();
  let destination = app_shared_bible_built_destination(
    built_name,
    bible_folder,
  );
  await firebase_upload_object_compressed(destination, value);
  return destination;
}
