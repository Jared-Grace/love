import { functions_assert_json_get_lambda_sites } from "./functions_assert_json_get_lambda_sites.mjs";
import { property_get } from "./property_get.mjs";
import { list_size } from "./list_size.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { fn_name } from "./fn_name.mjs";
export async function functions_assert_json_get_lambda_gate_run() {
  "Gate: no function writes out a lazy payload wrapper the eager check would have built for it. Throws so the dispatcher seam exits nonzero.";
  "Both checks are correct code and neither reads as a mistake, so nothing showed the";
  "difference and nothing punished it - which is how twelve of one and a handful of the";
  "other came to sit side by side, each one written by copying whichever neighbour the";
  "author happened to open. That is the same shape as a convention with no visible";
  "effect, and the same remedy: sweep once, then hold the line here.";
  "The wrapper is still the right answer where it computes something, and this gate";
  "cannot see those - the reading it borrows refuses them, so a wrapper that earns its";
  "waiting will never turn this red.";
  let sites = await functions_assert_json_get_lambda_sites();
  for (let one of sites) {
    let f_name = property_get(one, "f_name");
    console.log("wrapper written out  " + f_name);
  }
  console.log("functions writing out a wrapper: " + list_size(sites));
  if (list_empty_not_is(sites)) {
    throw new Error(
      "assert payload wrapper gate: " +
        list_size(sites) +
        " functions build a payload wrapper by hand that the eager check already builds - unwrap them with " +
        fn_name("functions_assert_json_get_lambda_collapse"),
    );
  }
  let r = {
    sites: 0,
  };
  return r;
}
