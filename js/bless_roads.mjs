import { arguments_assert } from "./arguments_assert.mjs";
export function bless_roads() {
  arguments_assert(arguments, 0);
  ("What the roads of this game are surfaced with, taken in turn one street after another.");
  ("Two of them because the road is the widest band of ground a block has, and it is the one band that changes from street to street. The pavement was the other candidate and is not any more - the poured ground is a single material on every street in the game now, so nothing at all varies at pavement width. One surface for every road in the world would hand the player the same street however far they walked, which is exactly what the walk to another block was supposed to buy.");
  ("Both are grey and neither is any of the browns. A road reads as a made surface rather than as ground, and grey is what says made - so the choice between them is a choice of how dark, and the two here are a dark one and a middling one.");
  ("THEY ARE CHOSEN AGAINST THE POURED GROUND rather than against each other, because that is what a road is always seen next to: the pavement lies a row back from the kerb and a driveway runs right up to it, on every street there is. Both are darker than it, and it is paler than both, which is the same rule said from either end - the road is what people are held back from and the poured ground is where they are, so the edge between them is the one edge that must never go soft.");
  ("That used to be written here as a choice made against the pavement of the street each road ran along, one road for the pale tan pavement and the other for the cobbles. It has not been true since the pavement and the driveway became the same single poured material, and a paragraph explaining a choice by a difference that no longer exists is worse than no paragraph, because the next person to change a colour reasons from it. What the roads are held against is now the same on every street, so the two greys only have to differ from it and from each other.");
  ("Neither is a wall, a front or a roof anywhere in this game, and that is checked rather than remembered.");
  let roads = ["darkCaveGravel", "coldCaveGravel"];
  return roads;
}
