import { arguments_assert } from "./arguments_assert.mjs";
import { bible_usfm_version_book_verses_laid_out } from "./bible_usfm_version_book_verses_laid_out.mjs";
import { property_get } from "./property_get.mjs";
import { web_assets_bible_laid_out_path } from "./web_assets_bible_laid_out_path.mjs";
import { web_assets_folder_join } from "./web_assets_folder_join.mjs";
import { json_to } from "./json_to.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { web_assets_upload } from "./web_assets_upload.mjs";
import { properties_get } from "./properties_get.mjs";
import { list_size } from "./list_size.mjs";
export async function bible_usfm_version_book_verses_laid_out_write(
  version,
  book_code,
) {
  "$plain version";
  "$plain book_code";
  "One book of a named bible, cut into verses with the layout kept, written where a browser can fetch it and sent up in the same breath. It answers how many chapters were written and which would not come apart.";
  "Only the chapters are written, never the list of those that would not come apart: a reader that finds no chapter in the file already knows to copy plain running words, and the list is for whoever ran this.";
  arguments_assert(arguments, 2);
  let laid = await bible_usfm_version_book_verses_laid_out(version, book_code);
  let chapters = property_get(laid, "chapters");
  let uncut = property_get(laid, "uncut");
  let path = web_assets_bible_laid_out_path(version, book_code);
  let file_path = web_assets_folder_join(path);
  let json = json_to(chapters);
  await file_overwrite(file_path, json);
  await web_assets_upload(path);
  let chapter_numbers = properties_get(chapters);
  let written = list_size(chapter_numbers);
  let wrote = {
    path,
    written,
    uncut,
  };
  return wrote;
}
