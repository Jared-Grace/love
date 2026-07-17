import { property_get } from "./property_get.mjs";
import { example_transform_html } from "./example_transform_html.mjs";
import { example_rejection_html } from "./example_rejection_html.mjs";
export function example_html(example) {
  let kind = property_get(example, "kind");
  if (kind === "rejection") {
    return example_rejection_html(example);
  }
  return example_transform_html(example);
}
