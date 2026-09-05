export function g_tiles_wall_faces_groups() {
  "The materials a building's front can be made of, gathered into one group per street.";
  "A street takes a whole group and takes it in turn, so a group has to be AT LEAST AS LONG AS A STREET HAS BUILDINGS. Shorter, the turn comes back round inside the one street a player is standing in: five houses out of three materials made the second house and the last house of every road the same brick, which is exactly the pair a player reads as a mistake. Five is what the streets need today, and the game refuses to draw a street whose group is shorter than it - the check is made where the group is handed to a block, because how many buildings a street has is a fact about the prayer game and not about the pictures.";
  "No two members of a group match, and lookalikes are kept apart within it besides. Two materials of one colour standing side by side are two houses a player cannot tell one from the other, and telling one house from the next is the only job a front has.";
  "There is more than one group because two streets built from one group are the same street twice. The player earns the reach to bless a whole block, walks to the next one to spend it, and has to be able to SEE on arrival that the walk went somewhere. Grouped rather than pooled, that is guaranteed rather than hoped for: pooled, a street would borrow whatever its indices landed on and the two could come out sharing most of a palette.";
  "No material appears in both groups, and nothing that LOOKS like another sits at the same place in both. The two speckled reds used to sit second in each group, so the second house of both roads was the same brick house - two streets differing everywhere except in the one spot a player compares.";
  "The first group is grey and brown - grey tile, red brick, pale plaster, brown stone, grey stone - and it is the group the tan-paved street wears, so a front never sinks into the ground in front of it. The second is warm all through - apricot, cream, red, taupe, pale sand - and it is worn by the street paved in grey cobbles, for the same reason the other way round.";
  "That test against the GROUND is the harder one - a neighbour is one tile away, but the pavement runs the whole length of the front and meets it along an edge. Seen in a browser, a grey speckled front on the cobbled street disappeared into the cobbles below it: two buildings in five lost their fronts and the row read as one long shed. So every grey is kept on the tan street and every warm one on the grey street.";
  "Every one of them is pale against the dark wood the rest of a building is made of, so a front reads as a front and not as a different building standing behind.";
  let grey = [
    "granite_tile",
    "quartzite_tile",
    "clay",
    "stone_tile",
    "granite_floor",
  ];
  let warm = [
    "sand_orange",
    "sand_white",
    "quartzite_floor",
    "sand_ash",
    "sand",
  ];
  let groups = [grey, warm];
  return groups;
}
