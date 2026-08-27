import { arguments_assert } from "./arguments_assert.mjs";
export function bless_told_tap() {
  arguments_assert(arguments, 0);
  ("The one thing the player is ever told outright: what the three verbs are.");
  ("It says the verbs and nothing about the ladder - not because the ladder is a secret,");
  ("but because NONE of it is true yet. Standing here at the start the player has one rung,");
  ("and a line about households would be about something they cannot do.");
  ("The ladder is announced, but at the moment it changes and not before: $fn bless_told_reach");
  ("says a rung out loud as it is earned. This was the other way round once - the game said");
  ("nothing about reach at all, on the argument that discovering it was the whole game - and");
  ("a player reported the opposite, that praying face after face with nothing announced");
  ("reads as an endless chore. So do not restore the silence here by reasoning from this");
  ("line; the silence in THIS line is only about the first screen.");
  ("Turning is a verb like the other two and belongs here with them. It is the one that");
  ("decides who the player can see, and seeing is what a prayer costs - so a player who");
  ("never works out what the four arrows are for can only ever pray for the one wedge of");
  ("street they happened to start facing. That is the whole game withheld by a control");
  ("nobody named.");
  ("All three are the same act, which is why they are worded the same way. A player who");
  ("has read one line knows there is nothing on this screen to learn except where to put a");
  ("finger, and no fourth sentence is coming.");
  ("It never changes, so it is written once where the strip is built rather than laid down");
  ("again on every step the street takes.");
  let told =
    "Tap somebody to pray for them. Tap the ground to walk. Tap an arrow to look that way";
  return told;
}
