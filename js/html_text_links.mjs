import { text_url_pieces } from "./text_url_pieces.mjs";
import { html_a_href_text } from "./html_a_href_text.mjs";
import { html_style_overflow_wrap } from "./html_style_overflow_wrap.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function html_text_links(parent, text) {
  "Writes a line of prose into a parent with every web address in it made a link a reader can follow, and the words around them left as words.";
  "The address is shown as itself, because the prose around it was written to be read with the address in it - 'let us know at https://...' needs the address, not a word standing in for it.";
  "A long address may break across lines anywhere, because one has no spaces to break at, and a single address unbroken pushes the whole page sideways on a phone.";
  let pieces = text_url_pieces(text);
  for (let piece of pieces) {
    let piece_text = piece.text;
    if (piece.url) {
      let a = html_a_href_text(parent, piece_text, piece_text);
      html_style_overflow_wrap(a, "anywhere");
    } else {
      html_span_text(parent, piece_text);
    }
  }
}
