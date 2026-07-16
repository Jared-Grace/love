import { ebible_references_parse_lines_browser } from "./ebible_references_parse_lines_browser.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_first } from "./list_first.mjs";
import { property_get } from "./property_get.mjs";
export async function app_shared_bible_ref_chapter_code(ref_line) {
  let ref_verses_en = await ebible_references_parse_lines_browser(
    [ebible_folder_english()],
    [ref_line],
  );
  if (list_empty_is(ref_verses_en)) {
    return null;
  }
  return property_get(list_first(ref_verses_en), "chapter_code");
}
