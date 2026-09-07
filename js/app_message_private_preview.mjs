import { list_add_multiple } from "./list_add_multiple.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_body_div } from "./html_body_div.mjs";
import { html_font_sans_serif_set_html } from "./html_font_sans_serif_set_html.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_div } from "./html_div.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_shared_api_named } from "./app_shared_api_named.mjs";
import { list_size } from "./list_size.mjs";
import { list_filter_property_path } from "./list_filter_property_path.mjs";
import { list_group_by_property } from "./list_group_by_property.mjs";
import { word_count_pluralize } from "./word_count_pluralize.mjs";
import { text_from_number } from "./text_from_number.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_text_content_set } from "./html_text_content_set.mjs";
import { app_shared_color_gray_dark } from "./app_shared_color_gray_dark.mjs";
import { app_shared_color_red } from "./app_shared_color_red.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_contact_message_display } from "./app_shared_contact_message_display.mjs";
import { html_div_text_multiple } from "./html_div_text_multiple.mjs";
import { app_shared_contact_received_text } from "./app_shared_contact_received_text.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { app_shared_button_uncolored_background_color } from "./app_shared_button_uncolored_background_color.mjs";
import { html_style_background_color_set } from "./html_style_background_color_set.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { instant_label } from "./instant_label.mjs";
import { html_style_margin_top } from "./html_style_margin_top.mjs";
import { list_reverse } from "./list_reverse.mjs";
import { list_map } from "./list_map.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_shared_buttons_mark_current } from "./app_shared_buttons_mark_current.mjs";
import { app_shared_button_uncolored } from "./app_shared_button_uncolored.mjs";
export async function app_message_private_preview() {
  "Reads back what people have written in the message app, on the sandbox app at hash message_private: it first brings down anything the machine has not got yet, then shows the messages the reply rules answer, or the ones they do not, gathered into one thread per person, each message answered underneath by whatever the rules would have said to it.";
  "★ IT RUNS ON THE SERVING MACHINE AND SHOWS THE ANSWER HERE, WHICH IS THE ONLY WAY THIS PAGE COULD EXIST. The messages are kept in a folder outside every repo that nothing serves and no backup reaches, so a browser cannot open one; what it can do is ask the machine serving it to run a named command and hand back what that command answered. So this works on the dev server and nowhere else, and that is deliberate rather than a limitation - a published page that could read that folder would be the exact thing the folder exists to prevent.";
  "The bringing down and the reading are asked as two commands rather than one, so the count of what arrived can be said out loud. A screen that only ever showed a list would answer the same way whether it had just fetched thirty messages or none, and how many are new is the thing somebody opening this actually came to find out.";
  "★ THE TWO SIDES OF THE CHOICE ARE THE TWO JOBS THIS SCREEN IS FOR, and they are opposite jobs. The messages the rules answer are for reading: is what goes back to this person the right thing to say to them. The messages the rules do not answer are a work list: every one of them is a rule somebody has not written yet. Shown as one long run those two are interleaved, and neither job can be done - the reading is broken up by gaps and the work list has to be picked out of it by eye. Split, each is a screen you can go down.";
  "★ THE MESSAGES THE RULES BROKE ON SIT WITH THE UNANSWERED ONES, because that is what the choice asks. A message the rules threw part way through has no complete reply either; the difference is that it is a defect rather than a gap, and that difference is said on the message itself in red rather than by putting it somewhere a person would have to go looking for it.";
  "Both sides are worked out once, when the messages arrive, and choosing between them redraws from what is already held. Choosing is then instant and asks the machine nothing, which is what makes it worth having two buttons rather than two addresses.";
  "The count on each button is what makes the pair worth reading before either is pressed: the two numbers together say how much of what real people send the rules actually cover, which is the one number this whole screen exists to move.";
  "★ EACH MESSAGE IS DRAWN BY THE SAME UNIT THE MESSAGE APP DRAWS ITS OWN WITH, so this reads as a thread of received messages rather than as a report about them. Everything that makes a received message look received is decided in that one place - how wide the bubble is, which edge it hangs from, its neutral fill, and which way the letters run - so a page that copied any of those would be a second opinion about all four, and would drift the first time one of them was improved.";
  "The two sides are asked for the way the message app asks for them and not the other way round: what somebody sent hangs from one edge with the neutral fill on it, and what goes back to them hangs from the other. So this screen and the app the person is looking at put the same two things on the same two sides, and a reply cannot be mistaken here for a message.";
  "★ THE REPLY UNDER EACH MESSAGE IS THE ONE THE RULES REALLY WOULD SEND, worked out by the same rule set the message app answers with, so this is a rehearsal rather than a description. The rules are a grammar - a message is walked through as characters and every rule that matches contributes what it says back - and the interesting question about a grammar is never what it does on the examples it was written from, but what it does on the whole heap of real messages nobody had in front of them when they wrote it. That is exactly what this screen is: every message ever received, each with the answer it would have got.";
  "★ THE THREE OUTCOMES ARE SHOWN AS THREE DIFFERENT THINGS, because two of them are honest and one is a bug. Rules matched is shown plainly. No rule matched shows the standing answer the app really sends in that case, marked as standing so it is not read as a rule having fired. The rules throwing part way through is marked in red, because a message that breaks the grammar is a defect and it is worth exactly nothing to have it looking like a message nobody has written a rule for yet.";
  "★ THE MESSAGES ARE GATHERED PER PERSON, WHICH IS WHAT A THREAD IS. Read as one stream by clock, one writer's four messages sit apart from each other with other people's in between, and their mark has to be repeated on every bubble to say whose it was. Gathered, the mark is said once at the head of the thread and the bubbles under it need only their time - so the same screen carries less writing and says more, and somebody who sent the same words four times has those four sitting together where the repetition is plain instead of scattered where it is merely confusing.";
  "The gathering happens after the choice rather than before it, so a person whose messages fall on both sides shows on both screens with only the ones that side is about. Gathered first, a thread would carry a count that did not match what was under it.";
  "The gathering keeps the order the values were first met in, and what is handed to it is already newest first, so the threads come out most-recently-heard-from first without anything being sorted twice. Inside a thread the order is turned back the other way, because a conversation is read downwards from its beginning - which is the one place the newest-first rule does not hold, and it does not hold because a thread is a conversation and the page as a whole is an inbox.";
  "★ THE TIME GOES INSIDE THE BUBBLE, UNDER THE WORDS. Standing on its own between two bubbles a time belongs to whichever one the spacing suggests, and spacing is a hint rather than an answer - the reader has to measure two gaps by eye and trust the smaller one. Put inside, it is the message it names by construction, and no gap has to be read at all. It goes under rather than over the words because it can only be added after them: the drawing of a bubble sets its words as the whole of what is in it, so anything put there first would be wiped by the words arriving.";
  "★ THE TIME IS SAID THE WAY A PERSON SAYS ONE, NOT THE WAY THE DISK KEEPS IT. What is stored is a full instant down to the thousandth of a second, in the clock the machine that took it was keeping; what somebody reading an inbox wants is which day and roughly what time, where they are standing. So the seconds and the thousandths go, the day and the minute stay, and it is turned into the reader's own clock - which is also the difference between a line that is read at a glance and one that is skipped over.";
  "A message with no time written on it gets no line at all rather than an empty one. The older ones on the disk hold the words alone, and an empty line inside a bubble is a gap that reads as something failing to load.";
  "The count of people is said as writers rather than as people because the plural is worked out by adding an s, and persons is not what anybody would say.";
  "The words are set as text rather than as markup. They were typed by somebody else and arrive from a bucket, so anything in them that looks like a tag is shown as the characters that were typed.";
  arguments_assert(arguments, 0);
  let root = html_body_div();
  html_font_sans_serif_set_html();
  html_p_text(root, "What people have written, kept on this machine.");
  let status = html_p_text(root, "Bringing down anything new...");
  let chooser = html_div(root);
  let listed = html_div(root);
  let f_missing = fn_name("app_message_download_private_missing");
  let written = await app_shared_api_named(f_missing, []);
  let count_new = list_size(written);
  let f_records = fn_name("app_message_private_records_replied");
  let records = await app_shared_api_named(f_records, []);
  let count = list_size(records);
  let names_answered = ["reply", "answered"];
  let replied = list_filter_property_path(records, names_answered, true);
  let unreplied = list_filter_property_path(records, names_answered, false);
  let count_replied = list_size(replied);
  let count_unreplied = list_size(unreplied);
  let writers = list_group_by_property(records, "who");
  let count_writers = list_size(writers);
  let counted = word_count_pluralize(count, "message");
  let counted_writers = word_count_pluralize(count_writers, "writer");
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
  let red = app_shared_color_red();
  function each_reply(record) {
    let attempt = property_get(record, "reply");
    let answered = property_get(attempt, "answered");
    let mine = app_shared_contact_message_display("left", "", listed);
    if (answered) {
      let outputs = property_get(attempt, "outputs");
      html_div_text_multiple(mine, outputs);
      return mine;
    }
    let standing = app_shared_contact_received_text();
    html_div_text(mine, standing);
    let broke = property_get(attempt, "broke");
    let said_why = broke
      ? "the rules threw part way through this one"
      : "no rule matched - this is the standing answer";
    let color = broke ? red : gray;
    let note = html_p_text(mine, said_why);
    html_style_font_size(note, "0.7em");
    html_font_color_set(note, color);
    return mine;
  }
  function each_message(record) {
    let when = property_get(record, "when");
    let message = property_get(record, "message");
    let bubble = app_shared_contact_message_display("right", message, listed);
    let background = app_shared_button_uncolored_background_color();
    html_style_background_color_set(bubble, background);
    let dated = text_empty_not_is(when);
    if (dated) {
      let said_when = instant_label(when);
      let line = html_p_text(bubble, said_when);
      html_style_font_size(line, "0.7em");
      html_font_color_set(line, gray);
    }
    each_reply(record);
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
  let buttons = [];
  let sides = [true, false];
  function side_show(wanted) {
    let shown = wanted ? replied : unreplied;
    html_clear(listed);
    let threads = list_group_by_property(shown, "who");
    list_map(threads, each_thread);
    app_shared_buttons_mark_current(buttons, sides, wanted);
  }
  function side_replied() {
    side_show(true);
  }
  function side_unreplied() {
    side_show(false);
  }
  let t_replied = text_from_number(count_replied);
  let t_unreplied = text_from_number(count_unreplied);
  let label_replied = text_combine_multiple(["reply exists (", t_replied, ")"]);
  let label_unreplied = text_combine_multiple([
    "no complete reply (",
    t_unreplied,
    ")",
  ]);
  let button_replied = app_shared_button_uncolored(
    chooser,
    label_replied,
    side_replied,
  );
  let button_unreplied = app_shared_button_uncolored(
    chooser,
    label_unreplied,
    side_unreplied,
  );
  list_add_multiple(buttons, [button_replied, button_unreplied]);
  side_show(true);
}
