import { app_shared_bible_licences_text } from "./app_shared_bible_licences_text.mjs";
import { app_shared_bible_money_text } from "./app_shared_bible_money_text.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
export function app_shared_bible_about_render(
  container,
  open_licences,
  open_money,
) {
  "the single source for what the about menu offers and in what order; each reader supplies only how to open each entry - a screen for the verse reader, an in-place panel for the chapter reader";
  "reaching a person is not in here. that button is added under every screen this app draws, so putting it in a menu would only make it harder to find than it already is.";
  "the credits come first, because they are owed to somebody. what happens with money is a promise about us and can wait one line.";
  let licences_text = app_shared_bible_licences_text();
  app_shared_button(container, licences_text, open_licences);
  let money_text = app_shared_bible_money_text();
  app_shared_button(container, money_text, open_money);
}
