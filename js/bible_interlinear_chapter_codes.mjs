import { property_list_map_property } from "./property_list_map_property.mjs";
import { firebase_storage_download_ebible } from "./firebase_storage_download_ebible.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { ebible_chapter_codes_upload_name } from "./ebible_chapter_codes_upload_name.mjs";
import { bible_interlinear_verses_cache } from "./bible_interlinear_verses_cache.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_filter } from "./list_filter.mjs";
export async function bible_interlinear_chapter_codes() {
  "the original's chapters in canonical order: english's published chapter list kept only where the interlinear actually has that chapter, so next/prev never lands on a chapter with no text";
  let english = ebible_folder_english();
  let name = ebible_chapter_codes_upload_name();
  let english_codes = await firebase_storage_download_ebible(english, name);
  let cache = await bible_interlinear_verses_cache();
  let present = property_list_map_property(cache, "chapters", "chapter_code");
  function keep(code) {
    let includes = list_includes(present, code);
    return includes;
  }
  let codes = list_filter(english_codes, keep);
  return codes;
}
