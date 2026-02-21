import { text_is_assert } from "../../../love/public/src/text_is_assert.mjs";
import { list_last } from "../../../love/public/src/list_last.mjs";
import { list_size_assert_message } from "../../../love/public/src/list_size_assert_message.mjs";
import { list_filter_property } from "../../../love/public/src/list_filter_property.mjs";
import { html_parse_find_a_href_text } from "../../../love/public/src/html_parse_find_a_href_text.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { html_parse_find_a_href_starts_with_without_unique } from "../../../love/public/src/html_parse_find_a_href_starts_with_without_unique.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { ebible_url } from "../../../love/public/src/ebible_url.mjs";
import { http_local_html_parse } from "../../../love/public/src/http_local_html_parse.mjs";
import { ebible_url_details } from "../../../love/public/src/ebible_url_details.mjs";
export async function ebible_languages_add_item_info(bible_folder) {
  text_is_assert(bible_folder);
  let prefix = ebible_url_details();
  let r = await http_local_html_parse(ebible_url() + prefix + bible_folder);
  let root = property_get(r, "root");
  let d = property_get(r, "d");
  const url_language_prefix = "http://www.ethnologue.com/language/";
  let unique = html_parse_find_a_href_starts_with_without_unique(
    root,
    d,
    url_language_prefix,
  );
  let language_code = list_single(unique);
  let url_language = url_language_prefix + language_code + "";
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
