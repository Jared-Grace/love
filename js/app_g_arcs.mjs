import { app_g_arcs_scroll_resume } from "./app_g_arcs_scroll_resume.mjs";
import { app_g_arcs_scroll_watch } from "./app_g_arcs_scroll_watch.mjs";
import { html_parent_get } from "./html_parent_get.mjs";
import { app_shared_api_named } from "./app_shared_api_named.mjs";
import { app_shared_dev_overlay_status } from "./app_shared_dev_overlay_status.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { app_g_arcs_person_block } from "./app_g_arcs_person_block.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_clear } from "./html_clear.mjs";
import { property_get } from "./property_get.mjs";
import { list_get } from "./list_get.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { null_is } from "./null_is.mjs";
import { fn_name } from "./fn_name.mjs";
import { each } from "./each.mjs";
export async function app_g_arcs() {
  "The #arcs review bench: every arc written for a chapter laid out turn by turn with the Scripture that answered each line, and a press beside each one for filing what is wrong with it.";
  "IT READS THE LIVE STORE EVERY TIME AND IS THE WHOLE REASON THIS EXISTS. The way this was reviewed before was a text file written out of an arc and read later, and a file like that carries nothing saying which arc it came from - so a reviewer read a day-old copy, found a fault, and reported it mended. Nothing was wrong with either the file or the reading; there was simply no way for the page to be stale out loud. A page that asks the store as it draws cannot be a day old.";
  "THE NOTE IS FILED FROM THE PAGE THE FAULT WAS SEEN ON. Filing used to mean reading the turn number off one screen and typing it into a terminal on another, which is one person at two keyboards carrying a number in their head - and a wrong number there names a real line and is taken in silence. Here the number is never typed: it is the one belonging to the card that was pressed.";
  "THE CHAPTER IS CHOSEN FROM WHAT IS WRITTEN rather than from a name spelled into this page. One chapter has arcs today, and a page naming it would go on showing that one after a second was written, with nothing to say it was not showing everything.";
  "IT IS A DEV SCREEN AND SHOWS NOTHING AGAINST THE DEPLOYED SITE, because the store it reads is on the machine the arcs are being written on.";
  let top = app_shared_dev_overlay_status("Arcs");
  let column = property_get(top, "column");
  let status_set = property_get(top, "status_set");
  let status_working = property_get(top, "status_working");
  let chooser = html_div(column);
  html_style_assign(chooser, {
    display: "flex",
    "flex-wrap": "wrap",
    gap: "0.4rem",
    "justify-content": "center",
  });
  let sheet = html_div(column);
  let panel = html_parent_get(column);
  let watched = app_g_arcs_scroll_watch(panel);
  let chapter_code = null;
  async function render() {
    "the store is asked before anything is cleared, so a seam that is down leaves the page standing as it was rather than blanking it.";
    let f_name = fn_name("g_arc_written_chapter_codes");
    let codes = await app_shared_api_named(f_name, []);
    let none = list_empty_is(codes);
    if (none) {
      each([chooser, sheet], html_clear);
      status_set("no arcs are written yet");
      return;
    }
    let unchosen = null_is(chapter_code);
    if (unchosen) {
      chapter_code = list_get(codes, 0);
    }
    let f_name2 = fn_name("g_arc_review_chapter_cards");
    let read = await app_shared_api_named(f_name2, [chapter_code]);
    let people = property_get(read, "people");
    each([chooser, sheet], html_clear);
    function chapter_button(code) {
      async function on_choose() {
        chapter_code = code;
        status_working(code);
        await render();
        status_set(code);
      }
      app_shared_button(chooser, code, on_choose);
    }
    each(codes, chapter_button);
    let bench = {
      chapter_code,
      status_set,
      status_working,
      render,
    };
    function person_block(person) {
      app_g_arcs_person_block(sheet, person, bench);
    }
    each(people, person_block);
    app_g_arcs_scroll_resume(panel2, watched2, chapter_code2);
  }
  await render();
}
