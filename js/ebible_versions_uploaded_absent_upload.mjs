import { catch_error_text_collect_async } from "./catch_error_text_collect_async.mjs";
import { each_async } from "./each_async.mjs";
import { ebible_chapters_upload } from "./ebible_chapters_upload.mjs";
import { ebible_versions_uploaded_absent } from "./ebible_versions_uploaded_absent.mjs";
import { error_json } from "./error_json.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { list_size } from "./list_size.mjs";
export async function ebible_versions_uploaded_absent_upload() {
  "Sends the chapters of every bible a reader can choose that storage holds nothing for, and afterwards asks again which ones it still holds nothing for.";
  "It finds its own set, which is what keeps it cheap enough to run at all. Sending every offered bible sends more than a million chapters to say what a few thousand of them needed saying, and the ones already up there are the overwhelming majority; asking first costs one small question per bible and takes the work down to the bibles that are actually missing.";
  "Asking again at the end is the proof rather than a courtesy. Sending is the one step here whose success cannot be read off this machine at all - the chapters were on this disk before it ran and are still on it after, so the only way to know a bible arrived is to ask the place it was sent to.";
  "One bible is allowed to fail without taking the rest with it, and what it said is kept in its own words until the end. That lesson was paid for three times over by sweeps killed hours in by a single translation with a shape none of the others had, and it costs nothing to keep here.";
  let before = await ebible_versions_uploaded_absent();
  let failed = [];
  async function lambda(bible_folder) {
    await catch_error_text_collect_async(
      failed,
      {
        bible_folder,
      },
      lambda2,
    );
    async function lambda2() {
      await ebible_chapters_upload(bible_folder);
    }
  }
  await each_async(before, lambda);
  let after = await ebible_versions_uploaded_absent();
  let any = list_empty_not_is(failed);
  if (any) {
    error_json({
      failed,
      before: list_size(before),
      still_absent: after,
    });
  }
  let r = {
    before: list_size(before),
    after: list_size(after),
    still_absent: after,
  };
  return r;
}
