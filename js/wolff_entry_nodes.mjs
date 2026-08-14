import { html_parse_find_list_to } from "./html_parse_find_list_to.mjs";
import { property_get } from "./property_get.mjs";
import { wolff_dictionary_parsed } from "./wolff_dictionary_parsed.mjs";
import { wolff_entry_selector } from "./wolff_entry_selector.mjs";
export async function wolff_entry_nodes() {
  "Every entry in Wolff's dictionary, still as pieces of the page, in the order the book prints them.";
  "The pieces come back unread because what a caller wants out of an entry differs - a headword, the forms built on it, the codes for how it conjugates - and each of those is a further question to ask of the piece, while a reading already taken cannot be asked anything.";
  let parsed = await wolff_dictionary_parsed();
  let root = property_get(parsed, "root");
  let selector = wolff_entry_selector();
  let r = html_parse_find_list_to(root, selector);
  return r;
}
