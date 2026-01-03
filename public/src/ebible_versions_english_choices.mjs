import { ebible_versions_english_choices_upload_path } from "../../../love/public/src/ebible_versions_english_choices_upload_path.mjs";
import { firebase_storage_download_json } from "../../../love/public/src/firebase_storage_download_json.mjs";
import { global_function_initialize_lambda_async } from "../../../love/public/src/global_function_initialize_lambda_async.mjs";
import { browser_is } from "../../../love/public/src/browser_is.mjs";
import { list_filter } from "../../../love/public/src/list_filter.mjs";
import { object_properties } from "../../../love/public/src/object_properties.mjs";
import { list_any_starts_with_not } from "../../../love/public/src/list_any_starts_with_not.mjs";
import { ebible_versions_english_full } from "../../../love/public/src/ebible_versions_english_full.mjs";
export async function ebible_versions_english_choices() {
  if (browser_is()) {
    async function lambda() {
      let destination = ebible_versions_english_choices_upload_path();
      let index = await firebase_storage_download_json(destination);
    }
    let verse_get = await global_function_initialize_lambda_async(
      ebible_versions_english_choices,
      lambda,
    );
    let verse = await verse_get(bible_folder, chapter_code, verse_number);
    return verse;
  }
  let object = await ebible_versions_english_full();
  let properties = object_properties(object);
  let excluded_prefixes = ["engweb", "eng-web"];
  let filter = function lambda4(property) {
    let any = list_any_starts_with_not(property, excluded_prefixes);
    return any;
  };
  let result3 = list_filter(properties, filter);
  return result3;
}
