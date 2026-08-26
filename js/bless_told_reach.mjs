import { arguments_assert } from "./arguments_assert.mjs";
import { bless_rung_phrase } from "./bless_rung_phrase.mjs";
import { text_combine } from "./text_combine.mjs";
export function bless_told_reach(rung) {
  arguments_assert(arguments, 1);
  ("The line the player is shown the moment a rung is earned - that praying for one person");
  ("now prays for everyone in their household, and later for everyone on their block.");
  ("This game used to say nothing at all about the ladder, on the argument that working out");
  ("how far a prayer reaches was the whole of what there was to discover. A player found");
  ("otherwise: praying face after face with nothing announced reads as one endless chore,");
  ("and the climb - which is the game's only reward - happened invisibly. So the rung is");
  ("now said out loud at the moment it is earned. What is still not given away is what to");
  ("do next, or where to go; the player is told what they have, not what to spend it on.");
  ("It is worded as what happens FROM NOW ON rather than as something unlocked, because");
  ("that is what actually changed: the act is the same act it always was - look at somebody");
  ("and pray - and the only thing different is how far it carries.");
  ("The place is named the same way the prayer names it, through the person rather than");
  ("through the ground, so the sentence the player reads here and the sentence they read in");
  ("the prayer a moment later are about the same thing and cannot drift apart.");
  let where = bless_rung_phrase(rung);
  let line = text_combine(
    "From now on, praying for somebody prays for everyone ",
    where,
  );
  return line;
}
