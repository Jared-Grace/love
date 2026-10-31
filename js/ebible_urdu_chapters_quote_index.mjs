import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_version_chapters_cache } from "./ebible_version_chapters_cache.mjs";
import { ebible_folder_urdu } from "./ebible_folder_urdu.mjs";
import { text_digits_urdu } from "./text_digits_urdu.mjs";
import { text_urdu_quote_bare } from "./text_urdu_quote_bare.mjs";
export async function ebible_urdu_chapters_quote_index() {
  "Every chapter of the Urdu Bible the app shows, its whole text bared the way a quote is bared, keyed by the book code and the chapter number written in Urdu digits.";
  "The number is turned into Urdu digits rather than the quote's digits being read back, because that is the direction one table covers. A sentence citing a chapter writes ۲۱, so the key is spelled the same way and the lookup needs nothing undone.";
  arguments_assert(arguments, 0);
  let bible_folder = ebible_folder_urdu();
  let chapters = await ebible_version_chapters_cache(bible_folder);
  let r = {};
  for (let chapter of chapters) {
    let code = chapter.chapter_code;
    let book = code.slice(0, 3);
    let v2 = code.slice(3);
    let v3 = Number(v2);
    let number = String(v3);
    function lambda(v) {
      let r2 = v.text;
      return r2;
    }
    let text = chapter.verses.map(lambda).join(" ");
    r[book + " " + text_digits_urdu(number)] = text_urdu_quote_bare(text);
  }
  return r;
}
