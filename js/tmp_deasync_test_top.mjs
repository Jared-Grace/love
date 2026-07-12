import { tmp_deasync_test_middle } from "./tmp_deasync_test_middle.mjs";
export function tmp_deasync_test_top() {
  let v = tmp_deasync_test_middle();
  return v;
}
