import { arguments_assert } from "./arguments_assert.mjs";
import { html_hr } from "./html_hr.mjs";
import { html_div } from "./html_div.mjs";
import { property_get } from "./property_get.mjs";
import { html_text_direction_set } from "./html_text_direction_set.mjs";
import { app_shared_gloss_bible_word_sound } from "./app_shared_gloss_bible_word_sound.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_bold_mild } from "./html_bold_mild.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
import { app_shared_color_red } from "./app_shared_color_red.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { html_on_click_when } from "./html_on_click_when.mjs";
import { html_span_colon_2 } from "./html_span_colon_2.mjs";
import { app_shared_color_gray } from "./app_shared_color_gray.mjs";
export function app_shared_gloss_bible_word_row(
  e,
  p,
  word_property,
  sound_url_get,
  slow_url_get,
) {
  arguments_assert(arguments, 5);
  html_hr(p);
  let div = html_div(p);
  let word = property_get(e, word_property);
  let gloss = property_get(e, "gloss");
  let explain = property_get(e, "explain");
  ("the row runs the way the explanation runs, because the explanation is the reader's own language and the rest of the row is what they came here not knowing. read right to left an urdu row gives the english word first, then what it means, then why - the same three steps an english row gives read left to right.");
  ("without this the row ran left to right whatever was in it, and the browser gathered every urdu piece into one backwards run: the meaning came out AFTER the explanation of it, so the one word a beginner needed first was the last thing on the line.");
  html_text_direction_set(div, explain);
  ("★ THE PRESSES COME BEFORE THE WORD, SO THAT THEY LAND IN THE SAME PLACE ON EVERY ROW. Words are different lengths, so presses drawn after the word sat a different distance across the screen on each line and every one of them had to be aimed afresh. Drawn at the front they stand in a single column down the page, and a reader working through a passage can hit them without looking away from what they are reading.");
  ("the front of the row is the left of the screen on an english page and the right of it on an urdu one, because the row is already laid out the way the explanation reads - so this is the same edge on every line whichever language the reader has, which is the whole of what makes it a column.");
  ("they still sit against the word rather than at the end of the row, because they belong to the word and not to the explanation of it - a row that ran the other way would otherwise leave them stranded at the far side of two pieces of urdu.");
  let play = app_shared_gloss_bible_word_sound(
    div,
    word,
    sound_url_get,
    slow_url_get,
  );
  let span = html_span_text(div, word);
  html_bold_mild(span);
  ("each piece is held in its own run, detected from itself, so an english word inside an urdu row reads forwards and does not turn the row around it");
  html_attribute_set(span, "dir", "auto");
  let color3 = app_shared_color_red();
  html_font_color_set(span, color3);
  ("the word answers a press too, and gets nothing to answer with on a page that has no recordings - so it is offered the saying rather than told to listen, and a wordless page leaves it as plain text.");
  html_on_click_when(span, play);
  let c = html_span_colon_2(div);
  let color = app_shared_color_gray();
  html_font_color_set(c, color);
  let span2 = html_span_text(div, gloss);
  html_attribute_set(span2, "dir", "auto");
  html_font_color_set(span2, "#1d4ed8ff");
  let c2 = html_span_colon_2(div);
  let color2 = app_shared_color_gray();
  html_font_color_set(c2, color2);
  let span3 = html_span_text(div, explain);
  html_attribute_set(span3, "dir", "auto");
  html_font_color_set(span3, "#a21cafff");
}
