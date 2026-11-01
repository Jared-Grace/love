import { arguments_assert } from "./arguments_assert.mjs";
import { window_open } from "./window_open.mjs";
import { app_shared_biblehub_word_text_get } from "./app_shared_biblehub_word_text_get.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
export function app_shared_biblehub_word_button(parent, strong_url) {
  arguments_assert(arguments, 2);
  ("$plain strong_url");
  ("the address is BibleHub's page for one word's Strong's number. It is opened and nothing here runs it.");
  ("The button on a tapped word's card that opens the word on BibleHub, in a new tab so the verse is still there to come back to.");
  ("ONE BUTTON FOR EVERY CARD THAT SHOWS AN ORIGINAL WORD, asked for by the human: the picture Bible's card and the bible reader's card both draw this, so the words and the way it opens cannot drift apart between apps.");
  function open() {
    window_open(strong_url);
  }
  let label = app_shared_biblehub_word_text_get();
  let button = app_shared_button(parent, label, open);
  return button;
}
