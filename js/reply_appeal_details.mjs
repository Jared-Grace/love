import { arguments_assert } from "./arguments_assert.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { reply_optional } from "./reply_optional.mjs";
import { text_may_the_lord_exclamation } from "./text_may_the_lord_exclamation.mjs";
import { reply_on_match_prayer } from "./reply_on_match_prayer.mjs";
export function reply_appeal_details() {
  arguments_assert(arguments, 0);
  ("One need told in an appeal for help, each with the line asked of God for it in the prayer that closes the reply.");
  let you = reply_choice(["u", "you"]);
  let know = reply_sequence([you, "know"]);
  let o_know = reply_optional(know);
  let heat = reply_sequence([
    o_know,
    "many",
    "people",
    "and",
    "children's",
    "suffering",
    "from",
    "heat",
    "stroke",
  ]);
  let heal = text_may_the_lord_exclamation(
    "heal and protect the people and the children",
  );
  let heat_said = reply_on_match_prayer(heat, heal);
  let bricks = reply_sequence([
    "some",
    "children's",
    "are",
    "from",
    "bricks",
    "factory",
  ]);
  let free = text_may_the_lord_exclamation(
    "free the children from brick factories",
  );
  let bricks_said = reply_on_match_prayer(bricks, free);
  let no_food = reply_sequence([
    "their",
    "families",
    "has",
    "not",
    "food",
    "for",
    "eating",
  ]);
  let feed = text_may_the_lord_exclamation("feed their families");
  let no_food_said = reply_on_match_prayer(no_food, feed);
  let hand_to_mouth = reply_sequence([
    "in",
    "this",
    "days",
    "they",
    "all",
    "are",
    "hand",
    "to",
    "mouth",
  ]);
  let provide = text_may_the_lord_exclamation("provide for these people");
  let hand_to_mouth_said = reply_on_match_prayer(hand_to_mouth, provide);
  let details = reply_choice([
    heat_said,
    bricks_said,
    no_food_said,
    hand_to_mouth_said,
  ]);
  return details;
}
