import { arguments_assert } from "./arguments_assert.mjs";
import { html_body_div } from "./html_body_div.mjs";
import { html_font_sans_serif_set_html } from "./html_font_sans_serif_set_html.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_div } from "./html_div.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_shared_api_named } from "./app_shared_api_named.mjs";
import { list_size } from "./list_size.mjs";
import { list_group_by_property } from "./list_group_by_property.mjs";
import { word_count_pluralize } from "./word_count_pluralize.mjs";
import { text_from_number } from "./text_from_number.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_text_content_set } from "./html_text_content_set.mjs";
import { app_shared_color_gray_dark } from "./app_shared_color_gray_dark.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_contact_message_display } from "./app_shared_contact_message_display.mjs";
import { app_shared_button_uncolored_background_color } from "./app_shared_button_uncolored_background_color.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { list_reverse } from "./list_reverse.mjs";
import { list_map } from "./list_map.mjs";
export async function app_message_private_preview() {
  "Reads back what people have written in the message app, on the sandbox app at hash message_private: it first brings down anything the machine has not got yet, then shows every message it holds, gathered into one thread per person.";
  "★ IT RUNS ON THE SERVING MACHINE AND SHOWS THE ANSWER HERE, WHICH IS THE ONLY WAY THIS PAGE COULD EXIST. The messages are kept in a folder outside every repo that nothing serves and no backup reaches, so a browser cannot open one; what it can do is ask the machine serving it to run a named command and hand back what that command answered. So this works on the dev server and nowhere else, and that is deliberate rather than a limitation - a published page that could read that folder would be the exact thing the folder exists to prevent.";
  "The bringing down and the reading are asked as two commands rather than one, so the count of what arrived can be said out loud. A screen that only ever showed a list would answer the same way whether it had just fetched thirty messages or none, and how many are new is the thing somebody opening this actually came to find out.";
  "★ EACH MESSAGE IS DRAWN BY THE SAME UNIT THE MESSAGE APP DRAWS ITS OWN WITH, so this reads as a thread of received messages rather than as a report about them. Everything that makes a received message look received is decided in that one place - how wide the bubble is, which edge it hangs from, its neutral fill, and which way the letters run - so a page that copied any of those would be a second opinion about all four, and would drift the first time one of them was improved.";
  "It is asked for as the side the OTHER person's words sit on, which is the same side the message app puts a reply to you on: what is being looked at here is everything that was sent in, so every message is incoming and none of them is yours.";
  "★ THE MESSAGES ARE GATHERED PER PERSON, WHICH IS WHAT A THREAD IS. Read as one stream by clock, one writer's four messages sit apart from each other with other people's in between, and their mark has to be repeated on every bubble to say whose it was. Gathered, the mark is said once at the head of the thread and the bubbles under it need only their time - so the same screen carries less writing and says more, and somebody who sent the same words four times has those four sitting together where the repetition is plain instead of scattered where it is merely confusing.";
  "The gathering keeps the order the values were first met in, and what is handed to it is already newest first, so the threads come out most-recently-heard-from first without anything being sorted twice. Inside a thread the order is turned back the other way, because a conversation is read downwards from its beginning - which is the one place the newest-first rule does not hold, and it does not hold because a thread is a conversation and the page as a whole is an inbox.";
  "★ THE TIME GOES INSIDE THE BUBBLE, UNDER THE WORDS. Standing on its own between two bubbles a time belongs to whichever one the spacing suggests, and spacing is a hint rather than an answer - the reader has to measure two gaps by eye and trust the smaller one. Put inside, it is the message it names by construction, and no gap has to be read at all. It goes under rather than over the words because it can only be added after them: the drawing of a bubble sets its words as the whole of what is in it, so anything put there first would be wiped by the words arriving.";
  "A message with no time written on it gets no line at all rather than an empty one. The older ones on the disk hold the words alone, and an empty line inside a bubble is a gap that reads as something failing to load.";
  "The count of people is said as writers rather than as people because the plural is worked out by adding an s, and persons is not what anybody would say.";
  "The words are set as text rather than as markup. They were typed by somebody else and arrive from a bucket, so anything in them that looks like a tag is shown as the characters that were typed.";
  arguments_assert(arguments, 0);
  let root = html_body_div();
  html_font_sans_serif_set_html();
  html_p_text(root, "What people have written, kept on this machine.");
  let status = html_p_text(root, "Bringing down anything new...");
  let listed = html_div(root);
  let f_missing = fn_name("app_message_download_private_missing");
  let written = await app_shared_api_named(f_missing, []);
  let count_new = list_size(written);
  let f_records = fn_name("app_message_private_records");
  let records = await app_shared_api_named(f_records, []);
  let count = list_size(records);
  let threads = list_group_by_property(records, "who");
  let count_threads = list_size(threads);
  let counted = word_count_pluralize(count, "message");
  let counted_writers = word_count_pluralize(count_threads, "writer");
  let t = text_from_number(count_new);
  let said = text_combine_multiple([
    counted,
    " from ",
    counted_writers,
    ", ",
    t,
    " brought down just now.",
  ]);
  html_text_content_set(status, said);
  let gray = app_shared_color_gray_dark();
  function each_message(record) {
    let when = property_get(record, "when");
    let message = property_get(record, "message");
    let bubble = app_shared_contact_message_display("right", message, listed);
    let background = app_shared_button_uncolored_background_color();
    html_style_background_color_set(bubble, background);
    let dated = text_empty_not_is(when);
    if (dated) {
      let line = html_p_text(bubble, when);
      html_style_font_size(line, "0.7em");
      html_font_color_set(line, gray);
    }
    return bubble;
  }
  function each_thread(thread) {
    let who = property_get(thread, "key");
    let items = property_get(thread, "items");
    let count_theirs = list_size(items);
    let counted_theirs = word_count_pluralize(count_theirs, "message");
    let head_text = text_combine_multiple([who, " · ", counted_theirs]);
    let head = html_p_text(listed, head_text);
    html_style_font_size(head, "0.8em");
    html_font_color_set(head, gray);
    html_style_margin_top(head, "2.5em");
    list_reverse(items);
    let drawn = list_map(items, each_message);
    return drawn;
  }
  list_map(threads, each_thread);
}
