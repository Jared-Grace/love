import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_reference_url } from "./app_shared_bible_reference_url.mjs";
import { html_div } from "./html_div.mjs";
import { app_shared_spaced_small_gap } from "./app_shared_spaced_small_gap.mjs";
import { html_style_margin_y } from "./html_style_margin_y.mjs";
import { html_a_href_text_new_tab } from "./html_a_href_text_new_tab.mjs";
import { html_bold } from "./html_bold.mjs";
import { app_shared_language_code_reader } from "./app_shared_language_code_reader.mjs";
import { ebible_language_to_bible_folder } from "./ebible_language_to_bible_folder.mjs";
import { app_shared_bible_reference_text } from "./app_shared_bible_reference_text.mjs";
import { html_loading_suppressed } from "./html_loading_suppressed.mjs";
import { null_is } from "./null_is.mjs";
import { app_shared_bible_verse_line } from "./app_shared_bible_verse_line.mjs";
import { promise_later_catch_ignore } from "./promise_later_catch_ignore.mjs";
export function app_shared_bible_reference_quote(parent, reference) {
  "$plain parent";
  "$plain reference";
  "A passage shown the way a verse is shown: its reference first, as a link opening the bible reader at that passage in a new tab, then its words in full.";
  "A WORD PRESSED OPENS THE WORD'S CARD, exactly as it does while reading, because the words are drawn by the same line the reader draws a verse with. Only the reference opens the passage. Making the whole block one link was tried first and given up: a reader pressing a word wants that word, and taking them away to the chapter instead lost the one thing they reached for.";
  "QUOTED, NOT ONLY NAMED. A reference alone asks the reader to go and look before they can weigh what is being said, and most will not - so the words are put where the claim is.";
  "THE WORDS COME IN THE READER'S OWN BIBLE, fetched after the page is drawn. The link is drawn at once, so a passage that fails to arrive, or one their version does not hold, still leaves somewhere to go - and the page around it never waits.";
  "A NEW TAB because the reader is in the middle of reading a promise, and checking its footing should not cost them their place in it.";
  "THE WORDS ARE BOLD AND THE REFERENCE IS NOT: scripture is what carries the weight beside the prose around it, and the reference is only the way to it.";
  arguments_assert(arguments, 2);
  let url = app_shared_bible_reference_url(reference);
  let quote = html_div(parent);
  let value = app_shared_spaced_small_gap();
  html_style_margin_y(quote, value);
  let row = html_div(quote);
  html_a_href_text_new_tab(row, url, reference);
  let words = html_div(quote);
  html_bold(words);
  let language_code = app_shared_language_code_reader();
  let bible_folder = ebible_language_to_bible_folder(language_code);
  async function fill() {
    async function fetch_one() {
      let fetched = await app_shared_bible_reference_text(
        bible_folder,
        reference,
      );
      return fetched;
    }
    let text = await html_loading_suppressed(fetch_one);
    if (null_is(text)) {
      return;
    }
    app_shared_bible_verse_line(words, "", text, null, null, null);
  }
  promise_later_catch_ignore(fill);
  return quote;
}
