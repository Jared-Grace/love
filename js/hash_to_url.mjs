import { html_hash_symbol } from "./html_hash_symbol.mjs";
import { hash_pairs_text } from "./hash_pairs_text.mjs";
import { text_combine } from "./text_combine.mjs";
export function hash_to_url(hash) {
  "A set of named values written as the hash end of an address - the mark, then the pairs.";
  "The pairs are built next door and only the mark is added here, so a caller holding a bare screen name rather than a set of values has the same job with one step fewer instead of a different function to find.";
  let result = hash_pairs_text(hash);
  let h = html_hash_symbol();
  let url = text_combine(h, result);
  return url;
}
