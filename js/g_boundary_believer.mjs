import { property_get } from "./property_get.mjs";
import { g_boundary_believer_neighbor } from "./g_boundary_believer_neighbor.mjs";
import { g_boundary_seen_again } from "./g_boundary_seen_again.mjs";
import { g_boundary_rather_not } from "./g_boundary_rather_not.mjs";
import { g_boundary_know_better } from "./g_boundary_know_better.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_concat } from "./list_concat.mjs";
import { not } from "./not.mjs";
import { g_boundary_softener } from "./g_boundary_softener.mjs";
export function g_boundary_believer(met, door) {
  "What a believer says instead of answering - the same beat as the unbeliever boundary, with different armour.";
  "An unbeliever guards a topic because you are close to a stranger. A believer guards it with words that are TRUE, which is what makes the wall hard to see: praise, a reading habit, a doctrine that really does hold. Nothing here is a lie, and none of it is an answer.";
  "The armour differs by which door was opened. Asked how they ARE, they answer with blessing or with how busy the church keeps them. Asked about their WALK, they answer with what they do and with what is true of them in Christ - or they hand back a question about the Bible, which is the safest door and the one they can open themselves. Asked about their NEIGHBOUR, they answer in the general, because a particular would name somebody.";
  "The deepest wall is the walk, and it is HIGHEST in the person who has believed longest - a new convert admits not knowing how to pray at no cost, while forty years of everyone assuming you are fine is a reputation to lose.";
  let softener = g_boundary_softener();
  let r2 = g_boundary_believer_neighbor(softener);
  let neighbor = property_get(r2, "neighbor");
  let heart = property_get(r2, "heart");
  let soul = property_get(r2, "soul");
  let by_door = {
    heart,
    soul,
    neighbor,
  };
  let armour = by_door[door];
  if (not(armour)) {
    armour = heart;
  }
  let r30 = g_boundary_seen_again();
  let r26 = list_random_item([r30, "Always good to see you. "]);
  let r31 = g_boundary_rather_not();
  let r27 = list_random_item([
    r31,
    "That one I'd like to keep to myself a while longer.",
  ]);
  let combined = text_combine_multiple([r26, r27]);
  let contextual = [combined];
  if (not(met)) {
    let r28 = list_random_item([
      "It's good to meet another believer. ",
      "Praise God, a brother in the Lord. ",
    ]);
    let r32 = g_boundary_know_better();
    let r29 = list_random_item([r32, "Give me a little time on that one."]);
    let combined13 = text_combine_multiple([r28, r29]);
    contextual = [combined13];
  }
  let options = list_concat(armour, contextual);
  let r = list_random_item(options);
  return r;
}
