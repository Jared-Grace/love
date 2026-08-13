import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_centered } from "./html_centered.mjs";
import { clipboard_copy_try } from "./clipboard_copy_try.mjs";
import { app_shared_button_copy } from "./app_shared_button_copy.mjs";
export function app_next_copy_button(parent, reading_text) {
  "The way to take the reading with you when the page could not hand it to you itself.";
  "$plain reading_text";
  "This page copies the reading as it opens, which is the one moment a browser is allowed to refuse - nothing was pressed, so on a phone the copying often simply does not happen. It fails quietly on purpose, because a reader who came to read a verse should not be stopped by a clipboard. But quietly means they find out by pasting nothing into a message, which is late.";
  "So the same copying is offered again as something to press. Under a thumb no browser refuses it, and it copies exactly what the page copied for itself - the reading and nothing else, the same words that are on the screen.";
  "It stands inside the card holding the reading rather than among the ways onward, because it is not a way onward: it hands over what is already here. Standing inside it also says where the copying stops - the link under the card is left out of it on purpose, and a button sitting between the two would have claimed both.";
  arguments_assert(arguments, 2);
  let row = html_div(parent);
  html_centered(row);
  async function lambda() {
    await clipboard_copy_try(reading_text);
  }
  let component = app_shared_button_copy(row, lambda);
  return component;
}
