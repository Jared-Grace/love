import { ebible_copyright_links_language } from "./ebible_copyright_links_language.mjs";
import { ebible_version_copyright_page_read } from "./ebible_version_copyright_page_read.mjs";
import { html_parse_find_a_href_text } from "./html_parse_find_a_href_text.mjs";
import { null_is } from "./null_is.mjs";
import { object_merge } from "./object_merge.mjs";
import { property_get } from "./property_get.mjs";
export async function ebible_version_copyright_read(bible_folder) {
  "$plain bible_folder";
  "Everything a downloaded translation's licence page says about itself - the terms it is offered on, the language it is in, and what it calls itself in that language.";
  "Opening the page and reading its terms and its own name off it is done next door, because the credit reader alongside starts from exactly the same three. What is this one's own is the language, which is read off the links the page carries.";
  "A translation that has not been downloaded is answered with nothing rather than refused, so a sweep over every name eBible lists runs to the end on a partial download.";
  let page = await ebible_version_copyright_page_read(bible_folder);
  let missing = null_is(page);
  if (missing) {
    return null;
  }
  let licence = property_get(page, "licence");
  let root = property_get(page, "root");
  let d = property_get(page, "d");
  let name = property_get(page, "name");
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
