import { function_source_replace } from "../../../love/public/src/function_source_replace.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
export async function sandbox() {
  let list = [
    "id > e m p t y",
    "id > t a u t o l o g y",
    "id > i d e n t i t y",
    "id > i n v o k e",
    "id > a v e r a g e",
    "id > s u m",
  ];
  async function lambda(item) {
    await function_source_replace(f_name, from, to);
  }
  await each_async(list, lambda);
}
