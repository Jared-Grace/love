import { fn_name } from "./fn_name.mjs";
import { html_hash_get } from "./html_hash_get.mjs";
import { hash_text_object } from "./hash_text_object.mjs";
export function html_hash_object_get() {
  "The address of the page read apart into the words it names and what it says for each.";
  ("How the text is read apart lives in ",
    fn_name("hash_text_object"),
    ", so a caller holding an address rather than the page reads it the same way.");
  let hash_url = html_hash_get();
  let hash = hash_text_object(hash_url);
  return hash;
}
