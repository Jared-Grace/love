import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
export function baseline_growth_guarded_is_cases() {
  arguments_assert(arguments, 0);
  ("Lists of names a ratchet writer might import, and whether importing that set counts as refusing to record what the file did not already hold.");
  ("THE SWEEP NEXT DOOR COMES BACK EMPTY ON A HEALTHY REPO, WHICH IS WHY THIS EXISTS. A judgment that answers yes to everything and a judgment that is right both leave the sweep with nothing to report, and the gate beside the sweep goes green either way. The only place the difference is visible is a set of imports nobody wrote, held here beside the answer it has to come back with.");
  ("The sets are invented rather than read off real writers, for the same reason. A set taken from a writer can only ever be checked against whatever this function already says about it, and a writer whose imports change tomorrow takes its case with it.");
  ("Every case here refuses at least one wrong version. A judgment that looked for the words anywhere is failed by the near miss on the shrink writer; a judgment that asked for the ending is failed by the generic assert; a judgment that answered yes on any baseline name at all is failed by the plain write and by the empty set.");
  let cases = [
    {
      imports: [
        fn_name("baseline_known_read"),
        fn_name("baseline_known_growth_assert"),
        fn_name("baseline_known_write"),
      ],
      guarded: true,
      why: "the ordinary refusal: a writer that asks the shared assert whether what it is about to write holds a name the file did not",
    },
    {
      imports: [fn_name("baseline_growth_assert_generic")],
      guarded: true,
      why: "the words are looked for anywhere inside a name rather than at its end, because the one every ratchet shares its comparison through ends in generic instead - a first draft asked for the ending and called a writer an offender while it was doing exactly the right thing",
    },
    {
      imports: [
        fn_name("functions_work_size_baseline_path"),
        fn_name("baseline_known_shrink_write"),
      ],
      guarded: true,
      why: "a writer that hands its offenders to the shrink cannot grow the file, because the only thing that ever reaches disk there is a subset of what the file already held - growth is unrepresentable rather than refused",
    },
    {
      imports: ["baseline_known_shrink_write_report"],
      guarded: false,
      why: "the shrink writer is asked for exactly, not matched by shape, so a longer name that merely starts with it is a different function and proves nothing about what it writes",
    },
    {
      imports: [
        fn_name("baseline_known_read"),
        fn_name("baseline_known_write"),
      ],
      guarded: false,
      why: "reading the file first is not a refusal: what gets written is still whatever the writer was handed, so a name that has just started offending goes in and the ratchet is a ratchet in one direction only by luck",
    },
    {
      imports: [],
      guarded: false,
      why: "a writer that imports nothing at all refuses nothing at all, and this is the answer that stops the judgment defaulting to yes when it fails to find what it is looking for",
    },
  ];
  return cases;
}
