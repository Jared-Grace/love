import { catch_error_text_collect_async } from "./catch_error_text_collect_async.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { error_json } from "./error_json.mjs";
import { ebible_chapters_upload } from "./ebible_chapters_upload.mjs";
import { ebible_languages_without_original_bible_folders_each } from "./ebible_languages_without_original_bible_folders_each.mjs";
export async function ebible_languages_chapters_upload() {
  "Uploads the chapters of every language that has no original-language text of its own, one bible folder after another.";
  "One bible that cannot be read no longer stops the rest. Three runs of this were each killed hours in by a single translation with a shape none of the others had - a chunk mark that meant something else, a reading aloud that skipped a hundred and seventeen psalms, a book index linking a page that was never shipped - and each time the seventy or so translations waiting behind it paid for that one.";
  "So each translation is allowed to fail on its own, what went wrong is kept in its own words, and the whole list is raised at the end. Nothing is swallowed; it is only held until saying it costs nothing.";
  "The collecting itself is said as the general thing next door, because the reading that works out what chapters every language holds has to survive one odd translation for exactly the same reason and was about to write these lines again.";
  let failed = [];
  await ebible_languages_without_original_bible_folders_each(lambda);
  let any = list_empty_not_is(failed);
  if (any) {
    error_json({
      failed,
    });
  }
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
}
