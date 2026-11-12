import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_add } from "./list_add.mjs";
export function app_reply_rules_case_items_split(approved) {
  arguments_assert(arguments, 1);
  ("The words a test was approved in, cut back into the message and each reply it was made of. A reply can run over several lines - a prayer opens on one line and asks on the next - so a line that does not begin with message: or reply: belongs to the one above it.");
  ("★ A REPLY IS COMPARED WHOLE, SO A REWORDED REPLY IS PAIRED WITH ITS OLD WORDING. Cut at every line break instead, a reply that gained a line break no longer has as many lines as before, nothing pairs, and the whole reply is drawn as gone and come for a change of two characters.");
  let items = [];
  let lines = text_split_newline(approved);
  for (let line of lines) {
    let starts =
      text_starts_with(line, "message: ") || text_starts_with(line, "reply: ");
    if (starts || list_empty_is(items)) {
      list_add(items, line);
      continue;
    }
    let last = subtract(items.length, 1);
    items[last] = items[last] + "\n" + line;
  }
  return items;
}
