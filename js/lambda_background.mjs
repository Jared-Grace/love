import { catch_null_async } from "./catch_null_async.mjs";
import { invoke } from "./invoke.mjs";
import { global_function_set } from "./global_function_set.mjs";
export function lambda_background(lambda_async) {
  ("start work and carry on without it. the caller already holds everything it is going to hand back, so waiting here would buy nothing and cost the reader the wait - which is the whole point at a site that hands back a saved copy and only wants a fresh one fetched for next time.");
  ("failure is swallowed on purpose: nobody is waiting on this, so a refusal to reach the network is simply next time being slow again, and letting it reject would put an error in front of a reader whose page worked.");
  ("this is deliberately not an async function, and must stay that way. an async one hands back a promise, and the canonicalizing pass would then write an await at every call site - switching the one thing this exists to avoid back on, silently, at a site that still reads as though it did not wait.");
  ("the last attempt is kept rather than dropped so that nothing counts it as unwatched, in the same way the browser database's own background writes are kept");
  async function attempt() {
    let r = await catch_null_async(lambda_async);
    return r;
  }
  let started = invoke(attempt);
  global_function_set(lambda_background, started);
}
