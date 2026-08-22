import { g_boundary_believer_r } from "./g_boundary_believer_r.mjs";
import { g_boundary_softener } from "./g_boundary_softener.mjs";
export function g_boundary_believer(met, door) {
  "What a believer says instead of answering - the same turn as the unbeliever boundary, with different armour.";
  "An unbeliever guards a topic because you are close to a stranger. A believer guards it with words that are TRUE, which is what makes the wall hard to see: praise, a reading habit, a doctrine that really does hold. Nothing here is a lie, and none of it is an answer.";
  "The armour differs by which door was opened. Asked how they ARE, they answer with blessing or with how busy the church keeps them. Asked about their WALK, they answer with what they do and with what is true of them in Christ - or they hand back a question about the Bible, which is the safest door and the one they can open themselves. Asked about their NEIGHBOUR, they answer in the general, because a particular would name somebody.";
  "The deepest wall is the walk, and it is HIGHEST in the person who has believed longest - a new convert admits not knowing how to pray at no cost, while forty years of everyone assuming you are fine is a reputation to lose.";
  let softener = g_boundary_softener();
  let r = g_boundary_believer_r(softener, door, met);
  return r;
}
