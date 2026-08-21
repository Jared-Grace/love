import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
export function app_index_label_generic(emoji, text) {
  "what one card on the index page says on it: some writing, with a small picture in front of it where there is one that says something about where that card leads.";
  "Nothing in front where there is no picture, and no room held open where one would have gone. A blank kept in line with the ones above it reads as a picture that failed to arrive - which is a thing a reader can do nothing about and will try to.";
  "The writing is taken as it is rather than worked out from a name, because the cards that are not an app's own card say something a name cannot: a card leading to one screen inside the game is called what that screen is, not what the game is.";
  let none = text_empty_is(emoji);
  if (none) {
    return text;
  }
  let label = text_combine_multiple([emoji, " ", text]);
  return label;
}
