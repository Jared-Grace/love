import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
import { list_set_nested_y_x } from "./list_set_nested_y_x.mjs";
export function app_g_bless_tiles_pave(rows, tiles, item) {
  arguments_assert(arguments, 3);
  ("Writes one kind of ground into a world at the tiles named - pavement where a pavement");
  ("goes, wall where a building stands.");
  ("A place in this game is only ever the tiles it covers and the ground it is made of, so");
  ("laying a pavement and raising a building are one operation with a different word handed");
  ("in. Two functions here would have been the same lines twice with a different string in");
  ("them.");
  ("What it writes over is not asked about, which is deliberate: a building stands where the");
  ("world says it stands, so ground that was water becomes ground you cannot walk through");
  ("rather than a hole in the block. The old street did the same in the other direction -");
  ("paving over water made land - and both are the same rule, that the block is laid on the");
  ("world and not fitted into it.");
  ("Hand it tiles that are inside the rows. A tile outside them is written where the ground");
  ("is not, so nothing is drawn there and nothing says so - and the game would go on to name");
  ("a whole block with part of it never on the screen. Keeping the block inside the world is");
  ("the job of whoever decides where it goes, which is the only place that knows how large");
  ("the world is.");
  ("The rows are changed in place, so ask for the coordinates again afterwards - a list of");
  ("tiles worked out before this ran still calls these squares whatever they used to be.");
  function tile_pave(tile) {
    list_set_nested_y_x(rows, tile, item);
  }
  each(tiles, tile_pave);
}
