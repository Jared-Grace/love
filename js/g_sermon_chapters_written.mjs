import { g_sermon_groups_todo } from "./g_sermon_groups_todo.mjs";
import { property_get } from "./property_get.mjs";
export async function g_sermon_chapters_written() {
  "Every chapter that has a sermon written for it, in canonical order - the whole supply a player may pick from.";
  "This is the AUTHORING side's chapter list and it is not a game's chapter list. A game gets the chapters that player chose, in the order they chose them, and cuts its plants out of those. What is written down is only what is available to choose, so this is what the pool of arcs is sized against - enough arcs to cover every sermon that exists, whatever subset any one game reaches for.";
  "Canonical order is the right order HERE and would be the wrong order in a game, because nothing is being paced - a total does not care what sequence it was added in.";
  let groups_todo = await g_sermon_groups_todo();
  let r = property_get(groups_todo, "done");
  return r;
}
