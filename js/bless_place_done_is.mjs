import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { list_all_is } from "./list_all_is.mjs";
import { bless_blessed_is } from "./bless_blessed_is.mjs";
import { bless_rung_before } from "./bless_rung_before.mjs";
import { bless_place_members } from "./bless_place_members.mjs";
export function bless_place_done_is(blessed, rung, place) {
  arguments_assert(arguments, 3);
  ("Whether this place is FINISHED - prayed for by name, or else every single thing inside");
  ("it finished.");
  ("The other question about a place asks only whether its own name was said, and that is");
  ("the narrow one on purpose. This is the wider one it was left room for: done from below.");
  ("Both are needed because a prayer names exactly one rung, and the player climbs. Three");
  ("prayers over three people finish a household without the word household ever being");
  ("said; four such households finish a building the same way. Asked only for the name, the");
  ("game would decide that a building whose every last resident had been prayed for was not");
  ("done - and since everybody in it is already lit, there is nobody left to pray for who");
  ("would ever change that answer. That is a block that cannot be earned, which is exactly");
  ("what the ladder measured before this existed.");
  ("It asks the SAME question the mark over somebody's head asks, one rung up. A player is");
  ("shown lit and dark faces and told to go and find the dark ones; finishing what they");
  ("were shown has to be what finishes the place, or the game is asking for something it");
  ("never displayed.");
  ("The name is asked FIRST, and that is what keeps the walk small. A place already blessed");
  ("outright stops it dead, and the first unfinished thing inside stops it too - so it only");
  ("ever descends through the corner of the world the player has actually been praying");
  ("over, never through the whole of a county nobody has visited.");
  ("A person is the bottom and holds nobody, so there is nothing below to finish them: they");
  ("are done when their own name has been said and not otherwise.");
  let named = bless_blessed_is(blessed, rung, place);
  if (named) {
    return true;
  }
  let inside = bless_rung_before(rung);
  let bottom = not(inside);
  if (bottom) {
    return false;
  }
  let members = bless_place_members(rung, place);
  function member_done(member) {
    let done = bless_place_done_is(blessed, inside, member);
    return done;
  }
  let all = list_all_is(members, member_done);
  return all;
}
