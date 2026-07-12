import { promise_wrap_unawait } from "./promise_wrap_unawait.mjs";
export async function promise_wrap(lambda$resolve$reject) {
  let p = await promise_wrap_unawait(lambda$resolve$reject);
  return p;
}
