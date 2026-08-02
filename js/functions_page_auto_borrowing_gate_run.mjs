export async function functions_page_auto_borrowing_gate_run() {
  ("Gate: running the normalize pass over a file that hands work to a browser must");
  ("not leave a function sent to the page reading a name from the top of that file.");
  ("The gate beside this one asks whether such a file is broken now. This one asks");
  ("whether the pass would break it, which is the version that can be acted on. The");
  ("difference is not academic: the operator rewrite was doing exactly this, a");
  ("repair by hand turned the other gate green, and the next canonicalize put the");
  ("whole break straight back. A repair that cannot survive the pass is not a");
  ("repair, and nothing said so.");
  ("It ratchets against ZERO. Twelve files talk to a page and all twelve come");
  ("through the pass clean as of 2026-08-03, so there is nothing to grandfather.");
  ("What was checked is printed even when nothing is wrong. Every file failing to");
  ("get through the pass would empty this answer, and an empty answer reads exactly");
  ("like a clean run - the count is how a reader tells those apart.");
  let v = await functions_page_auto_borrowing();
  let checked = property_get(v, "checked");
  let skipped = property_get(v, "skipped");
  let offenders = property_get(v, "offenders");
  console.log("files put through the pass: " + checked);
  if (list_empty_not_is(skipped)) {
    console.log("could not get through the pass: " + list_join_comma(skipped));
  }
  for (let offender of offenders) {
    let f_name = property_get(offender, "name");
    let borrowed = property_get(offender, "borrowed");
    console.log("PASS WOULD BREAK  " + f_name + "  " + json_to(borrowed));
  }
  let size = list_size(offenders);
  let any = greater_than(size, 0);
  if (any) {
    throw new Error(
      "page auto borrowing gate: " +
        size +
        text_combine_multiple([
          " files would come back broken from the normalize pass - the step doing it must ask ",
          fn_name("js_page_serializing_call_is"),
          " and leave such a file alone, the way the built-in rewrite already does",
        ]),
    );
  }
  let r = {
    checked,
    breaking: 0,
  };
  return r;
}
