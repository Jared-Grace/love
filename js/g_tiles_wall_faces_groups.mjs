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
  "- cream plaster, rose stone, apricot plaster. Read as wholes rather than tile by tile,";
  "which is how a street is actually seen, warm and cool is the difference that survives";
  "being glanced at from the far end of a road.";
  "Every one of them is pale against the dark wood the rest of a building is made of, so a";
  "front reads as a front and not as a different building standing behind.";
  "A group also has to stand out from the GROUND its own street is paved with, and that is";
  "the harder test - a neighbour is one tile away, but the pavement runs the whole length";
  "of the front and meets it along an edge. Seen in a browser, a grey speckled front on the";
  "cobbled street disappeared into the cobbles below it: two buildings in five lost their";
  "fronts and the row read as one long shed. So the warm group is kept warm all through,";
  "against the grey the second street is paved with.";
  let cool = ["clay", "quartzite_tile", "granite_tile"];
  let warm = ["sand_white", "quartzite_floor", "sand_orange"];
  let groups = [cool, warm];
  return groups;
}
