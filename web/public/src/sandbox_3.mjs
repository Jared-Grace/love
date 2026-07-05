import { list_remove_last } from "../../../love/public/src/list_remove_last.mjs";
export async function sandbox_3() {
  let removed = list_remove_last([1, 2, 3]);
  return removed;
}
