import { list_size_assert_message } from "../../../love/public/src/list_size_assert_message.mjs";
import { list_filter_property } from "../../../love/public/src/list_filter_property.mjs";
import { list_single } from "../../../love/public/src/list_single.mjs";
import { html_parse_find_a_href_text } from "../../../love/public/src/html_parse_find_a_href_text.mjs";
import { html_parse_find_a_href_starts_with_without_unique } from "../../../love/public/src/html_parse_find_a_href_starts_with_without_unique.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { ebible_url } from "../../../love/public/src/ebible_url.mjs";
import { ebible_url_details } from "../../../love/public/src/ebible_url_details.mjs";
import { http_local_html_parse } from "../../../love/public/src/http_local_html_parse.mjs";
import { openai_responses_cache } from "../../../love/public/src/openai_responses_cache.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { js_object_to_expression } from "../../../love/public/src/js_object_to_expression.mjs";
import { sandbox } from "../../../love/public/src/sandbox.mjs";
import { js_array_expression_single_elements } from "../../../love/public/src/js_array_expression_single_elements.mjs";
import { ebible_languages } from "../../../love/public/src/ebible_languages.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
import { list_last } from "./list_last.mjs";
export async function ebible_languages_add_item(bible_folder) {
  let f_name = ebible_languages.name;
  f_name = sandbox.name;
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
  return name;
  let r2 = await openai_responses_cache(
    "",
    "What is the language code of the following language? Answer just the two or three characters of the code. ",
  );
  async function lambda(ast) {
    let elements = js_array_expression_single_elements(ast);
    const object = {
      name,
      bible_folder,
      language_code,
    };
    let expression = js_object_to_expression(object);
    list_add(elements, expression);
  }
  let output = await function_transform(f_name, lambda);
}
