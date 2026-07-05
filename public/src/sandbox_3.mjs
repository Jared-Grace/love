import { list_pop } from "../../../love/public/src/list_pop.mjs";
export async function sandbox_3() {
  let removed = list_pop([1, 2, 3]);
  return removed;
}
