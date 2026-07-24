import { property_get } from "./property_get.mjs";
import { example_transform_card_dom } from "./example_transform_card_dom.mjs";
import { example_rejection_card_dom } from "./example_rejection_card_dom.mjs";
import { example_files_card_dom } from "./example_files_card_dom.mjs";
// Render one example into the parent, dispatching on kind. The DOM twin of
// example_html.
export function example_card_dom(parent, example) {
  let kind = property_get(example, "kind");
  if (kind === "rejection") {
    return example_rejection_card_dom(parent, example);
  }
  if (kind === "files") {
    return example_files_card_dom(parent, example);
  }
  return example_transform_card_dom(parent, example);
}
