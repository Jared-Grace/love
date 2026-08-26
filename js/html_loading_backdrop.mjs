import { arguments_assert } from "./arguments_assert.mjs";
import { html_document_root } from "./html_document_root.mjs";
import { html_div } from "./html_div.mjs";
import { html_loading_backdrop_style } from "./html_loading_backdrop_style.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function html_loading_backdrop() {
  arguments_assert(arguments, 0);
  ("The sheet a screen waits behind: an empty box hung on the document and sized to cover");
  ("the whole of it, handed back for the caller to say what it looks like and what turns on");
  ("it.");
  ("Hung on the DOCUMENT rather than inside whatever the page is showing, and that is the");
  ("whole reason this is one thing rather than three lines each caller writes. A screen");
  ("here is redrawn by emptying its box and building it again, so a cover kept inside that");
  ("box is thrown away by the very redraw it exists to cover - and what the player sees is");
  ("a flash of white in the middle of loading.");
  ("It says nothing about colour, because that is the one thing the covers built on it");
  ("disagree about: the shared one is a dim you can see through and the praying game's is");
  ("solid dark. Everything they agree about is here, so a change to where a cover sits or");
  ("how big it is reaches both of them without anybody remembering the second one exists.");
  let html = html_document_root();
  let div = html_div(html);
  let backdrop = html_loading_backdrop_style();
  html_style_assign(div, backdrop);
  return div;
}
