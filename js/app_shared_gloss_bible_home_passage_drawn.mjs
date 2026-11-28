import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_passage_text_first } from "./gloss_passage_text_first.mjs";
import { property_get } from "./property_get.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { each } from "./each.mjs";
import { json_from_try } from "./json_from_try.mjs";
import { property_path_get_2 } from "./property_path_get_2.mjs";
import { gloss_passage_entries_pointers_filled } from "./gloss_passage_entries_pointers_filled.mjs";
import { html_div } from "./html_div.mjs";
import { app_shared_gloss_bible_generated_gloss_span } from "./app_shared_gloss_bible_generated_gloss_span.mjs";
import { app_shared_gloss_bible_generate_generic_word } from "./app_shared_gloss_bible_generate_generic_word.mjs";
import { gloss_bible_sound_get_placed } from "./gloss_bible_sound_get_placed.mjs";
export function app_shared_gloss_bible_home_passage_drawn(
  text_use,
  passage,
  p,
  generated,
  v,
  { sound_url_get, sound_word_get, slow_url_get },
) {
  arguments_assert(arguments, 6);
  let texts = null;
  if (text_use) {
    ("A passage's wording in one bible arrives as a verse apiece, and the sentence shown to the reader is those verses joined by a space - the same joining the word rows underneath were cut by. Handing the list itself to a line of text instead let the language write the join, and the language writes a comma with no space after it, so a passage covering two verses showed the reader a comma glued to the last mark of the first one. A passage covering a single verse has a list of one and looks right, which is why it stood for a hundred chapters.");
    let joined = gloss_passage_text_first(passage);
    texts = [joined];
  } else {
    texts = property_get(passage, "originals");
  }
  function lambda5(t) {
    let div = html_div_text(p, t);
    html_font_color_set(div, "#15803dff");
  }
  each(texts, lambda5);
  let explains_json = property_get(passage, generated);
  let explains_written = json_from_try(explains_json);
  let chapter_passages = property_path_get_2(v, "downloaded", "passages");
  let explains = gloss_passage_entries_pointers_filled(
    explains_written,
    chapter_passages,
    passage,
  );
  if (false) {
    let div3 = html_div(p);
    function lambda2(e) {
      let r2 = app_shared_gloss_bible_generated_gloss_span(e, div3, generated);
      return r2;
    }
    each(explains, lambda2);
  }
  let word_property = app_shared_gloss_bible_generate_generic_word();
  let chapter_code = property_get(passage, "chapter_code");
  let verse_numbers = property_get(passage, "verse_numbers");
  let sound_placed = gloss_bible_sound_get_placed(
    sound_url_get,
    sound_word_get,
    chapter_code,
    verse_numbers,
  );
  let slow_placed = gloss_bible_sound_get_placed(
    slow_url_get,
    sound_word_get,
    chapter_code,
    verse_numbers,
  );
  let r = {
    texts,
    explains,
    word_property,
    sound_placed,
    slow_placed,
  };
  return r;
}
