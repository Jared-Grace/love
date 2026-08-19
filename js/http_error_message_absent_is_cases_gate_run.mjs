import { arguments_assert } from "./arguments_assert.mjs";
import { http_error_message_absent_is_cases } from "./http_error_message_absent_is_cases.mjs";
import { http_status_answering_server } from "./http_status_answering_server.mjs";
import { http_error_message_absent_is } from "./http_error_message_absent_is.mjs";
import { http_generic } from "./http_generic.mjs";
import { catch_message_async } from "./catch_message_async.mjs";
import { cases_gate_run_generic_async } from "./cases_gate_run_generic_async.mjs";
import { property_get } from "./property_get.mjs";
import { null_is } from "./null_is.mjs";
import { ternary } from "./ternary.mjs";
import { not } from "./not.mjs";
export async function http_error_message_absent_is_cases_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: a failed download is still read as absence only when the far end said not found.");
  ("Everything this repo knows about which bibles hold which books rests on that one line. Get it wrong the one way and a whole afternoon of network trouble is written down as gaps in scripture; get it wrong the other and real gaps become invisible, because every refusal now reads as a failure to ask. Neither shows up as an error - both come out as a full record that quietly says something false.");
  ("It asks for real rather than writing the failure down by hand. The refusal is built in one place and read back in another, and a check that spelled the message itself would be a third copy agreeing with both by construction - including on the day one of them changes. Here a real request goes out, a real server refuses it, and what comes back is judged the whole way through: the same thrower, the same reading, the same judgement the sweeps use.");
  ("Nothing leaves the machine. The server it asks is one it started on a free port of its own, so this is red only when the rule is wrong and never when the internet is.");
  ("It skips only the politeness pause before each ask, which is there so a wide sweep does not flood somebody else's server. There is nobody else here.");
  ("Throws so the dispatcher seam exits nonzero.");
  let cases = http_error_message_absent_is_cases();
  let options = {
    method: "GET",
    sleep: false,
  };
  async function answer(c) {
    let answered = property_get(c, "answered");
    let unanswerable = null_is(answered);
    let status_code = ternary(unanswerable, 200, answered);
    let answering = await http_status_answering_server(status_code);
    let url = property_get(answering, "url");
    let close = property_get(answering, "close");
    if (unanswerable) {
      await close();
    }
    async function lambda() {
      let bytes = await http_generic(url, options);
      return bytes;
    }
    let caught = await catch_message_async(lambda);
    let still_answering = not(unanswerable);
    if (still_answering) {
      await close();
    }
    let message = property_get(caught, "message");
    let absent = http_error_message_absent_is(message);
    return absent;
  }
  let r = await cases_gate_run_generic_async(
    cases,
    answer,
    "absent",
    "why",
    "download refusal read as absence",
  );
  return r;
}
