import { arguments_assert } from "./arguments_assert.mjs";
export function bless_roads() {
  arguments_assert(arguments, 0);
  ("What the roads of this game are surfaced with, taken in turn one street after another.");
  ("Two of them for the same reason there are two pavements: a road is one of the widest things a block is made of, and one surface for every road in the world would hand the player the same road however far they walked.");
  ("Both are grey and neither is any of the browns. A road reads as a made surface rather than as ground, and grey is what says made - so the choice between them is a choice of how dark, and the two here are a dark one and a middling one.");
  ("They are chosen against the PAVEMENT each street already has rather than against each other, because the pavement is what a road is seen next to. The dark one runs beside the pale tan pavement, where the two could not be confused; the middling one runs beside the cobbles, which are chunky and many-coloured, so it is told apart by having no pattern at all rather than by its shade.");
  ("Neither is a wall, a front or a roof anywhere in this game, and that is checked rather than remembered.");
  let roads = ["darkCaveGravel", "coldCaveGravel"];
  return roads;
}
