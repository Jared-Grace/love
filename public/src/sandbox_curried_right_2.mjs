import { sandbox } from "../../../love/public/src/sandbox.mjs";
export async function sandbox_curried_right_2(b, c) {
  return async function sandbox_curried_right_2_result(d) {
    return await sandbox(d, b, c);
  };
}
