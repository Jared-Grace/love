import { equal } from "./equal.mjs";
import { text_empty } from "./text_empty.mjs";
export function app_shared_card_image(app_name) {
  "$plain app_name";
  "The name of the picture shown on the card a shared link turns into, as it is spelled beside the page it belongs to.";
  "An app without one gets nothing, and its card appears as words alone, which is what every card here looked like before there were any pictures.";
  if (equal(app_name, "replace")) {
    let r = "replace_card.png";
    return r;
  }
  let none = text_empty();
  return none;
}
