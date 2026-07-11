import { list_single } from "../../../love/public/src/list_single.mjs";
import { list_size_ } from "../../../love/public/src/list_size_1.mjs";
export async function list_single_if_async(list, lambda$only) {
  let s = list_size_(list);
  if (s) {
    let only = list_single(list);
    await lambda$only(only);
  }
}
