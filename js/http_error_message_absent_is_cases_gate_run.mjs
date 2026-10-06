import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { http_error_message_absent_is_cases } from "./http_error_message_absent_is_cases.mjs";
import { property_get } from "./property_get.mjs";
import { http_generic } from "./http_generic.mjs";
import { http_status_refusal_absent_is } from "./http_status_refusal_absent_is.mjs";
import { http_browser_bytes } from "./http_browser_bytes.mjs";
import { cases_gate_run_generic_async } from "./cases_gate_run_generic_async.mjs";
export async function http_error_message_absent_is_cases_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: a failed download is still read as absence only when the far end said not found - and both of the ways this repo fetches still say so.");
  ("Everything this repo knows about which bibles hold which books rests on that one line. Get it wrong the one way and a whole afternoon of network trouble is written down as gaps in scripture; get it wrong the other and real gaps become invisible, because every refusal now reads as a failure to ask. Neither shows up as an error - both come out as a full record that quietly says something false.");
  ("It asks for real rather than writing the failure down by hand. The refusal is built in one place and read back in another, and a check that spelled the message itself would be a third copy agreeing with both by construction - including on the day one of them changes. Here a real request goes out, a real server refuses it, and what comes back is judged the whole way through: the same thrower, the same reading, the same judgement the sweeps use.");
  ("BOTH WAYS OF FETCHING ARE ASKED THE SAME CORPUS, because there are two throwers and only one reading. ",
    fn_name("http_generic"),
    " is how a script asks and ",
    fn_name("http_browser_bytes"),
    " is how a page asks, and each builds its own complaint. Only the script's half used to be checked here, and the page's half was meanwhile writing the status down under a word nothing read it back by - so every not-found a person met in a page came out as nothing answered, and a word that is in no verse was reported in the same breath as a connection that dropped. The gate was green throughout, because the half it asked was the half that was right. A reading shared by two callers is only checked when both callers are asked.");
  ("The page's half is asked for a single try, since the point here is what one refusal is made of rather than how patiently it is chased, and its default is three tries with a second of waiting between them.");
  ("Nothing leaves the machine. The server it asks is one it started on a free port of its own, so this is red only when the rule is wrong and never when the internet is.");
  ("It skips only the politeness pause before each ask, which is there so a wide sweep does not flood somebody else's server. There is nobody else here.");
  ("Throws so the dispatcher seam exits nonzero.");
  let cases = http_error_message_absent_is_cases();
  let script_options = {
    method: "GET",
    sleep: false,
  };
  let page_options = {
    tries: 1,
  };
  async function answer_script(c) {
    let answered = property_get(c, "answered");
    async function bytes_get(url) {
      let bytes = await http_generic(url, script_options);
      return bytes;
    }
    let absent = await http_status_refusal_absent_is(answered, bytes_get);
    return absent;
  }
  async function answer_page(c) {
    let answered = property_get(c, "answered");
    async function bytes_get(url) {
      let bytes = await http_browser_bytes("GET", page_options, null, url);
      return bytes;
    }
    let absent = await http_status_refusal_absent_is(answered, bytes_get);
    return absent;
  }
  await cases_gate_run_generic_async(
    cases,
    answer_script,
    "absent",
    "why",
    "download refusal read as absence, fetched the way a script does",
  );
  let r = await cases_gate_run_generic_async(
    cases,
    answer_page,
    "absent",
    "why",
    "download refusal read as absence, fetched the way a page does",
  );
  return r;
}
