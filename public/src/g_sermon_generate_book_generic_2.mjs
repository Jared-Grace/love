import { bible_interlinear_chapters } from "../../../love/public/src/bible_interlinear_chapters.mjs";
import { ebible_chapters_codes_or_specified } from "../../../love/public/src/ebible_chapters_codes_or_specified.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
export async function g_sermon_generate_book_generic_2(
  bible_folders,
  book_code,
  fn,
  prompt_user_middle,
  prompt_system,
  property_name,
  chapter_code_specified,
) {
  let bible_folder_first = list_first(bible_folders);
  let chapters_codes = await ebible_chapters_codes_or_specified(
    bible_folder_first,
    book_code,
    chapter_code_specified,
  );
  let verses_book_folders = await g_sermon_generate_book_generic_verses(
    chapters_codes,
    bible_folders,
  );
  let chapters_interlinear = await bible_interlinear_chapters();
}
