import { uplifting_package_get } from "./uplifting_package_get.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { app_shared_bible_reference_text } from "./app_shared_bible_reference_text.mjs";
export async function app_reply_verses_uplifting_text(bible_folder, reference) {
  "the words one version has for one uplifting reference or null when that version does not hold it";
  let package_map = await uplifting_package_get(bible_folder);
  if (null_not_is(package_map)) {
    ("the offline package answers for the whole version so a reference it does not hold is not there to be read and nothing is fetched");
    let words = property_get_or_null(package_map, reference);
    return words;
  }
  let text = await app_shared_bible_reference_text(bible_folder, reference);
  return text;
}
