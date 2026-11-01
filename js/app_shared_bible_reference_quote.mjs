import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { app_shared_bible_reference_url } from "./app_shared_bible_reference_url.mjs";
import { html_a_href_text_new_tab } from "./html_a_href_text_new_tab.mjs";
import { app_shared_language_code_reader } from "./app_shared_language_code_reader.mjs";
import { ebible_language_to_bible_folder } from "./ebible_language_to_bible_folder.mjs";
import { app_shared_bible_reference_text } from "./app_shared_bible_reference_text.mjs";
import { html_loading_suppressed } from "./html_loading_suppressed.mjs";
import { null_is } from "./null_is.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { promise_later_catch_ignore } from "./promise_later_catch_ignore.mjs";
export function app_shared_bible_reference_quote(parent, reference) {
  "$plain parent";
  "$plain reference";
  "A passage quoted in full under the line that rests on it, with its reference beneath as a link that opens the bible reader at it in a new tab.";
  "QUOTED, NOT ONLY NAMED. A reference alone asks the reader to go and look before they can weigh what is being said, and most will not - so the words are put where the claim is.";
  "THE WORDS COME IN THE READER'S OWN BIBLE, fetched after the page is drawn. The link is drawn at once, so a passage that fails to arrive, or one their version does not hold, still leaves somewhere to go - and the page around it never waits.";
  "A NEW TAB because the reader is in the middle of reading a promise, and checking its footing should not cost them their place in it.";
  arguments_assert(arguments, 2);
  let quote = html_div(parent);
  let words = html_div(quote);
  let url = app_shared_bible_reference_url(reference);
  let row = html_div(quote);
  html_a_href_text_new_tab(row, url, reference);
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
    html_text_set(words, text);
  }
  promise_later_catch_ignore(fill);
  return quote;
}
