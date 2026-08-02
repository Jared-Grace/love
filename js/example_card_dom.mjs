import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
import { example_transform_card_dom } from "./example_transform_card_dom.mjs";
import { example_rejection_card_dom } from "./example_rejection_card_dom.mjs";
import { example_files_card_dom } from "./example_files_card_dom.mjs";
("Render one example into the parent, dispatching on kind. The DOM twin of");
("example_html.");
export function example_card_dom(parent, example) {
  let kind = property_get(example, "kind");
  if (equal(kind, "rejection")) {
    let card = example_rejection_card_dom(parent, example);
    return card;
  }
  if (equal(kind, "files")) {
    let card2 = example_files_card_dom(parent, example);
    return card2;
  }
  let card3 = example_transform_card_dom(parent, example);
  return card3;
}
