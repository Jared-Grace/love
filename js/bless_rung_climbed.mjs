import { arguments_assert } from "./arguments_assert.mjs";
import { bless_rung_earned_is } from "./bless_rung_earned_is.mjs";
import { bless_rung_after } from "./bless_rung_after.mjs";
export function bless_rung_climbed(blessed, person, rung) {
  arguments_assert(arguments, 3);
  ("The rung the player stands on once the prayer just said has been credited for");
  ("everything it finished - which may be more than one step.");
  ("One prayer can finish two places at once, and the reason is the ladder rather than an");
  ("oddity. The last person in a household is also the last person in their building when");
  ("their household was the building's last unfinished one; that same prayer is then the");
  ("last of the block if the building was the block's last. Credited a single step, the");
  ("player is handed the building and the block quietly falls away - nobody is left dark,");
  ("so no later prayer can ever hand it over. Measured before this existed: a crowd met in");
  ("a scattered order finished with every face lit and the block unearned, because the one");
  ("prayer that completed it completed the building in the same breath.");
  ("Asking again from the rung just reached is what makes it whole. Each answer is asked");
  ("of the record as it now stands, so nothing is assumed about how far a prayer reaches -");
  ("a step is taken only where the place above is genuinely complete.");
  ("It stops of its own accord and needs no count. The ladder is finite and every turn");
  ("moves one rung outward, and the top earns nothing because there is nothing above it -");
  ("so the walk ends either at the first place still unfinished or at the world itself.");
  let reached = rung;
  let earned = bless_rung_earned_is(blessed, person, reached);
  while (earned) {
    reached = bless_rung_after(reached);
    earned = bless_rung_earned_is(blessed, person, reached);
  }
  return reached;
}
