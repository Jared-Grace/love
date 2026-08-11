import { apps_prod_chunks_missing } from "./apps_prod_chunks_missing.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function apps_prod_chunks_gate_run() {
  "Refuses when any app waiting to be sent would send for an extra script of its own and not find it.";
  "The step that puts an app where the sending reads from now moves every piece the build actually made, so this fault cannot be introduced by that road again. What this watches is that no other road ever grows back into it - a page that loads, looks well, then asks for a piece of itself that was never copied, and quietly does nothing. It shows only where the sending happens, so nobody working here would meet it.";
  "It asks for nothing to be handed in. Which apps are in that state is worked out afresh every time, so a road that starts dropping pieces for an app nobody had thought of is caught the same as one that drops them for an app somebody had.";
  "It is not put among the gates that run on every change until the apps already out there in that state have been sent afresh, because a gate that is red before anybody touches anything refuses work it has nothing to say about.";
  let faulty = await apps_prod_chunks_missing();
  list_empty_is_assert_json(faulty, {
    hint: "these apps are published without the extra scripts they ask for, so those requests answer 404 in production only - rebuild and send each one from a commit judged sound for it",
  });
}
