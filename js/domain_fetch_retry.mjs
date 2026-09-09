import { retry_generic } from "./retry_generic.mjs";
import { double } from "./double.mjs";
export async function domain_fetch_retry(url, options) {
  "Asks an address, and asks again when the connection itself is refused.";
  "PORKBUN ANSWERS TO SEVERAL ADDRESSES AND ONE OF THEM IS DEAD. Measured, a single attempt at porkbun.com timed out on 50.112.218.129 while the same ask a moment later was answered in full; curl walks the whole list of addresses and node stops early, so the asking again is what makes up the difference.";
  "THREE TRIES A SECOND APART IS NOT ENOUGH, and a half hour job is what proves it: an unattended sweep died after asking three times inside three seconds, while the same ask by hand a minute later was answered. A stretch of half a minute where nothing connects is ordinary, so the waiting has to outlast one.";
  async function attempt() {
    let response = await fetch(url, options);
    return response;
  }
  let answered = await retry_generic(attempt, 5000, double, 5);
  return answered;
}
