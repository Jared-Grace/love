import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_shared_color_red } from "./app_shared_color_red.mjs";
export function app_shared_problem_mark(component, marked) {
  arguments_assert(arguments, 2);
  ('Rings a part of the form in the shared red while it still needs something, and takes the ring off once it does (human: "circle it in red until satisfies check").');
  ("An outline, not a border: it sits outside the box, so ringing a part never moves anything around it.");
  html_style_assign(component, {
    outline: marked ? "3px solid " + app_shared_color_red() : "",
    "outline-offset": marked ? "4px" : "",
    "border-radius": marked ? "8px" : "",
  });
}
