import { door43_version_or_null } from "./door43_version_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { language_code_key } from "./language_code_key.mjs";
import { not } from "./not.mjs";
import { list_last_property } from "./list_last_property.mjs";
import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { text_is_assert_json } from "./text_is_assert_json.mjs";
import { list_size_assert_message } from "./list_size_assert_message.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { html_parse_find_a_href_text } from "./html_parse_find_a_href_text.mjs";
import { list_single } from "./list_single.mjs";
import { html_parse_find_a_href_starts_with_without_unique } from "./html_parse_find_a_href_starts_with_without_unique.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_url } from "./ebible_url.mjs";
import { http_local_html_parse } from "./http_local_html_parse.mjs";
import { ebible_url_details } from "./ebible_url_details.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function ebible_languages_add_item_info(bible_folder) {
  text_combine("gets language information for ", bible_folder);
  text_is_assert_json(bible_folder, {
    hint: "the bible folder should be text so its language info can be fetched — did an empty or non-text value arrive?",
    bible_folder,
  });
  ("The other catalogue is asked first, because a bible carried from it has no page on eBible at all - fetching one would reach a page about some other translation or none, and either way the language written down would not be this bible's. Its entry already spells the language, so nothing has to be fetched for those.");
  let carried = door43_version_or_null(bible_folder);
  let unknown = null_is(carried);
  if (not(unknown)) {
    let code_key = language_code_key();
    let language_code_carried = property_get(carried, code_key);
    let name_carried = property_get(carried, "language_name");
    let told = {
      name: name_carried,
      language_code: language_code_carried,
    };
    return told;
  }
  let prefix = ebible_url_details();
  let project_url = firebase_storage_url_project_jg();
  let r2 = ebible_url();
  let url = text_combine_multiple([r2, prefix, bible_folder]);
  let r = await http_local_html_parse(url, project_url);
  let root = property_get(r, "root");
  let d = property_get(r, "d");
  let url_language_prefix = "http://www.ethnologue.com/language/";
  let unique = html_parse_find_a_href_starts_with_without_unique(
    root,
    d,
    url_language_prefix,
  );
  let language_code = list_single(unique);
  let url_language = text_combine_multiple([
    url_language_prefix,
    language_code,
  ]);
  let mapped = html_parse_find_a_href_text(root, d);
  let filtered = list_filter_property(mapped, "href", url_language);
  list_size_assert_message(
    filtered,
    3,
    "Should be 3 of these, if not then investigate?",
  );
  let name = list_last_property(filtered, "text");
  let r3 = {
    name,
    language_code,
  };
  return r3;
}
