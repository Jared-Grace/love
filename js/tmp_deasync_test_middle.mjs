import { tmp_deasync_test_leaf } from "./tmp_deasync_test_leaf.mjs";
export async function tmp_deasync_test_middle() {
  let v = await tmp_deasync_test_leaf();
  return v;
}
