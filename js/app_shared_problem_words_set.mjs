import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { html_text_content_set } from "./html_text_content_set.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_shared_color_red } from "./app_shared_color_red.mjs";
export function app_shared_problem_words_set(status, words) {
  arguments_assert(arguments, 2);
  ('Says what a form still needs, in the shared red, on the line kept for it; empty words clear the line and its colour. One place, so every form\'s problem reads alike (human, 2026-11-28: "for form validation, styling should be DRY with itself and other apps?").');
  ("EVERY PROBLEM GETS THE X (human, 2026-11-28: \"there's a red border around the input that's wrong - also there isn't an X for that one\"): the ❌ and bold the host's Confirm already showed are put on here, so a ringed box and its words always come together.");
  let empty = equal(words, "");
  html_text_content_set(status, empty ? "" : "❌ " + words);
  html_style_assign(status, {
    color: empty ? "" : app_shared_color_red(),
    "font-weight": empty ? "" : "bold",
  });
}
