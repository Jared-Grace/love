import { list_random_item } from "./list_random_item.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_space_nb } from "./text_space_nb.mjs";
import { emoji_party_popper } from "./emoji_party_popper.mjs";
import { emoji_party_face } from "./emoji_party_face.mjs";
import { emoji_trophy } from "./emoji_trophy.mjs";
import { emoji_medal_star } from "./emoji_medal_star.mjs";
import { emoji_clap } from "./emoji_clap.mjs";
export function app_code_review_complete_message() {
  "a random loving line shown when a review is fully completed, wrapped on each side with a celebration emoji";
  let messages = [
    "You passed every quiz in this review — beautiful work",
    "You finished the whole review — wonderful job",
    "You reviewed it all — well done",
    "Every question complete — you did it",
    "All the way through — you should be proud",
    "You made it through the whole review — amazing",
  ];
  let message = list_random_item(messages);
  let emojis = [
    emoji_party_popper,
    emoji_party_face,
    emoji_trophy,
    emoji_medal_star,
    emoji_clap,
  ];
  let emoji_get = list_random_item(emojis);
  let emoji = emoji_get();
  let nb = text_space_nb();
  let text = text_combine_multiple([emoji, nb, message, nb, emoji]);
  return text;
}
