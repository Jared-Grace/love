import { functions_transform } from "../../../love/public/src/functions_transform.mjs";
export async function sandbox() {
  async function lambda2(ast) {}
  let waited = await functions_transform(lambda2);
}
