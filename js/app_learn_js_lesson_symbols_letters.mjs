import { app_learn_js_highlight_color_fourth } from "./app_learn_js_highlight_color_fourth.mjs";
import { app_learn_js_highlight_color_second } from "./app_learn_js_highlight_color_second.mjs";
import { html_div } from "./html_div.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_learn_js_span_text_highlight_color } from "./app_learn_js_span_text_highlight_color.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { list_alphabet_lower } from "./list_alphabet_lower.mjs";
import { html_text_characters_numbered_color } from "./html_text_characters_numbered_color.mjs";
import { list_alphabet_upper } from "./list_alphabet_upper.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_symbols_digits } from "./app_learn_js_lesson_symbols_digits.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { boolean_random } from "./boolean_random.mjs";
import { ternary } from "./ternary.mjs";
import { text_upper_to } from "./text_upper_to.mjs";
import { identity } from "./identity.mjs";
import { text_transform } from "./text_transform.mjs";
import { app_learn_js_lesson_symbols_letters_batch_get } from "./app_learn_js_lesson_symbols_letters_batch_get.mjs";
import { app_learn_js_lesson_name_id } from "./app_learn_js_lesson_name_id.mjs";
import { app_learn_js_lesson_symbols_counting } from "./app_learn_js_lesson_symbols_counting.mjs";
import { app_learn_js_symbols_separated_on_question_numbered_fifth } from "./app_learn_js_symbols_separated_on_question_numbered_fifth.mjs";
export function app_learn_js_lesson_symbols_letters() {
  function lambda(root, context) {
    "2026-11-24, at the human's asking: uppercase wears purple and lowercase green, the word and the letters alike, so a learner sees which is which. Not blue, which the numbers wear. Not picked: red, which reads as wrong, and orange, the weakest of the pointing colours.";
    let upper = app_learn_js_highlight_color_fourth();
    let lower = app_learn_js_highlight_color_second();
    function line(parent, texts, colors) {
      let div3 = html_div(parent);
      for (let i = 0; less_than(i, texts.length); i++) {
        let color = colors[i];
        if (equal(color, null)) {
          html_span_text(div3, texts[i]);
        } else {
          app_learn_js_span_text_highlight_color(div3, texts[i], color);
        }
      }
    }
    let container3 = app_learn_js_container_light_blue(root);
    line(
      container3,
      ["The letter A can be written as ", "A", " or ", "a"],
      [null, upper, null, lower],
    );
    line(container3, ["A", " is ", "uppercase"], [upper, null, upper]);
    line(container3, ["a", " is ", "lowercase"], [lower, null, lower]);
    line(
      container3,
      ["Every letter has an ", "uppercase", " and a ", "lowercase", " version"],
      [null, upper, null, lower, null],
    );
    let c = app_learn_js_container_light_blue(root);
    let div = html_div(c);
    html_span_text(div, "In English, there are 26 letters in the alphabet: ");
    let div2 = html_div(c);
    let alphabet_lower = list_alphabet_lower();
    html_text_characters_numbered_color(div2, alphabet_lower, lower);
    line(
      c,
      ["Those 26 letters are written in ", "lowercase", "."],
      [null, lower, null],
    );
    let container = app_learn_js_container_light_blue(root);
    line(
      container,
      ["Here are the 26 English letters written in ", "uppercase", ":"],
      [null, upper, null],
    );
    let div5 = html_div(container);
    let alphabet_upper = list_alphabet_upper();
    html_text_characters_numbered_color(div5, alphabet_upper, upper);
    let container2 = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      container2,
      context,
      app_learn_js_lesson_symbols_digits,
      ["numbers are examples of symbols"],
    );
    line(
      container2,
      [
        "Also, both ",
        "uppercase",
        " and ",
        "lowercase",
        " letters are examples of symbols",
      ],
      [null, upper, null, lower, null],
    );
    html_div_text(
      container2,
      "When we write computer programs, we use symbols, including letters and numbers",
    );
    line(
      container2,
      [
        "For a computer, ",
        "lowercase",
        " letters may be considered different than ",
        "uppercase",
        " letters",
      ],
      [null, lower, null, upper, null],
    );
  }
  function lambda2(word) {
    function lambda3(c2) {
      let u = boolean_random();
      let mapper = ternary(u, text_upper_to, identity);
      let r = mapper(c2);
      return r;
    }
    let joined = text_transform(word, lambda3);
    return joined;
  }
  function batch_get() {
    let mapped = app_learn_js_lesson_symbols_letters_batch_get(lambda2);
    return mapped;
  }
  let name_id = app_learn_js_lesson_name_id("symbols", ["letters"]);
  let r5 = app_learn_js_lesson_symbols_counting(
    name_id,
    lambda,
    batch_get,
    app_learn_js_symbols_separated_on_question_numbered_fifth,
  );
  return r5;
}
