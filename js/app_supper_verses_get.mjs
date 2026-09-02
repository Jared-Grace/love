import { arguments_assert } from "./arguments_assert.mjs";
import { app_supper_verses_parse } from "./app_supper_verses_parse.mjs";
import { app_shared_name_prefix_without_fn } from "./app_shared_name_prefix_without_fn.mjs";
import { app_supper } from "./app_supper.mjs";
import { app_shared_bible_built_get } from "./app_shared_bible_built_get.mjs";
import { property_get } from "./property_get.mjs";
export async function app_supper_verses_get(ebible_folder) {
  "$plain ebible_folder";
  "Every verse the supper screen reads, in one piece.";
  "THE WHOLE OF IT IS THE SHARED THING NEXT DOOR NOW - where the built copy lives, fetching it, remembering it, and working the verses out when there is no copy, are all one question that any app naming a fixed set of passages asks. What is left here is the two things only this app knows: how to work its own verses out, and that they travel under one word.";
  "THE NAME THE COPY IS FILED UNDER IS COMPOSED HERE RATHER THAN NEXT DOOR. The shared reader used to be handed this app and take its name off it, which said that an app keeps one such file; the music page keeps one per song. This screen keeps one, so the name it composes is simply its own.";
  "They travel wrapped rather than bare because the file already sitting in storage is wrapped, and a reader that stopped understanding the file it is reading would be a slow page nobody could see the cause of.";
  arguments_assert(arguments, 1);
  async function build() {
    let verses_inner = await app_supper_verses_parse(ebible_folder);
    let r = {
      verses: verses_inner,
    };
    return r;
  }
  let built_name = app_shared_name_prefix_without_fn(app_supper);
  let value = await app_shared_bible_built_get(
    built_name,
    ebible_folder,
    build,
  );
  let verses = property_get(value, "verses");
  return verses;
}
