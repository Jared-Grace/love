import { html_p_text } from "./html_p_text.mjs";
import { html_placeholder } from "./html_placeholder.mjs";
import { html_button_biblehub_open } from "./html_button_biblehub_open.mjs";
import { app_shared_bible_subset_screen_generic } from "./app_shared_bible_subset_screen_generic.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_div_text_bold } from "./html_div_text_bold.mjs";
import { html_div_text_centered } from "./html_div_text_centered.mjs";
import { html_text_set } from "./html_text_set.mjs";
export function app_shared_text_reader_seats() {
  "Every place words are put in front of a reader, and which of the things handed over is the words.";
  "These are the doors out of the program and onto the page. What goes through one of them is read by somebody, so it is the last point at which anybody can ask whether it was written in a language that reader has.";
  "Some of them hand the words on to another door rather than writing them out themselves, and those are here for the same reason as the rest. What is being watched for is a word typed out at the place it is handed over, and a word handed to a forwarder was typed out there and nowhere further in.";
  "Each names where the words sit among what is handed over rather than assuming it. The plain ones agree - the thing being written on comes first and the words second - but the ones carrying a verse or a screen's worth of settings do not, and a door counted at the wrong finger would answer about the wrong thing forever.";
  "A door missing from this list is not a gate that goes red. It is a page of words the count walks straight past, so it stays green while saying nothing about them, which is the one failure a count cannot report on itself.";
  let button = {
    fn: app_shared_button.name,
    at: 1,
  };
  let text_set = {
    fn: html_text_set.name,
    at: 1,
  };
  let div_text = {
    fn: html_div_text.name,
    at: 1,
  };
  let div_bold = {
    fn: html_div_text_bold.name,
    at: 1,
  };
  let div_centered = {
    fn: html_div_text_centered.name,
    at: 1,
  };
  let p_text = {
    fn: html_p_text.name,
    at: 1,
  };
  let placeholder = {
    fn: html_placeholder.name,
    at: 1,
  };
  let biblehub = {
    fn: html_button_biblehub_open.name,
    at: 4,
  };
  let subset_screen = {
    fn: app_shared_bible_subset_screen_generic.name,
    at: 6,
  };
  let seats = [
    button,
    text_set,
    div_text,
    div_bold,
    div_centered,
    p_text,
    placeholder,
    biblehub,
    subset_screen,
  ];
  return seats;
}
