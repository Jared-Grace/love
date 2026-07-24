import { property_get } from "./property_get.mjs";
import { example_card_container_dom } from "./example_card_container_dom.mjs";
import { example_card_title_note_dom } from "./example_card_title_note_dom.mjs";
import { example_label_dom } from "./example_label_dom.mjs";
import { example_chip_dom } from "./example_chip_dom.mjs";
import { example_function_chip_dom } from "./example_function_chip_dom.mjs";
import { example_command_text } from "./example_command_text.mjs";
("The shared head of every example card: the card container plus title, note, the FUNCTION");
("chip (a link to source), and — only when the tool has an alias — the derived COMMAND chip.");
("Both the transform card and the multi-file card open with this identical block, then append");
("their own before/after body. Returns the card so the caller keeps building on it.");
export function example_card_header_dom(parent, example) {
  let title = property_get(example, "title");
  let note = property_get(example, "note");
  let fn = property_get(example, "fn");
  let alias = property_get(example, "alias");
  let args = property_get(example, "args");
  let card = example_card_container_dom(parent);
  example_card_title_note_dom(card, title, note, alias);
  example_label_dom(card, "function");
  example_function_chip_dom(card, fn);
  if (alias) {
    example_label_dom(card, "command");
    example_chip_dom(card, example_command_text(alias, args));
  }
  return card;
}
