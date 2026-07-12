import { firebase_storage_url_project_jg } from "./firebase_storage_url_project_jg.mjs";
import { text_is_assert } from "./text_is_assert.mjs";
import { list_last } from "./list_last.mjs";
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
  text_is_assert(bible_folder);
  let prefix = ebible_url_details();
  let project_url = firebase_storage_url_project_jg();
  let r = await http_local_html_parse(
    text_combine_multiple([ebible_url(), prefix, bible_folder]),
    project_url,
  );
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
  let i = list_last(filtered);
  let name = property_get(i, "text");
  let r3 = {
    name,
    language_code,
  };
  return r3;
}
