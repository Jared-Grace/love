import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_name_prefix_without } from "./app_shared_name_prefix_without.mjs";
import { fn_name } from "./fn_name.mjs";
import { qa_app_stage_public_url } from "./qa_app_stage_public_url.mjs";
import { app_code_happy_url_walked_generic } from "./app_code_happy_url_walked_generic.mjs";
import { page_route_root_from_latest } from "./page_route_root_from_latest.mjs";
export async function app_code_tests_run_e2e_happy_public() {
  "click all the way through the code course as somebody who gets every question right, walking the latest build at the address the public opens it at, before it is put there";
  "2026-11-06: the course was walked under latest for six hours, passed, went out, and threw for every learner, because the public address is handed a shorter list of lessons and nothing had ever walked that list. The walk before a send is there to protect what the public gets, so it walks what the public gets. Lessons held back from the public are not walked here; once one is released it is in this list and is walked from then on.";
  arguments_assert(arguments, 0);
  let app_name = app_shared_name_prefix_without(fn_name("app_code"));
  let url = qa_app_stage_public_url(app_name);
  let walked = await app_code_happy_url_walked_generic(
    url,
    page_route_root_from_latest,
  );
  return walked;
}
