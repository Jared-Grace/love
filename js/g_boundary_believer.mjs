import { list_random_item } from "./list_random_item.mjs";
import { text_random_or_empty } from "./text_random_or_empty.mjs";
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
  let r4 = text_random_or_empty(" God's been good to me.");
  let combined = text_combine_multiple([r2, ", ", r3, ".", r4]);
  let r5 = list_random_item([
    "Oh, I can't complain",
    "I've nothing to complain about",
  ]);
  let t = list_random_item([
    " The Lord's been good.",
    " Others have it far harder.",
  ]);
  let r6 = text_random_or_empty(t);
  let combined2 = text_combine_multiple([r5, ".", r6]);
  let r7 = list_random_item(["busy", "run off my feet", "up to my eyes"]);
  let r8 = list_random_item([
    "There's always something on at church.",
    "We've the children's meeting Thursday and I said I'd bake.",
  ]);
  let combined3 = text_combine_multiple(["Fine - ", r7, ". ", r8]);
  let r9 = list_random_item(["you", "you, though"]);
  let r10 = text_random_or_empty(" You're the one doing all the visiting.");
  let combined4 = text_combine_multiple(["I'm well. How are ", r9, "?", r10]);
  let heart = [combined, combined2, combined3, combined4];
  let r11 = list_random_item(["Good", "Good, good", "No complaints there"]);
  let r12 = list_random_item(["up at five", "up early", "at it first thing"]);
  let r13 = list_random_item([
    "through the Psalms at the moment",
    "working through the Gospels",
    "a chapter a day, never miss",
  ]);
  let combined5 = text_combine_multiple([
    r11,
    ". ",
    "I'm ",
    r12,
    " most mornings - ",
    r13,
    ".",
  ]);
  let r14 = list_random_item([
    "Well, my standing",
    "My standing",
    "My position",
  ]);
  let r15 = list_random_item([
    "doesn't rest on how I feel about it",
    "isn't decided by my feelings",
  ]);
  let combined6 = text_combine_multiple([r14, " ", r15, ".", softener]);
  let r16 = list_random_item(["Up and down", "The usual", "Same as ever"]);
  let r17 = text_random_or_empty(" You know how it is.");
  let combined7 = text_combine_multiple([r16, ".", r17]);
  let r18 = list_random_item(["Actually - could I ask you", "Could I ask you"]);
  let r19 = list_random_item(["the passage", "what you preached", "a verse"]);
  let combined8 = text_combine_multiple([
    r18,
    " something about ",
    r19,
    " instead?",
  ]);
  let soul = [combined5, combined6, combined7, combined8];
  let r20 = list_random_item([
    "try to love everyone",
    "try to treat people right",
  ]);
  let r21 = list_random_item(["I think", "as best I can"]);
  let combined9 = text_combine_multiple(["I ", r20, ", ", r21, "."]);
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
  let neighbor = [combined9, combined10, combined11];
  let by_door = {
    heart,
    soul,
    neighbor,
  };
  let armour = by_door[door];
  if (not(armour)) {
    armour = heart;
  }
  let r26 = list_random_item([
    "It's good to see you again. ",
    "Always good to see you. ",
  ]);
  let r27 = list_random_item([
    "I'd still rather not get into that, though.",
    "That one I'd like to keep to myself a while longer.",
  ]);
  let combined12 = text_combine_multiple([r26, r27]);
  let contextual = [combined12];
  if (not(met)) {
    let r28 = list_random_item([
      "It's good to meet another believer. ",
      "Praise God, a brother in the Lord. ",
    ]);
    let r29 = list_random_item([
      "Maybe once I know you a little better?",
      "Give me a little time on that one.",
    ]);
    let combined13 = text_combine_multiple([r28, r29]);
    contextual = [combined13];
  }
  let options = list_concat(armour, contextual);
  let r = list_random_item(options);
  return r;
}
