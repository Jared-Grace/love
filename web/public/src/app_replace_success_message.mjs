import { each } from "../../../love/public/src/each.mjs";
import { html_span_text } from "../../../love/public/src/html_span_text.mjs";
import { html_bold } from "../../../love/public/src/html_bold.mjs";
import { list_shuffle_take } from "../../../love/public/src/list_shuffle_take.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
export function app_replace_success_message(p) {
  let p_encouragement = html_div(p);
  const encouragements_choices = [
    "Congratulations",
    "Success",
    "Good job",
    "Great job",
    "Well done",
    "Keep it up",
    "Amazing",
    "Way to go",
    "Awesome",
  ];
  let encouragements = list_shuffle_take(encouragements_choices, 2);
  html_bold(p_encouragement);
  function lambda(encouragement) {
    html_span_text(p_encouragement, encouragement + "! ");
  }
  each(encouragements, lambda);
}
