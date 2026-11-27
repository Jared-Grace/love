import { app_learn_js_container_medium_blue } from "./app_learn_js_container_medium_blue.mjs";
import { app_learn_js_label_text } from "./app_learn_js_label_text.mjs";
import { html_div } from "./html_div.mjs";
export function app_learn_js_lesson_above(
  parent,
  label,
  question,
  on_question,
) {
  "2026-11-27, at the human's asking: the card no longer narrows the space between the lines of the box it is put in. It did, and 319 of 692 lessons had their writing run together wherever a card shared a box with paragraphs. The example on the examples screen, the one place that wanted it, now asks for it itself";
  let container = app_learn_js_container_medium_blue(parent);
  app_learn_js_label_text(container, label);
  let container_question = html_div(container);
  ("the whole card is handed over as well as the place the question goes, so a lesson that needs to say something ABOVE the label has somewhere to put it; every lesson that does not need it simply takes two arguments and never sees the third");
  on_question(container_question, question, container);
  let r = {
    container,
    container_question,
  };
  return r;
}
