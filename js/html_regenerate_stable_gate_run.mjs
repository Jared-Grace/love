import { html_regenerate_stable_check } from "./html_regenerate_stable_check.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function html_regenerate_stable_gate_run() {
  "Fails when writing a page out again would not settle - when the page that comes back would come back different again next time.";
  "Held against nothing rather than against a list of the ones that already fail, because every page passed the day this was written and a page that stops settling is a new fault rather than an old one being uncovered.";
  let offenders = await html_regenerate_stable_check();
  list_empty_is_assert_json(offenders, {
    hint: "regenerating one of these pages would change it, and regenerating the result would change it again - so the page never settles and each pass drifts further from what the app wrote. Look at what html_code puts around a body that html_code_body_own does not take back off, or at a title that html_code_app_name does not turn back into a name",
    offenders,
  });
  let checked = {
    unstable: offenders.length,
  };
  return checked;
}
