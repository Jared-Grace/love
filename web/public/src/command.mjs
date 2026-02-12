import { functions_transform } from "../../../love/public/src/functions_transform.mjs";
export async function command(lambda) {
  return await functions_transform(lambda);
}
