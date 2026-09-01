import { app_shared_game_map_square_flood } from "./app_shared_game_map_square_flood.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_size } from "./list_size.mjs";
import { list_get } from "./list_get.mjs";
import { multiply } from "./multiply.mjs";
import { floor } from "./floor.mjs";
import { g_water } from "./g_water.mjs";
import { subtract } from "./subtract.mjs";
import { g_coordinates } from "./g_coordinates.mjs";
import { list_random_item } from "./list_random_item.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_remove } from "./list_remove.mjs";
import { each_range } from "./each_range.mjs";
export function app_shared_game_map_generate_waters(rows) {
  arguments_assert(arguments, 1);
  ("Floods three tenths of a map with water, in one connected body that grows out from a");
  ("square picked at random. Writes into the rows it is given and hands nothing back.");
  ("It grows a square at a time from the EDGE of what is already water, which is what makes");
  ("one lake with a coastline instead of three tenths of the map speckled blue. Every step");
  ("picks at random from the squares that touch the water along a side, so the shape wanders");
  ("rather than spreading as a disc.");
  ("The edge is KEPT as the water grows rather than looked for each time, and that is the");
  ("whole of why this is fast. Looked for, every step measured every free square on the map");
  ("against every square of water so far - which is the same list of squares walked again and");
  ("again, at a cost that climbs with the fourth power of how wide the map is. It was under a");
  ("second when the map was small and it was the loading spinner by the time the map was");
  ("fifty across; a map only a fifth wider than that would have taken twice as long again.");
  ("A square joins the edge the moment a square beside it turns to water, and leaves it when");
  ("it is picked. So the edge holds exactly the free squares touching water - the same set");
  ("the old walk went looking for, and picked from the same way - and this draws the same");
  ("maps, just without finding the set from scratch each time.");
  ("Nothing can be queued twice, which matters for more than tidiness: a square with three");
  ("sides already wet would otherwise sit in the edge three times and be three times as");
  ("likely to be picked, and the water would bias towards filling in its own bays.");
  ("It stops early if the edge ever runs dry, which cannot happen at three tenths of a map");
  ("but is the honest thing to write rather than a loop that would spin.");
  let height = list_size(rows);
  let row_first = list_get(rows, 0);
  let width = list_size(row_first);
  let total = multiply(height, width);
  let p = multiply(total, 0.3);
  let water_count = floor(p);
  let item_water = g_water();
  let taken = new Set();
  let edge = [];
  let edge_keys = new Set();
  ("A square is remembered by its number counting along the rows rather than by its two");
  ("coordinates written out, so that two squares are the same square when the numbers match.");
  ("Objects would not compare that way, and text costs a string built per square per side.");
  let coordinates = g_coordinates(rows);
  let first = list_random_item(coordinates);
  app_shared_game_map_square_flood({
    spot: first,
    rows,
    item_water,
    width,
    taken,
    height,
    edge_keys,
    edge,
  });
  function spread() {
    let dry = list_empty_is(edge);
    if (dry) {
      return;
    }
    let spot = list_random_item(edge);
    list_remove(edge, spot);
    app_shared_game_map_square_flood({
      spot,
      rows,
      item_water,
      width,
      taken,
      height,
      edge_keys,
      edge,
    });
  }
  let remaining = subtract(water_count, 1);
  each_range(remaining, spread);
}
