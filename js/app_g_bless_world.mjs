import { arguments_assert } from "./arguments_assert.mjs";
export function app_g_bless_world(rows, coordinates, player, npcs) {
  arguments_assert(arguments, 4);
  ("Everything the praying game's world is: the ground as rows of tiles, the same ground as");
  ("a flat list of coordinates, where the player stands, and everybody else.");
  ("The property names are the gospel game's names on purpose. Its pathfinder asks a world");
  ("for its coordinates and its npcs, so a world spelled this way can be handed straight to");
  ("it - walking is then the SAME code in both games rather than a second copy that drifts.");
  ("Held in memory and never written down. This game has no save yet, and one that saved");
  ("would have to answer which game's save it was; the gospel game's is a single fixed path");
  ("that cannot tell the two apart. Losing the world on a refresh is the honest cost until");
  ("saving is worth building properly.");
  let world = {
    rows: rows,
    coordinates: coordinates,
    player: player,
    npcs: npcs,
  };
  return world;
}
