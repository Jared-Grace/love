import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_split } from "./text_split.mjs";
import { not_equal } from "./not_equal.mjs";
import { app_code_title_words_percent_paint } from "./app_code_title_words_percent_paint.mjs";
import { html_span_text_code_dark } from "./html_span_text_code_dark.mjs";
import { greater_than } from "./greater_than.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { text_slice } from "./text_slice.mjs";
import { subtract } from "./subtract.mjs";
import { text_size } from "./text_size.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_combine } from "./text_combine.mjs";
import { each_index } from "./each_index.mjs";
export function app_code_title_words_keywords_paint(parent, text) {
  arguments_assert(arguments, 2);
  ("the words of a home title, with every if and else in them painted as code, written lower case as the code spells them, and the rest as ",
    fn_name("app_code_title_words_percent_paint"),
    " paints it; keywords next to each other, as in Else if, are one piece of code, else if");
  ("Asked for by the human 2026-10-11: if and else in a title name the keyword, so they look like it. A plural, Two ifs, paints the if and leaves the s plain. Weighed: Halve if even, whose if reads as English as well, and painted with the rest since its lesson is an if; a title that means the English word is a reason to reword it rather than to look the word up in a list.");
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
  function word_paint(word, index) {
    let space = "";
    if (greater_than(index, 0)) {
      space = " ";
    }
    let lower = text_lower_to(word);
    let stem = lower;
    let rest = "";
    if (text_ends_with(lower, "s")) {
      let left = text_size(lower);
      let to = subtract(left, 1);
      stem = text_slice(lower, 0, to);
      let from2 = text_size(stem);
      let to2 = text_size(word);
      rest = text_slice(word, from2, to2);
    }
    let is_keyword = list_includes(keywords, stem);
    if (not(is_keyword)) {
      code_flush();
      plain = text_combine_multiple([plain, space, word]);
      return;
    }
    if (not_equal(code, "")) {
      code = text_combine_multiple([code, space, stem]);
    } else {
      plain = text_combine(plain, space);
      plain_flush();
      code = stem;
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
