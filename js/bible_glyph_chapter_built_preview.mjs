import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_body_div } from "./html_body_div.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_div } from "./html_div.mjs";
import { bible_glyph_characters_lookup } from "./bible_glyph_characters_lookup.mjs";
import { html_clear } from "./html_clear.mjs";
import { text_combine } from "./text_combine.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { bible_chapter_testament_name } from "./bible_chapter_testament_name.mjs";
import { bible_glyph_testament_drawn } from "./bible_glyph_testament_drawn.mjs";
import { equal } from "./equal.mjs";
import { ebible_testament_old_name } from "./ebible_testament_old_name.mjs";
import { bible_glyph_chapter_built_parsed } from "./bible_glyph_chapter_built_parsed.mjs";
import { bible_glyph_chapter_fetched } from "./bible_glyph_chapter_fetched.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { bible_glyph_verse_draw_html } from "./bible_glyph_verse_draw_html.mjs";
import { html_direction_rtl_set } from "./html_direction_rtl_set.mjs";
import { bible_glyph_verse_original_parsed } from "./bible_glyph_verse_original_parsed.mjs";
import { html_button } from "./html_button.mjs";
import { bible_glyph_chapter_built_samples } from "./bible_glyph_chapter_built_samples.mjs";
import { list_map } from "./list_map.mjs";
export function bible_glyph_chapter_built_preview() {
  arguments_assert(arguments, 0);
  ("Shows a picture Bible chapter BUILT from the interlinear beside the same chapter written by hand, verse under verse, on the sandbox app at hash glyph_built, so the two can be judged by eye on a phone before any built chapter is stored or shown to readers.");
  ("THE BUILT LINE IS DRAWN THROUGH THE SAME DRAWING THE READING PAGE USES. Its words go through the same parser and the same verse drawer as the hand line, so any difference on screen is a difference in the chapter and never in how it was drawn.");
  ("The pictures are looked up here, at the moment of drawing, from the table as it stands - which is the whole point of building chapters, and the reason a built line shows pictures the hand line lacks: the hand files were written before the table seated those words.");
  let root = html_body_div();
  html_p_text(
    root,
    "Tap a chapter. Each verse shows ✍️ the hand-written line, then ⚙️ the built line, then 📜 the built line in the order the original was written.",
  );
  let row = html_div(root);
  let holder = html_div(root);
  let lookup = bible_glyph_characters_lookup([]);
  async function show(built) {
    html_clear(holder);
    let chapter_code = built.chapter_code;
    let text = text_combine("loading ", chapter_code);
    html_div_text(holder, text);
    let testament_name = bible_chapter_testament_name(chapter_code);
    let drawn = bible_glyph_testament_drawn(testament_name);
    let right = ebible_testament_old_name();
    let rtl = equal(testament_name, right);
    let parsed = bible_glyph_chapter_built_parsed(built, drawn);
    let hand = await bible_glyph_chapter_fetched(chapter_code);
    html_clear(holder);
    let index = 0;
    for (let verse of parsed.verses) {
      let block = html_div(holder);
      let text2 = text_combine("verse ", verse.verse_number);
      html_div_text(block, text2);
      let hand_verse = hand.verses[index];
      index = index + 1;
      let hand_line = html_div(block);
      html_span_text(hand_line, "✍️ ");
      let hand_words = hand_verse ? hand_verse.words : [];
      bible_glyph_verse_draw_html(hand_line, hand_words, lookup);
      let built_line = html_div(block);
      html_span_text(built_line, "⚙️ ");
      bible_glyph_verse_draw_html(built_line, verse.words, lookup);
      let original_line = html_div(block);
      html_direction_rtl_set(original_line, rtl);
      html_span_text(original_line, "📜 ");
      let built_verse = built.verses[subtract(index, 1)];
      let original_words = bible_glyph_verse_original_parsed(
        built_verse.original_words,
        drawn,
      );
      bible_glyph_verse_draw_html(original_line, original_words, lookup);
      html_div_text(block, " ");
    }
  }
  function button_each(built) {
    function on_tapped() {
      show(built);
    }
    let r = html_button(row, built.chapter_code, on_tapped);
    return r;
  }
  let samples = bible_glyph_chapter_built_samples();
  list_map(samples, button_each);
}
