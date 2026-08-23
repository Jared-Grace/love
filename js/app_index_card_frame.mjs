import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
export function app_index_card_frame(root, text) {
  "What one card on the index page is put inside: a pale blue box when the card has a line under its button, and the page itself when it has not.";
  "The box is there to say that a button and the writing beneath it are one thing rather than two. With nothing beneath the button there is no second thing to gather, so the box is a frame drawn around a frame - the button already fills its own line and already keeps its own room above and below.";
  "The page listing every app is the whole reason this is asked. Every card on it is built from an app's own name, so none of them has a line to say, and the page came out as a column of pale blue boxes each holding one button.";
  let framed = text_empty_not_is(text);
  if (framed) {
    let card = app_shared_container_blue(root);
    return card;
  }
  return root;
}
