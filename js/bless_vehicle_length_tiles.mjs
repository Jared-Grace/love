import { arguments_assert } from "./arguments_assert.mjs";
export function bless_vehicle_length_tiles() {
  arguments_assert(arguments, 0);
  ("How many squares long a car is drawn, counting from the square it stands on.");
  ("TWO, and the second one is the square to its EAST, because the picture is placed at the");
  ("left edge of the square the car is on and simply continues past it. Nothing pulls it");
  ("back by half a square, so a car recorded as being on one square is drawn across two.");
  ("Which square a car IS on is not in doubt and is not what this says: the wheels stand in");
  ("the first one. This is about how much road the picture covers, which is a different");
  ("question and the one that matters to anybody deciding whether the road looks clear.");
  ("It is a function rather than a two written twice because the picture and the rules have");
  ("to agree about it. They did not: the drawing spent two squares and every rule about how");
  ("near a car may come measured the one square it was recorded on, so a car held back the");
  ("distance the rules called safe was drawn with its nose in the next square along. Held");
  ("on the other side of the crossing the same distance looked right, because there the");
  ("body extends away from the walker. One number read by both ends removes the whole class");
  ("of that fault, and the asymmetry it caused was reported as a car standing next to the");
  ("walkway.");
  let tiles = 2;
  return tiles;
}
