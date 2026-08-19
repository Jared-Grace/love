import { list_get_wrap } from "./list_get_wrap.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function bless_building_face(faces, index) {
  arguments_assert(arguments, 2);
  ("What the front of the building at this place in the row is made of, given the materials");
  ("its own street is built from.");
  ("Taken in TURN rather than at random, and that is the whole of it: in turn, no two");
  ("neighbours can ever match, and the street is the same street every time the world is");
  ("made. Drawn at random, two houses side by side would sometimes come out identical -");
  ("which is exactly the pair a player needs to tell apart, since they are the two whose");
  ("doorsteps are nearest each other.");
  ("The materials are handed IN rather than asked for, because which set a street wears is");
  ("a fact about the street and this is only a question about one house standing in it.");
  ("That is what lets two blocks be built by the same code and still not look alike.");
  ("Counted round rather than run off the end, so a block may grow to any number of");
  ("buildings and this still answers.");
  let face = list_get_wrap(faces, index);
  return face;
}
