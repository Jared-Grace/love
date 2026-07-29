import { catch_ignore_async } from "./catch_ignore_async.mjs";
import { promise_later } from "./promise_later.mjs";
export function promise_later_catch_ignore(lambda_async) {
  "start work and carry on without it. the caller already holds everything it is going to hand back, so waiting here would buy nothing and cost the reader the wait - which is the whole point at a site that hands back a saved copy and only wants a fresh one fetched for next time.";
  "failure is swallowed on purpose: nobody is waiting on this, so being unable to reach the network is simply next time being slow again, and letting it reject would put an error in front of a reader whose page worked. that swallowing is the whole of what this adds - running later is already a thing this repo can do.";
  "this is deliberately not an async function, and must stay that way. an async one hands back a promise, and the canonicalizing pass would then write an await at every call site - switching the one thing this exists to avoid back on, silently, at a site that still reads as though it did not wait.";
  async function attempt() {
    await catch_ignore_async(lambda_async);
  }
  promise_later(attempt);
}
