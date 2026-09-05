import { arguments_assert } from "./arguments_assert.mjs";
import { bless_hash_map } from "./bless_hash_map.mjs";
import { app_g_bless_dev_opening_is } from "./app_g_bless_dev_opening_is.mjs";
import { app_g_bless_tile_size_map } from "./app_g_bless_tile_size_map.mjs";
import { app_g_bless_tile_size_playing } from "./app_g_bless_tile_size_playing.mjs";
export function app_g_bless_tile_size() {
  arguments_assert(arguments, 0);
  ("How large one tile is drawn in the praying game on this visit - the stretch of street in");
  ("front of the player ordinarily, and the whole world at once when the address asked for");
  ("the map.");
  ("The question is asked HERE, in the one place the game already asks how big a tile is, so");
  ("every part of the game that ever puts the camera back where it was gets the right answer");
  ("without knowing the question was asked. Three of them do: the page sets it before drawing");
  ("anything, the way home after a prayer comes back to it, and the pull-back that holds a");
  ("group of faces falls back to it when nothing needs pulling back. Branched at each of");
  ("those instead, the one that got missed would take the map view away the first time the");
  ("player prayed, and leave them at the playing distance with no way back out.");
  ("It is a DEV opening rather than something anybody may type. Seeing how far you can see");
  ("is the whole mechanic of this game, and a word that hands over the entire world at once");
  ("is that mechanic switched off - so unlike an opening that only skips a door, this one");
  ("gives rather than takes away, and it goes behind the same gate every giving opening does.");
  ("Nothing about the game changes apart from the distance. The player still stands where");
  ("they stand and still walks, prays and is answered; the street is simply drawn small");
  ("enough to be seen whole, which is what a flat map calls being far off.");
  let word = bless_hash_map();
  let overview = app_g_bless_dev_opening_is([word]);
  if (overview) {
    let far = app_g_bless_tile_size_map();
    return far;
  }
  let size = app_g_bless_tile_size_playing();
  return size;
}
