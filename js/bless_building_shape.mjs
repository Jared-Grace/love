export function bless_building_shape() {
  "What one building looks like from above - how many tiles across its front, how many deep";
  "it stands, and how wide the alley between it and the next one is.";
  "The three belong together because they are one proportion rather than three settings. A";
  "building wider than it is deep reads as a frontage on a street, which is what a person";
  "walking past actually sees; make it square and the row stops looking like buildings and";
  "starts looking like a wall with notches in it.";
  "The alley is a single tile, and it is what stops the row being one long building. It is";
  "deliberately too narrow to be somewhere anybody goes - a gap you could walk down would";
  "be a second street, and this game has one.";
  "Three across is also one square for each family in the building, and that is what the";
  "front row is: three doors side by side, one per home. The width and the number of";
  "families are the same number on purpose - it is what lets a household own a column of";
  "the ground and a door on the street without either being worked out from the other.";
  let shape = {
    width: 3,
    depth: 2,
    gap: 1,
  };
  return shape;
}
