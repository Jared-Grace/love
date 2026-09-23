import { not } from "./not.mjs";
import { subtract } from "./subtract.mjs";
export function app_replace_goal_hash_shortening_render(letters, hidden) {
  "The word as it reads with the hidden letters left out: one underscore for each stretch of them, however long.";
  let shown = "";
  function letter_add(letter, place) {
    if (not(hidden[place])) {
      shown += letter;
    } else if (not(hidden[subtract(place, 1)])) {
      shown += "_";
    }
  }
  letters.forEach(letter_add);
  return shown;
}
