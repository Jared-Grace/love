import { each_async } from "../../../love/public/src/each_async.mjs";
export async function each_index_async(list, lambda$item$index) {
  let index = 0;
  async function lambda(item) {
    await lambda$item$index(item, index);
    index++;
  }
  await each_async(list, lambda);
}
