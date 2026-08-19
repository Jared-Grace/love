export function g_tiles_wall_faces_groups() {
  "The materials a building's front can be made of, gathered into one group per street.";
  "A street takes a whole group and takes it in turn, so what a group has to guarantee is";
  "that no two of its own members match - three is the fewest that does that however many";
  "buildings a street grows to, which is why they come in threes.";
  "There is more than one group because two streets built from one group are the same";
  "street twice. The player earns the reach to bless a whole block, walks to the next one";
  "to spend it, and has to be able to SEE on arrival that the walk went somewhere. Grouped";
  "rather than pooled, that is guaranteed rather than hoped for: pooled, a street would";
  "borrow whatever its indices landed on and the two could come out sharing most of a";
  "palette.";
  "The first group is cool - pale plaster, pink brick, grey stone - and the second is warm";
  "- cream plaster, brown tile, rose stone. Read as wholes rather than tile by tile, which";
  "is how a street is actually seen, warm and cool is the difference that survives being";
  "glanced at from the far end of a road.";
  "Every one of them is pale against the dark wood the rest of a building is made of, so a";
  "front reads as a front and not as a different building standing behind.";
  let cool = ["clay", "quartzite_tile", "granite_tile"];
  let warm = ["sand_white", "stone_tile", "quartzite_floor"];
  let groups = [cool, warm];
  return groups;
}
