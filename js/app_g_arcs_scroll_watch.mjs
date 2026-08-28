import { arguments_assert } from "./arguments_assert.mjs";
import { app_g_arcs_scroll_remember } from "./app_g_arcs_scroll_remember.mjs";
import { html_on_scroll } from "./html_on_scroll.mjs";
export function app_g_arcs_scroll_watch(panel) {
  "Starts watching the arcs bench for how far down it has been scrolled, and hands back the small record that says which sheet is on screen.";
  "A SHEET IS ONE PERSON'S ARC IN ONE CHAPTER, which is what the bench draws at a time. It was a whole chapter once, and the record said so; the name moved when the page stopped drawing a chapter's people end to end.";
  "IT IS STARTED ONCE FOR THE WHOLE SITTING, not once per drawing of the sheet. The sheet is drawn again every time a note is filed, so a watcher started alongside the drawing would be a second watcher, then a third - each one still holding the sheet that was on screen when it started, and each one still filing under it.";
  "THE SHEET IS REACHED THROUGH A RECORD RATHER THAN CARRIED IN, for the same reason. What is on screen changes and the watching does not, so the watching has to be able to ask rather than to have been told - and a record handed back is the smallest thing that lets one side write what the other reads without either of them being drawn again.";
  arguments_assert(arguments, 1);
  let watched = {
    sheet_code: null,
  };
  function scroll_note() {
    app_g_arcs_scroll_remember(panel, watched);
  }
  html_on_scroll(panel, scroll_note);
  return watched;
}
