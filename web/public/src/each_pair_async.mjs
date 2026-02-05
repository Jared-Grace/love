import { each_multiple_async } from "../../../love/public/src/each_multiple_async.mjs";
export async function each_pair_async(list_a, list_b, lambda$a$b) {
  let lists = [list_a, list_b];
  await each_multiple_async(lists, lambda);
  async function lambda(items) {
    let [a, b] = items;
    await lambda$a$b(a, b);
  }
}
