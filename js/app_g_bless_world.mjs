import { arguments_assert } from "./arguments_assert.mjs";
export function app_g_bless_world(rows, coordinates, player, npcs, block) {
  arguments_assert(arguments, 5);
  ("Everything the praying game's world is: the ground as rows of tiles, the same ground as");
  ("a flat list of coordinates, where the player stands, everybody else, and the one block");
  ("built into it so far.");
  ("The first four names are the gospel game's names on purpose. Its pathfinder asks a world");
  ("for its coordinates and its npcs, so a world spelled this way can be handed straight to");
  ("it - walking is then the SAME code in both games rather than a second copy that drifts.");
  ("The block is this game's own, because a place is what a prayer climbs to. The ground");
  ("knows a wall is a wall and a pavement is paved; only this knows which tiles are one");
  ("BUILDING and which pavement is one block, which is what a rung is asked against. It is");
  ("kept whole rather than reduced to the pavement, because the rungs above the first are");
  ("asked about the buildings and the doorsteps in it and those would otherwise have to be");
  ("worked out a second time from the ground.");
  ("Held in memory and never written down. This game has no save yet, and one that saved");
  ("would have to answer which game's save it was; the gospel game's is a single fixed path");
  ("that cannot tell the two apart. Losing the world on a refresh is the honest cost until");
  ("saving is worth building properly.");
  let world = {
    rows: rows,
    coordinates: coordinates,
    player: player,
    npcs: npcs,
    block: block,
  };
  return world;
}
