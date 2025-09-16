import { each_range_async } from "./each_range_async.mjs";
export async function retry() {
  let count = 5;
  async function lambda2() {}
  await each_range_async(count, lambda2);
}
