import { multiply } from "./multiply.mjs";
import { bless_blocks_count } from "./bless_blocks_count.mjs";
import { bless_place_people } from "./bless_place_people.mjs";
export function app_g_bless_people_count() {
  "How many people are about in the world.";
  "Exactly enough to fill the blocks that were built and not one more, and it is COUNTED";
  "rather than chosen. Everybody has an address whether or not there is a door for it, so";
  "a crowd larger than the blocks hold puts people at doors nobody laid down; a smaller";
  "one leaves a block that can never be finished, because the last household in it is";
  "made of people who do not exist. Either way the player is asked for something the world";
  "cannot give, and nothing would say so.";
  "That also makes the crowd follow the ground. Build a third block and sixty more people";
  "arrive to live on it, with no second number to remember to change.";
  "It is still the size a walkable street can carry, and that limit sits on the block";
  "count rather than here. A person blocks the tile they stand on, so what matters is how";
  "many stand on one pavement - and that is sixty however many blocks there are.";
  let blocks = bless_blocks_count();
  let each_block = bless_place_people("block");
  let count = multiply(blocks, each_block);
  return count;
}
