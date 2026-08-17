import { ebible_url } from "./ebible_url.mjs";
import { text_combine } from "./text_combine.mjs";
export function ebible_version_page_url(bible_folder) {
  "$plain bible_folder";
  "Where a translation lives on eBible - the page a reader is sent to when the credit says where the text came from.";
  "Built from the translation's own name rather than read off anything, because every translation eBible carries sits at its own name under the one address. A page saying so would be a second thing to fetch that could only repeat what the address already says.";
  let v = text_combine(ebible_url(), bible_folder);
  return v;
}
