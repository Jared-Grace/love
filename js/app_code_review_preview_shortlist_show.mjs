import { arguments_assert } from "./arguments_assert.mjs";
import { html_body_div } from "./html_body_div.mjs";
import { html_div } from "./html_div.mjs";
import { app_code_review_preview_question_show } from "./app_code_review_preview_question_show.mjs";
import { app_code_review_preview_pickers } from "./app_code_review_preview_pickers.mjs";
export function app_code_review_preview_shortlist_show() {
  arguments_assert(arguments, 0);
  let root = html_body_div();
  let picker = html_div(root);
  let stage = html_div(root);
  let question_show = app_code_review_preview_question_show(stage);
  let shortlist_show = app_code_review_preview_pickers(
    picker,
    stage,
    question_show,
  );
  return shortlist_show;
}
