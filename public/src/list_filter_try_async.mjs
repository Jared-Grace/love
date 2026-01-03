import { list_adder_async } from "../../../love/public/src/list_adder_async.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
export async function list_filter_try_async(lambda, bible_folders) {
  async function lambda2(la) {
    async function lambda3(bible_folder) {
      try {
        await lambda(bible_folder);
        la(bible_folder);
      } catch (e) {}
    }
    await each_async(bible_folders, lambda3);
  }
  let list = await list_adder_async(lambda2);
  return list;
}
