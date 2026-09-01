import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
export function bless_household_splits(families) {
  arguments_assert(arguments, 1);
  ("The ways the nine people of one building can be shared out between this many families, with nobody living alone and nobody in a family of more than five.");
  ("Families of different sizes were asked for because three, three and three everywhere is the one thing about this street a player notices is untrue. Real doors have a couple behind one and a houseful behind the next, and a game whose every family is the same size is telling the player that the number is machinery rather than a family.");
  ("They add to NINE whatever the number of doors, and that is what makes this possible without writing the world down. A building holds nine however it splits, so which building somebody lives in is still their number divided by nine. Only the last step - which of this building's families - stops being a division, and that step is a walk of at most four.");
  ("Let a building hold a varying number of PEOPLE and every one of those divisions breaks: finding somebody's block would mean adding up every building before theirs, and a world that has to be counted through from the beginning is a world that has to be stored. So the doors vary and the nine does not.");
  ("Two is the floor and five is the ceiling on a family. One would be a family the prayer finishes in a single breath, which reads as a rung that does nothing.");
  ("That floor and that ceiling are what make the short tables short. Two families sharing nine can only be four and five either way round, because two and seven is over the ceiling. Four families can only be three of two and one of three, because four twos are eight and the ninth person has to go somewhere. It is three doors that has any real room in it, and it has ten arrangements.");
  ("Written out rather than worked out. Short rows are read at a glance and checked by eye - they add to nine, none is outside two and five - where a generator of them would be a second thing to trust and no shorter.");
  let pair = equal(families, 2);
  if (pair) {
    let two = [
      [4, 5],
      [5, 4],
    ];
    return two;
  }
  let quad = equal(families, 4);
  if (quad) {
    let four = [
      [2, 2, 2, 3],
      [2, 2, 3, 2],
      [2, 3, 2, 2],
      [3, 2, 2, 2],
    ];
    return four;
  }
  let three = [
    [2, 2, 5],
    [2, 3, 4],
    [2, 4, 3],
    [2, 5, 2],
    [3, 2, 4],
    [3, 3, 3],
    [3, 4, 2],
    [4, 2, 3],
    [4, 3, 2],
    [5, 2, 2],
  ];
  return three;
}
