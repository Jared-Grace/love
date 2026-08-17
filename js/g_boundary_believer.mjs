import { property_get } from "./property_get.mjs";
import { g_boundary_believer_soul } from "./g_boundary_believer_soul.mjs";
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
  let r2 = list_random_item(["I'm blessed", "I'm well", "I'm alright"]);
  let r3 = list_random_item(["honestly", "praise God", "thank you"]);
  let r4 = g_boundary_believer_soul(r2, r3, softener);
  let soul = property_get(r4, "soul");
  let heart = property_get(r4, "heart");
  let r20 = list_random_item([
    "try to love everyone",
    "try to treat people right",
  ]);
  let r21 = list_random_item(["I think", "as best I can"]);
  let combined = text_combine_multiple(["I ", r20, ", ", r21, "."]);
  let r22 = list_random_item(["no one", "nobody"]);
  let r23 = list_random_item([
    "have anything against",
    "hold anything against",
  ]);
  let combined10 = text_combine_multiple([
    "There's ",
    r22,
    " I'd say I ",
    r23,
    ".",
  ]);
  let r24 = list_random_item([
    "gave to the collection",
    "helped with the meal",
  ]);
  let r25 = list_random_item(["this month", "last week"]);
  let combined11 = text_combine_multiple(["We ", r24, " ", r25, ".", softener]);
  let neighbor = [combined, combined10, combined11];
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
  let combined12 = text_combine_multiple([r26, r27]);
  let contextual = [combined12];
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
