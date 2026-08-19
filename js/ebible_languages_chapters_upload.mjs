import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { error_json } from "./error_json.mjs";
import { catch_error_text_or_null_async } from "./catch_error_text_or_null_async.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_add } from "./list_add.mjs";
import { ebible_chapters_upload } from "./ebible_chapters_upload.mjs";
import { ebible_languages_without_original_bible_folders_each } from "./ebible_languages_without_original_bible_folders_each.mjs";
export async function ebible_languages_chapters_upload() {
  "Uploads the chapters of every language that has no original-language text of its own, one bible folder after another.";
  "One bible that cannot be read no longer stops the rest. Three runs of this were each killed hours in by a single translation with a shape none of the others had - a chunk mark that meant something else, a reading aloud that skipped a hundred and seventeen psalms, a book index linking a page that was never shipped - and each time the seventy or so translations waiting behind it paid for that one.";
  "So each translation is allowed to fail on its own, what went wrong is kept in its own words, and the whole list is raised at the end. Nothing is swallowed; it is only held until saying it costs nothing.";
  let failed = [];
  await ebible_languages_without_original_bible_folders_each(lambda);
  let any = list_empty_not_is(failed);
  if (any) {
    error_json({
      failed,
    });
  }
  async function lambda(bible_folder) {
    let said = await catch_error_text_or_null_async(lambda2);
    let broke = null_not_is(said);
    if (broke) {
      list_add(failed, {
        bible_folder,
        said,
      });
    }
    async function lambda2() {
      await ebible_chapters_upload(bible_folder);
    }
  }
}
