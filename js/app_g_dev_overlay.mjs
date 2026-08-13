import { html_viewport_width_full } from "./html_viewport_width_full.mjs";
import { html_viewport_height_visible } from "./html_viewport_height_visible.mjs";
import { html_div } from "./html_div.mjs";
import { app_shared_column_max_width } from "./app_shared_column_max_width.mjs";
import { html_body_div } from "./html_body_div.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_shared_color_page_background } from "./app_shared_color_page_background.mjs";
export function app_g_dev_overlay(title_text) {
  "the full-screen panel a dev screen draws itself into: fixed over the whole viewport in the page background colour, scrolling on its own, with a bold title at the top. shared by every #route that shows a PAGE of its own rather than acting on the map, so the directory and the design reader cannot drift apart in look. BESPOKE (style object literal) — do NOT auto-canonicalize";
  "its height is the VISIBLE height, not the full one. This is a page to be read and scrolled, so every part of it has to be reachable - and on a phone the full height counts the strip the browser's own bar sits over, so the last stretch of a panel built to it hangs underneath that bar and its own scroll bottoms out with that stretch still hidden. #characters showed it plainly: the sheet ends in a row of characters, and the last row could not be scrolled to. A backdrop may use the full height because it is only covering things; this one is not.";
  ("the tail padding is on the CONTENT rather than on this panel, because a scrolling box's own bottom padding is left out of how far it can scroll - measured here as a scrollHeight of exactly the top padding plus the content, with the bottom sixteen pixels simply absent. Padding that only exists when there is nothing to scroll is not padding.");
  let div = html_body_div();
  html_style_assign(div, {
    position: "fixed",
    top: "0",
    left: "0",
    width: html_viewport_width_full(),
    height: html_viewport_height_visible(),
    background: app_shared_color_page_background(),
    color: "black",
    display: "flex",
    "flex-direction": "column",
    "align-items": "stretch",
    "justify-content": "flex-start",
    gap: "0",
    "z-index": "1000",
    padding: "1rem",
    "box-sizing": "border-box",
    "overflow-y": "auto",
  });
  let title = html_p_text(div, title_text);
  ("centred rather than pushed right: the '← routes' pill is fixed at the top-left of every dev page, and a centred title clears it on a phone as well as a desktop, where a left-padded one drifted a long way from the cards it names");
  html_style_assign(title, {
    margin: "0",
    "text-align": "center",
    "font-weight": "bold",
  });
  ("the cards go in a COLUMN of their own, capped and centred, so a wide screen reads as a page down the middle instead of one card stretched the whole way across. the panel above keeps the scrolling and the background; this holds the content");
  let column = html_div(div);
  html_style_assign(column, {
    width: "100%",
    "max-width": app_shared_column_max_width(),
    margin: "0 auto",
    "padding-bottom": "1rem",
  });
  return column;
}
