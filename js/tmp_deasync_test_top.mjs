import { tmp_deasync_test_middle } from "./tmp_deasync_test_middle.mjs";
export async function tmp_deasync_test_top() {
  let v = await tmp_deasync_test_middle();
  return v;
}
