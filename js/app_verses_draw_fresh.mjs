import { arguments_assert } from "./arguments_assert.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_verses_order_standalone_first } from "./app_verses_order_standalone_first.mjs";
import { list_take } from "./list_take.mjs";
export async function app_verses_draw_fresh(
  copy_after,
  order,
  verse_count,
  references_show,
) {
  arguments_assert(arguments, 4);
  ("changing the count — or tapping New verses — draws a brand-new set of that many verses: a fresh shuffle every time, so the verses always refresh rather than the count only adding to or trimming what was already there");
  list_shuffle(order);
  app_verses_order_standalone_first(order);
  let references = list_take(order, verse_count);
  await references_show(references, copy_after);
}
