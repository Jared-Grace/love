import { each_range_async } from "./each_range_async.mjs";
export async function retry() {
  async function lambda2() {}
  await each_range_async(count, lambda2);
}
