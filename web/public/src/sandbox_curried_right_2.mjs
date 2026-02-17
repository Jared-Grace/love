import { sandbox } from "../../../love/public/src/sandbox.mjs";
export async function sandbox_curried_right_2(b, c) {
  let r2 = async function sandbox_curried_right_2_result(d) {
    let r = await sandbox(d, b, c);
    return r;
  };
  return r2;
}
