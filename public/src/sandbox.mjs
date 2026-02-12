import { functions_transform } from "../../../love/public/src/functions_transform.mjs";
export async function sandbox(ast) {
  let waited = await functions_transform(async function lambda2() {});
}
