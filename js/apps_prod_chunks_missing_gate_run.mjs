import { apps_prod_chunks_missing } from "./apps_prod_chunks_missing.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function apps_prod_chunks_missing_gate_run() {
  "Refuses while any app waiting to be sent would send for an extra script of its own and not find it";
  "An app cut into pieces is only whole where all of its pieces are, and the fault is invisible from everywhere except the moment the app reaches for one. What comes back then is a refusal, which an app usually swallows, so the screen simply does nothing and reports no reason. Every other check here reads the code; this one reads the folder the code is about to be sent out of, which is the only place the fault exists";
  "It refuses from nothing rather than from a written-down count of what was already wrong. Every case of it was cleared the day this was written, so a fault found here is one that arrived afterwards and there is nothing old to grandfather in";
  "What it reads is the folder that becomes what people are served, not what they are being served now. So it catches the fault before it goes out, which is the point, and it can be green in the same moment that what is already out there is still broken. Proving the pieces are actually reachable is a different question and asks the network, which no check here does";
  let faulty = await apps_prod_chunks_missing();
  list_empty_is_assert_json(faulty, {
    faulty,
    hint: fn_name("qa_apps_prod_chunks_missing_deploy"),
  });
  let r = {
    faulty: 0,
  };
  return r;
}
