import { app_shared_dev_overlay_status } from "./app_shared_dev_overlay_status.mjs";
import { property_get } from "./property_get.mjs";
import { app_g_arcs_row } from "./app_g_arcs_row.mjs";
import { html_div } from "./html_div.mjs";
import { html_parent_get } from "./html_parent_get.mjs";
import { app_g_arcs_scroll_watch } from "./app_g_arcs_scroll_watch.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_shared_api_named } from "./app_shared_api_named.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { each } from "./each.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_g_arcs_chapter_code } from "./app_g_arcs_chapter_code.mjs";
import { app_g_arcs_chapter_buttons } from "./app_g_arcs_chapter_buttons.mjs";
import { app_g_arcs_person_choose } from "./app_g_arcs_person_choose.mjs";
import { null_is } from "./null_is.mjs";
import { app_g_arcs_sheet_draw } from "./app_g_arcs_sheet_draw.mjs";
export async function app_g_arcs() {
  "The #arcs review bench: one written arc laid out turn by turn with the Scripture that answered each line, and a press beside each one for filing what is wrong with it.";
  "IT READS THE LIVE STORE EVERY TIME AND IS THE WHOLE REASON THIS EXISTS. The way this was reviewed before was a text file written out of an arc and read later, and a file like that carries nothing saying which arc it came from - so a reviewer read a day-old copy, found a fault, and reported it mended. Nothing was wrong with either the file or the reading; there was simply no way for the page to be stale out loud. A page that asks the store as it draws cannot be a day old.";
  "THE NOTE IS FILED FROM THE PAGE THE FAULT WAS SEEN ON. Filing used to mean reading the turn number off one screen and typing it into a terminal on another, which is one person at two keyboards carrying a number in their head - and a wrong number there names a real line and is taken in silence. Here the number is never typed: it is the one belonging to the card that was pressed.";
  "THE CHAPTER IS CHOSEN FROM WHAT IS WRITTEN rather than from a name spelled into this page. One chapter has arcs today, and a page naming it would go on showing that one after a second was written, with nothing to say it was not showing everything.";
  "ONE PERSON IS ON THE SHEET AT A TIME, chosen the same way the chapter is. A chapter's arcs stacked end to end are hundreds of turns, and nothing said where one person stopped except the colour changing somewhere down a scroll - so a reviewer working through the second of three walked past the first every time the sheet was drawn again, which is on every note filed. Held to one, the sheet is the length of one arc and every screen of it is the person being read.";
  "WHAT IS CHOSEN IS ONE RECORD THE PRESSES WRITE INTO, because a press writes long after the drawing has returned, and a name handed to one would be a copy nothing else could read.";
  "IT IS A DEV SCREEN AND SHOWS NOTHING AGAINST THE DEPLOYED SITE, because the store it reads is on the machine the arcs are being written on.";
  let top = app_shared_dev_overlay_status("Arcs");
  let column = property_get(top, "column");
  let status_set = property_get(top, "status_set");
  let status_working = property_get(top, "status_working");
  let chooser = app_g_arcs_row(column);
  let people_chooser = app_g_arcs_row(column);
  let sheet = html_div(column);
  let panel = html_parent_get(column);
  let watched = app_g_arcs_scroll_watch(panel);
  let chosen = {
    chapter_code: null,
    nickname: null,
  };
  async function render() {
    "the store is asked before anything is cleared, so a seam that is down leaves the page standing as it was rather than blanking it.";
    let f_name = fn_name("g_arc_written_chapter_codes");
    let codes = await app_shared_api_named(f_name, []);
    let none = list_empty_is(codes);
    if (none) {
      each([chooser, people_chooser, sheet], html_clear);
      status_set("no arcs are written yet");
      return;
    }
    let chapter_code = app_g_arcs_chapter_code(chosen, codes);
    let f_name2 = fn_name("g_arc_review_chapter_cards");
    let read = await app_shared_api_named(f_name2, [chapter_code]);
    let people = property_get(read, "people");
    each([chooser, people_chooser, sheet], html_clear);
    app_g_arcs_chapter_buttons(chooser, codes, chosen, status_working, render);
    let person = app_g_arcs_person_choose(
      people_chooser,
      people,
      chosen,
      status_working,
      render,
    );
    let nobody = null_is(person);
    if (nobody) {
      status_set("that chapter has no arcs written");
      return;
    }
    let bench = {
      chapter_code,
      status_set,
      status_working,
      render,
    };
    let sheet_code = app_g_arcs_sheet_draw(
      sheet,
      panel,
      watched,
      person,
      bench,
    );
    status_set(sheet_code);
  }
  await render();
}
