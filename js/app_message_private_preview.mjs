import { arguments_assert } from "./arguments_assert.mjs";
import { html_body_div } from "./html_body_div.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_div } from "./html_div.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_shared_api_named } from "./app_shared_api_named.mjs";
import { list_size } from "./list_size.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_from_number } from "./text_from_number.mjs";
import { html_text_content_set } from "./html_text_content_set.mjs";
import { property_get } from "./property_get.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { list_map } from "./list_map.mjs";
export async function app_message_private_preview() {
  "Reads back what people have written in the message app, on the sandbox app at hash message_private: it first brings down anything the machine has not got yet, then shows every message it holds, newest first.";
  "★ IT RUNS ON THE SERVING MACHINE AND SHOWS THE ANSWER HERE, WHICH IS THE ONLY WAY THIS PAGE COULD EXIST. The messages are kept in a folder outside every repo that nothing serves and no backup reaches, so a browser cannot open one; what it can do is ask the machine serving it to run a named command and hand back what that command answered. So this works on the dev server and nowhere else, and that is deliberate rather than a limitation - a published page that could read that folder would be the exact thing the folder exists to prevent.";
  "The bringing down and the reading are asked as two commands rather than one, so the count of what arrived can be said out loud. A screen that only ever showed a list would answer the same way whether it had just fetched thirty messages or none, and how many are new is the thing somebody opening this actually came to find out.";
  "Each message is shown under its own time and the mark of whoever wrote it, in smaller letters above the words, because the words are what is being read and everything else is there to place them.";
  "The words are set as text rather than as markup. They were typed by somebody else and arrive from a bucket, so anything in them that looks like a tag is shown as the characters that were typed.";
  arguments_assert(arguments, 0);
  let root = html_body_div();
  html_p_text(root, "What people have written, kept on this machine.");
  let status = html_p_text(root, "Bringing down anything new...");
  let listed = html_div(root);
  let f_missing = fn_name("app_message_download_private_missing");
  let written = await app_shared_api_named(f_missing, []);
  let count_new = list_size(written);
  let f_records = fn_name("app_message_private_records");
  let records = await app_shared_api_named(f_records, []);
  let count = list_size(records);
  let t = text_from_number(count);
  let t2 = text_from_number(count_new);
  let said = text_combine_multiple([
    t,
    " here, ",
    t2,
    " brought down just now.",
  ]);
  html_text_content_set(status, said);
  function each(record) {
    let who = property_get(record, "who");
    let when = property_get(record, "when");
    let message = property_get(record, "message");
    let card = html_div(listed);
    let head = text_combine_multiple([when, " ", who]);
    let line = html_p_text(card, head);
    html_style_font_size(line, "0.7em");
    let said_p = html_p_text(card, message);
    return said_p;
  }
  list_map(records, each);
}
