export function g_coordinates_npc_standing(g, coordinates) {
  "the person standing on a tile, or nothing when it is empty.";
  "One character to a tile is the rule the whole map keeps, so there is never more than one answer to this. Asked before the player steps somewhere, because somebody being there is not a reason to refuse the step - it is a reason for the two of them to step past each other.";
  let npcs = property_get(g, "npcs");
  let matched = list_filter_object_includes(npcs, coordinates);
  let npc = list_first_try(matched);
  return npc;
}
