import { fn_name } from "./fn_name.mjs";
export function baseline_growth_guarded_cases() {
  "which sets of imports mean a ratchet writer refuses to grow, and which do not. the sweep built on this judgment comes back empty on a healthy repo, so a wrong answer there shows up as silence rather than as a failure. these are written down instead of found, which is what turns a mistake into a red gate";
  "the generic case is the reason this exists. a first draft asked for names ending in growth assert, which is true of most of the family and false of the one they all share, and it condemned a writer that was refusing growth correctly. that draft passed every other case here";
  "the ones that must answer no matter as much. a writer that only imports the plain record-writer is the exact shape of the four this family was built to catch, and an empty list is what a writer with nothing in it at all would give";
  let cases = [
    {
      imports: [
        fn_name("baseline_known_growth_assert"),
        fn_name("baseline_known_write"),
      ],
      guarded: true,
      why: "the shared refusal most of the family calls, named plainly",
    },
    {
      imports: [
        fn_name("baseline_growth_assert_generic"),
        fn_name("names_versus_baseline"),
      ],
      guarded: true,
      why: "the one every ratchet ends its comparison at, whose name carries the words in the middle and ends in generic. asking for the ending instead of the words got this one wrong, and got it wrong in the direction that condemns working code",
    },
    {
      imports: [fn_name("functions_duplicates_baseline_growth_assert")],
      guarded: true,
      why: "a family's own named wrapper, where the words sit in the middle of a longer name",
    },
    {
      imports: [
        fn_name("baseline_known_write"),
        fn_name("duplicates_baseline_path"),
      ],
      guarded: false,
      why: "writes the record and nothing else - the exact shape of the four writers this was built to catch, every one of which promised in its own prose to refuse",
    },
    {
      imports: [],
      guarded: false,
      why: "a writer importing nothing at all, which refuses nothing",
    },
    {
      imports: [fn_name("baseline_known_read"), fn_name("list_sort_text")],
      guarded: false,
      why: "reading the record and sorting it is not refusing to grow it, though both names sit in the same family",
    },
  ];
  return cases;
}
