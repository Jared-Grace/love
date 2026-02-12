import { functions_transform } from "../../../love/public/src/functions_transform.mjs";
export async function functions_transform_command(lambda) {
  let r = await functions_transform(lambda);
  return r;
}
