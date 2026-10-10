import { list_permutations } from "./list_permutations.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_braces_colors_next } from "./app_code_braces_colors_next.mjs";
import { html_div } from "./html_div.mjs";
import { app_code_code_dark_lines_braces_paired_colors } from "./app_code_code_dark_lines_braces_paired_colors.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { equal } from "./equal.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { list_add } from "./list_add.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { list_take } from "./list_take.mjs";
import { list_concat } from "./list_concat.mjs";
import { app_code_quiz_choice_button } from "./app_code_quiz_choice_button.mjs";
import { app_shared_button_code_unframed } from "./app_shared_button_code_unframed.mjs";
import { html_data_set_test_happy } from "./html_data_set_test_happy.mjs";
import { property_set } from "./property_set.mjs";
import { html_data_set_test_happy_remove } from "./html_data_set_test_happy_remove.mjs";
import { app_shared_button_screen_green_style_assign } from "./app_shared_button_screen_green_style_assign.mjs";
import { app_code_lesson_quiz_wrong_set } from "./app_code_lesson_quiz_wrong_set.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { each } from "./each.mjs";
export function app_code_lesson_quiz_braces_choose_colored_generic(
  parent,
  qa,
  on_success,
  on_wrong,
  batch_get,
  backwards,
) {
  "A quiz choosing between programs and their braces, where everything on the screen wears the one pair of colours, as the human asked 2026-10-11: the code or braces asked about is drawn in two colours, and every choice is drawn in those same two colours.";
  "Because the colours are part of what is shown, the colours are part of the answer too: a choice is right only when its braces stand in the right order AND each pair wears the colour its partner wears in the question. Two orders of braces times two ways of giving out the two colours gives four choices, where the braces alone gave two; three wrong ones are always offered beside the right one, picked at random from the rest, so three pairs also give four.";
  "Forwards (backwards false) shows the code and offers braces; backwards shows the braces and offers code. Backwards, a choice whose braces and colours are exactly the question's is a second right answer, as an if and its else is beside two ifs, so it is never drawn.";
  let code = property_get(qa, "question");
  let sequence = property_get(qa, "answer");
  let colors = app_code_braces_colors_next(code);
  ("every way of giving out the same colours to the pairs: with two pairs the colours as drawn and swapped, with three pairs six ways");
  let colorings = list_permutations(colors);
  let question_div = html_div(parent);
  let shown_question = backwards ? sequence : code;
  app_code_code_dark_lines_braces_paired_colors(
    question_div,
    shown_question,
    colors,
  );
  function key_get(braces, cs) {
    let joined = list_join_space(cs);
    let key = braces + "|" + joined;
    return key;
  }
  let right_key = key_get(sequence, colors);
  let right = {
    code,
    braces: sequence,
    colors,
  };
  let wrongs = [];
  let seen = [right_key];
  let programs = batch_get();
  for (let p of programs) {
    let p_code = property_get(p, "question");
    let p_braces = property_get(p, "answer");
    for (let cs of colorings) {
      let key = key_get(p_braces, cs);
      let shown_key = backwards ? p_code + "|" + list_join_space(cs) : key;
      let same = equal(key, right_key);
      let already = list_includes(seen, shown_key);
      if (not(same) && not(already)) {
        list_add(seen, shown_key);
        list_add(wrongs, {
          code: p_code,
          braces: p_braces,
          colors: cs,
        });
      }
    }
  }
  list_shuffle(wrongs);
  let taken = list_take(wrongs, 3);
  let choices = list_concat(taken, [right]);
  list_shuffle(choices);
  let state = {
    answered: false,
  };
  function choice_draw(choice) {
    let c_code = property_get(choice, "code");
    let c_braces = property_get(choice, "braces");
    let c_colors = property_get(choice, "colors");
    let is_right = equal(choice, right);
    let b = app_code_quiz_choice_button(parent, "", on_click);
    let shown = backwards ? c_code : c_braces;
    app_code_code_dark_lines_braces_paired_colors(b, shown, c_colors);
    app_shared_button_code_unframed(b);
    if (is_right) {
      html_data_set_test_happy(b);
    }
    async function on_click() {
      let answered = property_get(state, "answered");
      if (answered) {
        return;
      }
      if (is_right) {
        property_set(state, "answered", true);
        html_data_set_test_happy_remove(b);
        app_shared_button_screen_green_style_assign(b);
        await on_success();
        return;
      }
      on_wrong();
      app_code_lesson_quiz_wrong_set(b);
      html_style_set(b, "pointer-events", "none");
    }
  }
  each(choices, choice_draw);
}
