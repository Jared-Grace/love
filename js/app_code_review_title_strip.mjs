import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_review_number_get } from "./app_code_review_number_get.mjs";
import { app_code_review_scope } from "./app_code_review_scope.mjs";
import { app_code_reviews_complete_read } from "./app_code_reviews_complete_read.mjs";
import { app_code_review_complete_is } from "./app_code_review_complete_is.mjs";
import { emoji_check } from "./emoji_check.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_span_space } from "./html_span_space.mjs";
import { app_code_review_range_label } from "./app_code_review_range_label.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { subtract_1 } from "./subtract_1.mjs";
import { app_code_title_strip } from "./app_code_title_strip.mjs";
export function app_code_review_title_strip(root, context) {
  arguments_assert(arguments, 2);
  ("the top bar of a review screen: the same bar a lesson wears, with home, an arrow back to the lesson the review stands under, an arrow on to the lesson after it, and the lessons the review covers as its title, at the human's request");
  ("The review stands under the lesson with its own number, so counted from zero that lesson sits one place before the number and the next lesson sits at the number itself.");
  let number = app_code_review_number_get(context);
  let scope = app_code_review_scope(number);
  let reviews_complete = app_code_reviews_complete_read(context);
  let complete = app_code_review_complete_is(reviews_complete, number);
  function title_paint(title) {
    "a finished review wears the check a finished lesson wears, in front of its words";
    if (complete) {
      let check = emoji_check();
      html_span_text(title, check);
      html_span_space(title);
    }
    let label = app_code_review_range_label(number, scope);
    let words = text_combine_multiple(["Review: ", label]);
    html_span_text(title, words);
  }
  let index_previous = subtract_1(number);
  let strip = app_code_title_strip(
    root,
    context,
    complete,
    index_previous,
    number,
    title_paint,
  );
  return strip;
}
