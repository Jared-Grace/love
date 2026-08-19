import { arguments_assert } from "./arguments_assert.mjs";
import { g_verify_chapter_query_key } from "./g_verify_chapter_query_key.mjs";
import { html_query_property_get } from "./html_query_property_get.mjs";
import { g_verify_chapter_asked_generic } from "./g_verify_chapter_asked_generic.mjs";
export function g_verify_chapter_asked() {
  "The chapter this tab's link asks for, said as {asked, usable} - the word the address actually carries, and whether it names a chapter this bible could have.";
  "One reading and two answers, because the two things anybody wants to know about a word out of a link are opposites and each has a different caller. What the page should OPEN needs the word only when it is usable. What the reader should be TOLD needs the word only when it is not. Read twice, the two would drift apart, and a page that opened one chapter while explaining a different one is worse than either mistake alone.";
  "What the word amounts to is settled next door, where it is settled from the word alone. This is the half that needs a browser, so it is kept down to the two lines that genuinely do - the field's name, and the address it is read out of - and everything a corpus could ask about is on the other side of the handover.";
  arguments_assert(arguments, 0);
  let key = g_verify_chapter_query_key();
  let asked = html_query_property_get(key);
  let r = g_verify_chapter_asked_generic(asked);
  return r;
}
