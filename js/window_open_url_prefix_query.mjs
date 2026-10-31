import { text_url_encode } from "./text_url_encode.mjs";
import { text_combine } from "./text_combine.mjs";
import { window_open } from "./window_open.mjs";
export function window_open_url_prefix_query(prefix, query) {
  "Open a new tab at an address that ends in a question, with the question spelled so a space, a quotation mark or a letter outside the plain alphabet reaches the far end as itself.";
  "$plain prefix";
  "$plain query";
  "the prefix is the start of a web address and the query is words; both are joined into an address that is opened, and neither runs.";
  let encoded = text_url_encode(query);
  let url = text_combine(prefix, encoded);
  window_open(url);
}
