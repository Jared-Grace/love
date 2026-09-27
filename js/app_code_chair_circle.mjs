import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function app_code_chair_circle(element) {
  arguments_assert(arguments, 1);
  ("a chair emoji's white circle, centred in its cell: the one look every chair picture gives its chairs, so the plain chairs and the numbered ones are seen to be the same chairs, asked by the human 2026-09-27");
  html_style_assign(element, {
    display: "flex",
    "align-items": "center",
    "justify-content": "center",
    width: "1.5em",
    height: "1.5em",
    "margin-left": "auto",
    "margin-right": "auto",
    "border-radius": "50%",
    background: "white",
  });
}
