import { bless_building_cycle_per_block_checked } from "./bless_building_cycle_per_block_checked.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function bless_building_storeys_cycle() {
  arguments_assert(arguments, 0);
  ("How many floors each building along a street has, read in turn - the first stands one");
  ("storey high, the next two are two, the fourth is one again and the last is two.");
  ("A building that goes UP does not have to go along. Nine people live behind every");
  ("building whatever it looks like, so a second floor is the same nine families over half");
  ("the frontage - and half the frontage is the whole reason for it. Every house being one");
  ("storey made the street a very long line of very wide fronts, and a player walking it saw");
  ("one house at a time and had to walk to be told there was another.");
  ("Mixed rather than all of one, and the mix is what makes either of them readable. A row");
  ("where everything is two floors says nothing by being two floors; a tall house beside a");
  ("low one says which is which, and says it without a word, from across the street.");
  ("A repeating RUN and not a random draw, for the same reason the door counts are one: the");
  ("street has to be the same street on every reload, or a record of who has been prayed for");
  ("stops meaning anything the moment the page is refreshed.");
  ("Every entry is one or two. Three would be a building nine squares deep and three across");
  ("standing on a street four squares wide, which reads as a tower rather than as a terrace,");
  ("and there is no third band of wall to draw it with - the row behind the top floor is the");
  ("roof, and a roof is what says the building has a top.");
  ("There are exactly as many entries here as there are buildings on a block, and that is");
  ("the same agreement the door counts keep. Counted round, the sixth building is read as");
  ("the first, so every block is the same street and the part of the game that draws one");
  ("only ever knows where a building stands in the row.");
  let cycle = [1, 2, 2, 1, 2];
  let r = bless_building_cycle_per_block_checked(cycle);
  return r;
}
