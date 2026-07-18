import { retry } from "./retry.mjs";
export async function retry_standard(lambda) {
  return await retry(5, lambda);
}
