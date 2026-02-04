import { retry } from "../../../love/public/src/retry.mjs";
export async function retry_standard(lambda3) {
  await retry(5, lambda3);
}
