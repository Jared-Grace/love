import { retry } from "./retry.mjs";
export async function domain_fetch_retry(url, options) {
  "Asks an address, and asks again when the connection itself is refused.";
  "PORKBUN ANSWERS TO SEVERAL ADDRESSES AND ONE OF THEM IS DEAD. Measured, a single attempt at porkbun.com timed out on 50.112.218.129 while the same ask a moment later was answered in full; curl walks the whole list of addresses and node stops early, so the asking again is what makes up the difference.";
  async function attempt() {
    let response = await fetch(url, options);
    return response;
  }
  let answered = await retry(3, attempt);
  return answered;
}
