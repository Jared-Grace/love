import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine } from "./text_combine.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
export function app_shared_button_wide_text_combine(
  parent,
  left,
  right,
  lambda,
) {
  arguments_assert(arguments, 4);
  ("A button across the width of its column, labelled by two pieces of text");
  ("written one after the other.");
  ("Expand all, Collapse all, Open chapter, Show me the answer, Search. Every one");
  ("of them is a small picture followed by words, and the picture is chosen apart");
  ("from the words because the two come from different places. The joined label is");
  ("only ever handed straight to the button.");
  let text = text_combine(left, right);
  let button = app_shared_button_wide(parent, text, lambda);
  return button;
}
