import { availability_editor } from "./availability_editor.mjs";
import { html_body_div } from "./html_body_div.mjs";
export function availability_editor_preview() {
  ("preview the owner's availability editor on the sandbox app at #",
    availability_editor.name,
    ": select ranges, pick a date, and add them as one-time, weekly, or monthly items");
  let root = html_body_div();
  availability_editor(root);
}
