import { sandbox } from "../../../love/public/src/sandbox.mjs";
export async function sandbox_curried_right_2(d) {
  return async function sandbox_curried_right_2_result(b, c) {
    return await sandbox(d, b, c);
  };
}
