import { app_index_card } from "./app_index_card.mjs";
import { app_shared_about_text } from "./app_shared_about_text.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_index_about_card(root, opened) {
  "the card on the index page that opens what is promised about money here";
  "it is on this page rather than inside one app, because the promise covers every app listed here. a reader deciding whether any of this is going to ask them for money is standing on this page while they decide, and an answer kept inside one app is an answer they have to already trust us to go and find.";
  arguments_assert(arguments, 2);
  let label = app_shared_about_text();
  let text = "Why everything here is free, and what happens with a gift";
  app_index_card(root, label, text, opened);
}
