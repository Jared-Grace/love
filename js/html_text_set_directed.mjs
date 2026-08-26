import { arguments_assert } from "./arguments_assert.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { html_text_direction_set } from "./html_text_direction_set.mjs";
export function html_text_set_directed(component, text) {
  "Put words into a piece of the page and point that piece the way those particular words run.";
  "Which way round it goes is read out of the letters themselves, so a thread holding one message in English and the next in Urdu gives each one its own edge to begin at. Told instead by the page it sits in, the whole thread would swing to whichever language the app happens to be speaking and half of it would be wrong.";
  "It is the writing and the turning as one act, because they are one act - a piece given words and left unturned reads from whichever end the frame around it was last told, and nothing about it looks wrong until somebody who reads that way sees it.";
  arguments_assert(arguments, 2);
  html_text_set(component, text);
  html_text_direction_set(component, text);
}
