import { arguments_assert } from "./arguments_assert.mjs";
import { permission_row_dead_is } from "./permission_row_dead_is.mjs";
import { list_add } from "./list_add.mjs";
export async function permission_rows_alive(rows) {
  "The counted shapes split into the ones that can still interrupt somebody and the ones that cannot, so a ranking of what to work on next is not led by a folder that is gone.";
  "Both halves are handed back rather than one. A reading that silently shortened its own list would say nothing about what it dropped, and a row removed for being dead is exactly the row somebody would otherwise go looking for after seeing it yesterday.";
  arguments_assert(arguments, 1);
  let alive = [];
  let dead = [];
  for (let row of rows) {
    let gone = await permission_row_dead_is(row);
    if (gone) {
      list_add(dead, row);
      continue;
    }
    list_add(alive, row);
  }
  let r = {
    alive,
    dead,
  };
  return r;
}
