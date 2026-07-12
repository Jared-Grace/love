import { list_single } from "./list_single.mjs";
import { list_size_1 } from "./list_size_1.mjs";
export async function list_single_if_async(list, lambda$only) {
  let s = list_size_1(list);
  if (s) {
    let only = list_single(list);
    await lambda$only(only);
  }
}
