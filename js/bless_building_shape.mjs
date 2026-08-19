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
  "Three across also gives every building a MIDDLE tile, which is where its door goes.";
  "An even frontage would have to pick one of two tiles and would look off-centre.";
  let shape = {
    width: 3,
    depth: 2,
    gap: 1,
  };
  return shape;
}
