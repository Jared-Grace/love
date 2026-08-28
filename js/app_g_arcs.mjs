import { equal } from "./equal.mjs";
import { app_shared_dev_overlay_status } from "./app_shared_dev_overlay_status.mjs";
import { property_get } from "./property_get.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_parent_get } from "./html_parent_get.mjs";
import { app_g_arcs_scroll_watch } from "./app_g_arcs_scroll_watch.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_shared_api_named } from "./app_shared_api_named.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { each } from "./each.mjs";
import { html_clear } from "./html_clear.mjs";
import { null_is } from "./null_is.mjs";
import { list_get } from "./list_get.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { app_shared_button_toggle_style } from "./app_shared_button_toggle_style.mjs";
import { list_first_try } from "./list_first_try.mjs";
import { property_get_or_null_equal } from "./property_get_or_null_equal.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { app_g_arcs_person_block } from "./app_g_arcs_person_block.mjs";
import { app_g_arcs_scroll_resume } from "./app_g_arcs_scroll_resume.mjs";
export async function app_g_arcs() {
  "The #arcs review bench: one written arc laid out turn by turn with the Scripture that answered each line, and a press beside each one for filing what is wrong with it.";
  "IT READS THE LIVE STORE EVERY TIME AND IS THE WHOLE REASON THIS EXISTS. The way this was reviewed before was a text file written out of an arc and read later, and a file like that carries nothing saying which arc it came from - so a reviewer read a day-old copy, found a fault, and reported it mended. Nothing was wrong with either the file or the reading; there was simply no way for the page to be stale out loud. A page that asks the store as it draws cannot be a day old.";
  "THE NOTE IS FILED FROM THE PAGE THE FAULT WAS SEEN ON. Filing used to mean reading the turn number off one screen and typing it into a terminal on another, which is one person at two keyboards carrying a number in their head - and a wrong number there names a real line and is taken in silence. Here the number is never typed: it is the one belonging to the card that was pressed.";
  "THE CHAPTER IS CHOSEN FROM WHAT IS WRITTEN rather than from a name spelled into this page. One chapter has arcs today, and a page naming it would go on showing that one after a second was written, with nothing to say it was not showing everything.";
  "ONE PERSON IS ON THE SHEET AT A TIME, chosen the same way the chapter is. A chapter's arcs stacked end to end are hundreds of turns, and nothing said where one person stopped except the colour changing somewhere down a scroll - so a reviewer working through the second of three walked past the first every time the sheet was drawn again, which is on every note filed. Held to one, the sheet is the length of one arc and every screen of it is the person being read.";
  "THE PERSON IS FORGOTTEN WHEN THE CHAPTER CHANGES, because a nickname belongs to one chapter's pool of people and a name carried across would name nobody there. A chapter opens on its first person, which is where a reader who has just chosen the chapter is starting anyway.";
  "A NAME THAT NAMES NOBODY FALLS BACK TO THE FIRST PERSON rather than emptying the sheet, which is what makes the chapter buttons safe to press in any order. Nothing on the page can put a stale name there today; the store being rewritten underneath a page left open all night can.";
  "THE BUTTON CARRIES THE NOTE COUNT, for the reason the heading carries it and one more. Reviewing a chapter takes more than one sitting, so where the reviewer stopped is worth reading off the page - and now that only one person is drawn, the row of buttons is the only place the other people are mentioned at all.";
  "IT IS A DEV SCREEN AND SHOWS NOTHING AGAINST THE DEPLOYED SITE, because the store it reads is on the machine the arcs are being written on.";
  let top = app_shared_dev_overlay_status("Arcs");
  let column = property_get(top, "column");
  let status_set = property_get(top, "status_set");
  let status_working = property_get(top, "status_working");
  let row_style = {
    display: "flex",
    "flex-wrap": "wrap",
    gap: "0.4rem",
    "justify-content": "center",
  };
  let chooser = html_div(column);
  html_style_assign(chooser, row_style);
  let people_chooser = html_div(column);
  html_style_assign(people_chooser, row_style);
  let sheet = html_div(column);
  let panel = html_parent_get(column);
  let watched = app_g_arcs_scroll_watch(panel);
  let chapter_code = null;
  let nickname = null;
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
    let unchosen = null_is(chapter_code);
    if (unchosen) {
      chapter_code = list_get(codes, 0);
    }
    let f_name2 = fn_name("g_arc_review_chapter_cards");
    let read = await app_shared_api_named(f_name2, [chapter_code]);
    let people = property_get(read, "people");
    each([chooser, people_chooser, sheet], html_clear);
    function chapter_button(code) {
      async function on_chapter() {
        chapter_code = code;
        nickname = null;
        status_working(code);
        await render();
      }
      let component = app_shared_button(chooser, code, on_chapter);
      let chapter_here = equal(code, chapter_code);
      app_shared_button_toggle_style(chapter_here, component);
    }
    each(codes, chapter_button);
    let person = list_first_try(people);
    let nobody = null_is(person);
    if (nobody) {
      status_set("that chapter has no arcs written");
      return;
    }
    function person_named(one) {
      let named = property_get_or_null_equal(one, "nickname", nickname);
      if (named) {
        person = one;
      }
    }
    each(people, person_named);
    nickname = property_get(person, "nickname");
    function person_button(one) {
      let one_nickname = property_get(one, "nickname");
      let value = property_get(one, "notes_count");
      let counted = String(value);
      let label = text_combine_multiple([one_nickname, "  ·  ", counted]);
      async function on_person() {
        nickname = one_nickname;
        status_working(one_nickname);
        await render();
      }
      let component = app_shared_button(people_chooser, label, on_person);
      let person_here = equal(one_nickname, nickname);
      app_shared_button_toggle_style(person_here, component);
    }
    each(people, person_button);
    let bench = {
      chapter_code,
      status_set,
      status_working,
      render,
    };
    app_g_arcs_person_block(sheet, person, bench);
    let sheet_code = text_combine_multiple([chapter_code, " ", nickname]);
    app_g_arcs_scroll_resume(panel, watched, sheet_code);
    status_set(sheet_code);
  }
  await render();
}
