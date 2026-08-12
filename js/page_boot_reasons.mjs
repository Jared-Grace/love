import { html_loading_message_text } from "./html_loading_message_text.mjs";
import { text_includes } from "./text_includes.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
export function page_boot_reasons(body_text, errors) {
  "the three ways a page can fail to arrive, named. an empty answer means it arrived.";
  "they are one fault wearing three faces: it threw on the way in, it drew nothing at all, or it is still showing the loading message. the third is the quiet one, and it is why looking for a thrown error alone is not enough - a page can hang without throwing anything, and to a reader a hung page and a crashed one are the same dead page.";
  "this is asked twice about the same page and that is deliberate. the waiting asks it with no errors, because it only wants to know whether there is anything on the screen yet - an error early on does not mean the drawing will not still come. the verdict asks it again at the end with the errors included. one reading of what arrival means, consulted at both moments, so the wait and the judgement can never disagree about it.";
  let reasons = [];
  let trimmed = text_trim(body_text);
  let blank = text_empty_is(trimmed);
  if (blank) {
    list_add(reasons, "drew nothing at all");
  }
  let loading = html_loading_message_text();
  let stuck = text_includes(body_text, loading);
  if (stuck) {
    list_add(reasons, "still showing the loading message");
  }
  let clean = list_empty_is(errors);
  if (not(clean)) {
    list_add(reasons, "threw while opening");
  }
  return reasons;
}
