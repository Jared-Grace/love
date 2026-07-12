import { retry } from "./retry.mjs";
export async function retry_standard(lambda) {
  await retry(5, lambda);
}
