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
  let heart = [
    text_combine_multiple([
      list_random_item(["I'm blessed", "I'm well", "I'm alright"]),
      ", ",
      list_random_item(["honestly", "praise God", "thank you"]),
      ". ",
      text_random_or_empty("God's been good to me."),
    ]),
    text_combine_multiple([
      list_random_item([
        "Oh, I can't complain",
        "I've nothing to complain about",
      ]),
      ". ",
      text_random_or_empty(
        list_random_item([
          "The Lord's been good.",
          "Others have it far harder.",
        ]),
      ),
    ]),
    text_combine_multiple([
      "Fine - ",
      list_random_item(["busy", "run off my feet", "up to my eyes"]),
      ". ",
      list_random_item([
        "There's always something on at church.",
        "We've the children's meeting Thursday and I said I'd bake.",
      ]),
    ]),
    text_combine_multiple([
      "I'm well. How are ",
      list_random_item(["you", "you, though"]),
      "? ",
      text_random_or_empty("You're the one doing all the visiting."),
    ]),
  ];
  let soul = [
    text_combine_multiple([
      list_random_item(["Good", "Good, good", "No complaints there"]),
      ". ",
      "I'm ",
      list_random_item(["up at five", "up early", "at it first thing"]),
      " most mornings - ",
      list_random_item([
        "through the Psalms at the moment",
        "working through the Gospels",
        "a chapter a day, never miss",
      ]),
      ".",
    ]),
    text_combine_multiple([
      list_random_item(["Well, my standing", "My standing", "My position"]),
      " ",
      list_random_item([
        "doesn't rest on how I feel about it",
        "isn't decided by my feelings",
      ]),
      ".",
      softener,
    ]),
    text_combine_multiple([
      list_random_item(["Up and down", "The usual", "Same as ever"]),
      ". ",
      text_random_or_empty("You know how it is."),
    ]),
    text_combine_multiple([
      list_random_item(["Actually - could I ask you", "Could I ask you"]),
      " something about ",
      list_random_item(["the passage", "what you preached", "a verse"]),
      " instead?",
    ]),
  ];
  let neighbor = [
    text_combine_multiple([
      "I ",
      list_random_item(["try to love everyone", "try to treat people right"]),
      ", ",
      list_random_item(["I think", "as best I can"]),
      ".",
    ]),
    text_combine_multiple([
      "There's ",
      list_random_item(["no one", "nobody"]),
      " I'd say I ",
      list_random_item(["have anything against", "hold anything against"]),
      ".",
    ]),
    text_combine_multiple([
      "We ",
      list_random_item(["gave to the collection", "helped with the meal"]),
      " ",
      list_random_item(["this month", "last week"]),
      ".",
      softener,
    ]),
  ];
  let by_door = { heart, soul, neighbor };
  let armour = by_door[door];
  if (not(armour)) {
    armour = heart;
  }
  let contextual = [
    text_combine_multiple([
      list_random_item([
        "It's good to see you again. ",
        "Always good to see you. ",
      ]),
      list_random_item([
        "I'd still rather not get into that, though.",
        "That one I'd like to keep to myself a while longer.",
      ]),
    ]),
  ];
  if (not(met)) {
    contextual = [
      text_combine_multiple([
        list_random_item([
          "It's good to meet another believer. ",
          "Praise God, a brother in the Lord. ",
        ]),
        list_random_item([
          "Maybe once I know you a little better?",
          "Give me a little time on that one.",
        ]),
      ]),
    ];
  }
  let options = list_concat(armour, contextual);
  let r = list_random_item(options);
  return r;
}
