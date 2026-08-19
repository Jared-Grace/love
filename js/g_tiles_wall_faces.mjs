export function g_tiles_wall_faces() {
  "The materials a building's front can be made of - plaster, brick and stone.";
  "A row of houses all wearing one material is one long shed. The point of these is that a";
  "player can see FIVE buildings where the ladder counts five, and can tell which one they";
  "have finished praying for from the far end of the street.";
  "Three of them rather than one per building, because they are used in turn and only";
  "neighbours have to differ - three is the fewest that guarantees it however many";
  "buildings a block grows to. It is also about as much variety as a street can carry";
  "before it stops looking like one street.";
  "They are all pale against the dark wood the rest of a building is made of, so a front";
  "reads as a front and not as a different building standing behind.";
  let faces = ["clay", "quartzite_tile", "granite_tile"];
  return faces;
}
