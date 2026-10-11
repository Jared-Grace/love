import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_split } from "./text_split.mjs";
import { not_equal } from "./not_equal.mjs";
import { app_code_title_words_percent_paint } from "./app_code_title_words_percent_paint.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_skip } from "./text_skip.mjs";
import { text_size } from "./text_size.mjs";
import { text_letters_digits_none_is } from "./text_letters_digits_none_is.mjs";
import { greater_than } from "./greater_than.mjs";
import { equal } from "./equal.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine } from "./text_combine.mjs";
import { each_index } from "./each_index.mjs";
export function app_code_title_words_keywords_paint(parent, text) {
  arguments_assert(arguments, 2);
  ("the words of a home title, with every if and else in them painted as code, written lower case as the code spells them, and the rest as ",
    fn_name("app_code_title_words_percent_paint"),
    " paints it; keywords next to each other, as in Else if, are one piece of code, else if");
  ("Asked for by the human 2026-10-11: if and else in a title name the keyword, so they look like it. A plural or a mark after the word, Two ifs, one name, paints the if and leaves the s and the comma plain. Weighed: Halve if even, whose if reads as English as well, and painted with the rest since its lesson is an if; a title that means the English word is a reason to reword it rather than to look the word up in a list.");
  let keywords = ["if", "else"];
  let words = text_split(text, " ");
  let plain = "";
  let code = "";
  function plain_flush() {
    if (not_equal(plain, "")) {
      app_code_title_words_percent_paint(parent, plain);
      plain = "";
    }
  }
  function code_flush() {
    if (not_equal(code, "")) {
      html_span_text_code_dark(parent, code);
      code = "";
    }
  }
  function keyword_get(word) {
    "the keyword the word is, with the s and marks after it as rest, or null when the word is not one";
    let lower = text_lower_to(word);
    for (let keyword of keywords) {
      if (text_starts_with(lower, keyword)) {
        let skip_count = text_size(keyword);
        let rest = text_skip(word, skip_count);
        let after = rest;
        if (text_starts_with(after, "s")) {
          after = text_skip(after, 1);
        }
        if (text_letters_digits_none_is(after)) {
          let r = {
            keyword,
            rest,
          };
          return r;
        }
      }
    }
    return null;
  }
  function word_paint(word, index) {
    let space = "";
    if (greater_than(index, 0)) {
      space = " ";
    }
    let found = keyword_get(word);
    if (equal(found, null)) {
      code_flush();
      plain = text_combine_multiple([plain, space, word]);
      return;
    }
    let keyword = property_get(found, "keyword");
    let rest = property_get(found, "rest");
    if (not_equal(code, "")) {
      code = text_combine_multiple([code, space, keyword]);
    } else {
      plain = text_combine(plain, space);
      plain_flush();
      code = keyword;
    }
    if (not_equal(rest, "")) {
      code_flush();
      plain = rest;
    }
  }
  each_index(words, word_paint);
  code_flush();
  plain_flush();
}
