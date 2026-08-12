export async function app_g_npc_walk_to(g, npc, to) {
  "send one person to a given tile on their own feet: the shortest way there that goes round the walls and round everybody else, walked a tile at a time";
  "when there is no way round at all - a person at the end of a one-wide way with the rest of the line filling it - they simply arrive. that is the old behaviour, kept for the one case where it is the only thing left to do rather than the first thing reached for";
  let path = g_coordinates_path_shortest(g, npc, to);
  let open = list_empty_not_is(path);
  if (open) {
    await app_g_npc_walk(npc, path);
    return;
  }
  app_g_npc_move(npc, to, 0);
}
