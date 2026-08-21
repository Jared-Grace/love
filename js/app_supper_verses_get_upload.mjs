import { arguments_assert } from "./arguments_assert.mjs";
import { app_supper_verses_parse } from "./app_supper_verses_parse.mjs";
import { app_shared_bible_built_upload } from "./app_shared_bible_built_upload.mjs";
import { app_supper } from "./app_supper.mjs";
export async function app_supper_verses_get_upload(ebible_folder) {
  "$plain ebible_folder";
  "Works out every verse the supper screen reads and puts it in storage as one file, so the screen makes one request instead of one for each chapter.";
  "RUN IT AGAIN WHENEVER THE SUPPER SCREEN NAMES A PASSAGE IT DID NOT NAME BEFORE. Nothing breaks when it is not run - the screen works the verses out for itself - so the only sign is that it got slow again.";
  arguments_assert(arguments, 1);
  async function build() {
    let verses = await app_supper_verses_parse(ebible_folder);
    let r = {
      verses: verses,
    };
    return r;
  }
  let destination = await app_shared_bible_built_upload(
    app_supper,
    ebible_folder,
    build,
  );
  return destination;
}
