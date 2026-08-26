import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_container_padded_x } from "./app_code_container_padded_x.mjs";
import { html_div } from "./html_div.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_shared_success_message } from "./app_shared_success_message.mjs";
import { app_code_review_hide_success } from "./app_code_review_hide_success.mjs";
export function app_code_review_containers(root) {
  arguments_assert(arguments, 1);
  ("the frame one review question is drawn in: the padded column, the line the progress bar goes on, the well done waiting out of sight, and the blue card the question itself is drawn in");
  ("Written down once because two screens draw it - the review a learner works through, and the sandbox that opens a single question of one straight away. Two copies would let the sandbox drift into standing a question in a frame no learner is ever shown, which is the one thing that screen must not do, since the whole of its worth is that what is on it is what is out there.");
  ("The well done is drawn and then hidden rather than left out until it is wanted, so the room it takes on the screen is taken from the start and nothing under it moves when a question is answered right.");
  let g = app_code_container_padded_x(root);
  let progress = html_div(g);
  let success_container = html_div(g);
  let c = app_code_container_light_blue(g);
  app_shared_success_message(success_container);
  app_code_review_hide_success(success_container);
  let r = {
    g,
    progress,
    success_container,
    c,
  };
  return r;
}
