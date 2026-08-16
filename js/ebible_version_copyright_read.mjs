import { ebible_copyright_links_language } from "./ebible_copyright_links_language.mjs";
import { ebible_text_licence } from "./ebible_text_licence.mjs";
import { ebible_version_copyright_path } from "./ebible_version_copyright_path.mjs";
import { file_read_try } from "./file_read_try.mjs";
import { html_parse } from "./html_parse.mjs";
import { html_parse_find_a_href_text } from "./html_parse_find_a_href_text.mjs";
import { html_parse_find_text } from "./html_parse_find_text.mjs";
import { null_is } from "./null_is.mjs";
import { object_merge } from "./object_merge.mjs";
import { property_get } from "./property_get.mjs";
export async function ebible_version_copyright_read(bible_folder) {
  "$plain bible_folder";
  "Everything a downloaded translation's licence page says about itself - the terms it is offered on, the language it is in, and what it calls itself in that language.";
  "One read of the page answers all three, because the page is opened once and asked three questions rather than opened three times. Fifteen hundred translations are on disk and each extra opening is fifteen hundred more.";
  "A translation that has not been downloaded is answered with nothing rather than refused, so a sweep over every name eBible lists runs to the end on a partial download.";
  let f_path = ebible_version_copyright_path(bible_folder);
  let contents = await file_read_try(f_path);
  let missing = null_is(contents);
  if (missing) {
    return null;
  }
  let licence = ebible_text_licence(contents);
  let parsed = await html_parse(contents);
  let root = property_get(parsed, "root");
  let d = property_get(parsed, "d");
  let name = html_parse_find_text(root, d, "h1");
  let links = html_parse_find_a_href_text(root, d);
  let placed = ebible_copyright_links_language(links);
  let read = {
    bible_folder,
    name,
    licence,
  };
  object_merge(read, placed);
  return read;
}
