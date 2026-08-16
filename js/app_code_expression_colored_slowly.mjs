import { app_code_expression_colored_over } from "./app_code_expression_colored_over.mjs";
import { app_shared_animation_duration } from "./app_shared_animation_duration.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_expression_colored_slowly(component) {
  arguments_assert(arguments, 1);
  ("say that whatever this piece is coloured next, it takes on that colour over the app's one while rather than wearing it from one frame to the next");
  ("The whole while, because this is the colouring that carries news: a block on the line turning blue is the learner's own choice being answered, and it is watched arriving.");
  let duration = app_shared_animation_duration();
  app_code_expression_colored_over(component, duration);
}
