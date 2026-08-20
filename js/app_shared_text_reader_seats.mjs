import { fn_name } from "./fn_name.mjs";
export function app_shared_text_reader_seats() {
  "Every place words are put in front of a reader, and which of the things handed over is the words.";
  "These are the doors out of the program and onto the page. What goes through one of them is read by somebody, so it is the last point at which anybody can ask whether it was written in a language that reader has.";
  "Some of them hand the words on to another door rather than writing them out themselves, and those are here for the same reason as the rest. What is being watched for is a word typed out at the place it is handed over, and a word handed to a forwarder was typed out there and nowhere further in.";
  "Each names where the words sit among what is handed over rather than assuming it. The plain ones agree - the thing being written on comes first and the words second - but the ones carrying a verse or a screen's worth of settings do not, and a door counted at the wrong finger would answer about the wrong thing forever.";
  "A door missing from this list is not a gate that goes red. It is a page of words the count walks straight past, so it stays green while saying nothing about them, which is the one failure a count cannot report on itself.";
  let button = {
    fn: fn_name("app_shared_button"),
    at: 1,
  };
  let text_set = {
    fn: fn_name("html_text_set"),
    at: 1,
  };
  let div_text = {
    fn: fn_name("html_div_text"),
    at: 1,
  };
  let div_bold = {
    fn: fn_name("html_div_text_bold"),
    at: 1,
  };
  let div_centered = {
    fn: fn_name("html_div_text_centered"),
    at: 1,
  };
  let p_text = {
    fn: fn_name("html_p_text"),
    at: 1,
  };
  let placeholder = {
    fn: fn_name("html_placeholder"),
    at: 1,
  };
  let biblehub = {
    fn: fn_name("html_button_biblehub_open"),
    at: 4,
  };
  let subset_screen = {
    fn: fn_name("app_shared_bible_subset_screen_generic"),
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
