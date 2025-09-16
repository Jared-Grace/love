import { each_range_async } from "./each_range_async.mjs";
export async function retry(lambda) {
  let count = 5;
  let wait = 1000;
  let result = null;
  async function lambda2() {
    try {
      result = await lambda();
      let v = true;
      return v;
    } catch (e) {}
  }
  await each_range_async(count, lambda2);
}
