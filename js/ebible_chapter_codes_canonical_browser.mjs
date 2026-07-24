import { ebible_chapter_codes_browser } from "./ebible_chapter_codes_browser.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
export async function ebible_chapter_codes_canonical_browser() {
  "only the english version publishes the list of which chapters exist, so the whole app reads its chapter structure from there; a translation missing a book simply has no file for that chapter";
  let english = ebible_folder_english();
  let chapter_codes = await ebible_chapter_codes_browser(english);
  return chapter_codes;
}
