import { fn_name } from "./fn_name.mjs";
import { equal } from "./equal.mjs";
import { html_span_text_content } from "./html_span_text_content.mjs";
import { html_span } from "./html_span.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { list_join } from "./list_join.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { html_cursor_pointer } from "./html_cursor_pointer.mjs";
import { bible_glyph_name_draw_html } from "./bible_glyph_name_draw_html.mjs";
export function bible_glyph_word_draw_html(parent, word, lookup) {
  "$plain word";
  "$plain lookup";
  "the word is one stored verse word and the lookup is a glyph name to character table. Both are data to draw and neither runs.";
  "One stored word of a picture Bible verse, drawn onto a page as its pictures.";
  ("It is the twin of ",
    fn_name("bible_glyph_word_draw"),
    ", which draws the same stored word as plain text, and the two are deliberately kept side by side rather than one replacing the other. Plain text is what a terminal, a log and a test can read, and a page is where the pictures belong. Neither one stores anything, so a verse is written once and both draw it.");
  ("A GROUP IS HELD TOGETHER BY BEING CLOSE AND BY NOTHING ELSE, which is a change: a ring used to be drawn round it. Several glyphs standing together are ONE word - the burning heart with the cross and the dove is a single word of the Bible and not three - and what says so is that they touch while the gap to the next word is wider, written between the words as a character of its own by ",
    fn_name("bible_glyph_word_separator"),
    ". The ring was a mark that had to be taught before the first verse; a gap is one every reader was taught by their own language.");
  ("NOTHING HERE WIDENS ANYTHING, and that is the whole of this function's part in the grouping. A word is drawn tight and the gap that says where it ends is put in by the drawer one level up, one gap at a time, so that only the pairs that could be misread pay for it. An earlier version set the width as a style from inside here, which stopped working silently the moment the separator became a character, because the style it used widens a named list of separators that the new character is not on.");
  ("THE ONE THING THE RING DID THAT THE GAP CANNOT IS SURVIVE A LINE BREAK, so a group is still forbidden to break across lines - and that rule stopped being tidiness the moment the ring went. A group split over two lines loses the near gap the reader would have compared the far one against, and what is left on the page is glyphs at a line end and glyphs at a line start, which is exactly how two separate words look.");
  ("A GROUP OF ONE IS STILL A GROUP AND STILL GETS NOTHING DRAWN. One picture standing alone is already one word, so there is nothing to hold together and no gap inside it to be narrow.");
  ("EVERY GROUP, EVEN ONE OF ONE, IS ITS OWN SPAN AND SAYS WHICH PICTURES IT HOLDS, because a tap on a word opens that word with its meaning and the tap has to land on something that knows the whole word. The span draws nothing, so the page looks exactly as it did.");
  ("A GROUP SHOWS THE POINTER, because that says it can be tapped - and on an iPhone it is also what makes a tap on plain text reach the one listener above it at all; without it the tap is dropped silently.");
  ("Each glyph is drawn by ",
    fn_name("bible_glyph_name_draw_html"),
    ", which draws a glyph the lookup does not carry as its name rather than as a blank, for the same reason the plain text twin does it.");
  let plain = equal(typeof word, "string");
  if (plain) {
    html_span_text_content(parent, word);
    return;
  }
  for (let part of word) {
    let words = equal(typeof part, "string");
    if (words) {
      html_span_text_content(parent, part);
      continue;
    }
    let group = html_span(parent);
    html_style_set(group, "whiteSpace", "nowrap");
    let value = list_join(part, "+");
    html_attribute_set(group, "data-glyphs", value);
    html_cursor_pointer(group);
    for (let name of part) {
      bible_glyph_name_draw_html(group, name, lookup);
    }
  }
}
