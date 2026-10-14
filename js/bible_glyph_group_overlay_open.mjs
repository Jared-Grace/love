import { arguments_assert } from "./arguments_assert.mjs";
import { html_document_body } from "./html_document_body.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_z_max } from "./html_z_max.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { bible_glyph_name_draw_html } from "./bible_glyph_name_draw_html.mjs";
import { bible_glyph_names_spoken } from "./bible_glyph_names_spoken.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { bible_glyph_group_pieces } from "./bible_glyph_group_pieces.mjs";
import { greater_than } from "./greater_than.mjs";
import { bible_glyph_piece_meaning } from "./bible_glyph_piece_meaning.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { html_span } from "./html_span.mjs";
import { html_span_text_content } from "./html_span_text_content.mjs";
import { not_equal } from "./not_equal.mjs";
import { html_remove } from "./html_remove.mjs";
import { html_on_click } from "./html_on_click.mjs";
export function bible_glyph_group_overlay_open(names, lookup, meanings) {
  arguments_assert(arguments, 3);
  ("$plain names");
  ("$plain lookup");
  ("$plain meanings");
  ("the names are the pictures of one tapped group, the lookup maps a name to its character, and the meanings map a sequence to what it says. All three are data to draw and none runs.");
  ("One tapped word of the picture Bible shown large over the page, with the name of each picture and what the word means. A tap anywhere closes it.");
  ("THE MEANING IS GIVEN ONLY WHEN IT IS ASKED FOR. The page itself still tells nobody what a picture means; a reader who taps one word has asked about that word and nothing else, so this answers that one word and goes away.");
  ("THE PICTURES ARE DRAWN BIG FIRST AND THEIR NAMES UNDER THEM, because the names are how the pictures were chosen - a reader who sees that the word is a heart and a fire can read the next such word without tapping.");
  ("A group holding more than one meaning, such as a Hebrew word with and and his joined to it, gets one line per piece, each with its own pictures, so the reader sees which pictures say which part.");
  ("The overlay is fixed to the screen rather than placed in the page, so it opens over whatever part of the chapter the reader has scrolled to and nothing on the page moves.");
  let body = html_document_body();
  let backdrop = html_div(body);
  html_style_assign(backdrop, {
    position: "fixed",
    inset: "0",
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    "align-items": "center",
    "justify-content": "center",
    padding: "1em",
    "box-sizing": "border-box",
    "z-index": html_z_max(),
  });
  let card = html_div(backdrop);
  html_style_assign(card, {
    background: "Canvas",
    color: "CanvasText",
    "border-radius": "0.5em",
    padding: "1em",
    width: "100%",
    "max-width": "30em",
    "max-height": "100%",
    "overflow-y": "auto",
    "box-sizing": "border-box",
    "text-align": "center",
  });
  let big = html_div(card);
  html_style_set(big, "fontSize", "4em");
  for (let name of names) {
    bible_glyph_name_draw_html(big, name, lookup);
  }
  let spoken = bible_glyph_names_spoken(names);
  let spoken_line = html_div_text(card, spoken);
  app_shared_text_deemphasized(spoken_line);
  let pieces = bible_glyph_group_pieces(names, meanings);
  let several = greater_than(pieces.length, 1);
  for (let piece of pieces) {
    let meaning = bible_glyph_piece_meaning(piece, meanings, several);
    if (equal(meaning, null) && not(several)) {
      continue;
    }
    let line = html_div(card);
    html_style_set(line, "marginTop", "0.75em");
    if (several) {
      let pictures = html_span(line);
      html_style_set(pictures, "fontSize", "1.5em");
      for (let name of piece.names) {
        bible_glyph_name_draw_html(pictures, name, lookup);
      }
      html_span_text_content(line, " ");
    }
    if (equal(meaning, null)) {
      let spoken_piece = bible_glyph_names_spoken(piece.names);
      let unexplained = html_span_text_content(line, spoken_piece);
      app_shared_text_deemphasized(unexplained);
      continue;
    }
    let gloss = html_span_text_content(line, meaning.gloss);
    html_style_set(gloss, "fontWeight", "bold");
    if (not_equal(meaning.root, null)) {
      let root = html_span_text_content(line, " " + meaning.root);
      app_shared_text_deemphasized(root);
    }
  }
  function close() {
    html_remove(backdrop);
  }
  html_on_click(backdrop, close);
}
