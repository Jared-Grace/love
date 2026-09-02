import { arguments_assert } from "./arguments_assert.mjs";
import { app_supper_verses_parse } from "./app_supper_verses_parse.mjs";
import { app_shared_name_prefix_without_fn } from "./app_shared_name_prefix_without_fn.mjs";
import { app_supper } from "./app_supper.mjs";
import { app_shared_bible_built_upload } from "./app_shared_bible_built_upload.mjs";
export async function app_supper_verses_get_upload(ebible_folder) {
  "$plain ebible_folder";
  "Works out every verse the supper screen reads and puts it in storage as one file, so the screen makes one request instead of one for each chapter.";
  "RUN IT AGAIN WHENEVER THE SUPPER SCREEN NAMES A PASSAGE IT DID NOT NAME BEFORE. Nothing breaks when it is not run - the screen works the verses out for itself - so the only sign is that it got slow again.";
  "THE NAME THE FILE IS PUT UNDER IS COMPOSED HERE, and has to be the same word the reader next door composes, or the screen would look for a file this never wrote. Both take it off this app, which is the whole of the agreement between them.";
  arguments_assert(arguments, 1);
  async function build() {
    let verses = await app_supper_verses_parse(ebible_folder);
    let r = {
      verses: verses,
    };
    return r;
  }
  let built_name = app_shared_name_prefix_without_fn(app_supper);
  let destination = await app_shared_bible_built_upload(
    built_name,
    ebible_folder,
    build,
  );
  return destination;
}
