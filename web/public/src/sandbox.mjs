import { functions_transform } from "../../../love/public/src/functions_transform.mjs";
export async function sandbox(ast) {
  async function lambda2() {}
  let waited = await functions_transform(lambda2);
}
