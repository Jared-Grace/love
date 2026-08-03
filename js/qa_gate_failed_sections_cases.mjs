import { fn_name } from "./fn_name.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { qa_gate_failed_prefix } from "./qa_gate_failed_prefix.mjs";
export function qa_gate_failed_sections_cases() {
  "What a gate run printed and which complaint belongs to which gate, written down. The reading built on this decides, for every app, whether a red gate can be shown to be about somewhere else.";
  "The answer that costs something is the empty one. A gate whose complaint reads back as naming nobody cannot be placed, so it counts against every app there is - and the same emptiness is what a genuinely nameless complaint gives back, so the two are indistinguishable downstream. That is what happened: the gates that carry their offenders in a thrown object had all of it but the first line dropped, and sixteen of them held every app in one recorded run while their names sat in the output unread.";
  "The gate names inside are real, because these are the gates that actually behave this way and a made-up one would say nothing about whether the reading follows them. The offender names are invented, since a real one would be rewritten into a reference by the canonicalizing pass and would then follow every later rename of a function the case was never about.";
  let failure = qa_gate_failed_prefix();
  let gate = fn_name("functions_duplicates_gate_run");
  let opening = failure + gate + ": {";
  let cases = [
    {
      name: "a complaint carried over several lines is followed to its end",
      output: list_join_newline([
        "=== " + gate + " ===",
        opening,
        ' "list": [',
        '  "gate_named_this"',
        " ]",
        "}",
      ]),
      sections: [
        {
          name: gate,
          said: list_join_newline([
            " {",
            ' "list": [',
            '  "gate_named_this"',
            " ]",
            "}",
          ]),
        },
      ],
      why: "the whole of what the gate threw, which is where its offenders are. Keeping only the line the complaint opened on leaves a lone brace, and a lone brace names nobody - so the gate becomes unplaceable and holds every app over a fault it did name",
    },
    {
      name: "what is printed under a complaint is not part of it",
      output: list_join_newline([
        "=== " + gate + " ===",
        opening,
        ' "list": []',
        "}",
        "  INHERITED  gate_named_that  abc1234  2 days ago  ai",
      ]),
      sections: [
        {
          name: gate,
          said: list_join_newline([" {", ' "list": []', "}"]),
        },
      ],
      why: "who last touched a thing is printed under the complaint and is not an accusation. Reading on to the next heading instead of to the end of the complaint would take these lines too, and would also behave differently in the frozen copy, where they are never printed at all - and the frozen copy is where the record is written",
    },
    {
      name: "a complaint that fits on its line still closes there",
      output: list_join_newline([
        "=== " + gate + " ===",
        "gate_named_this is here twice",
        failure + gate + ": 1 group found",
        "=== gate_named_that ===",
      ]),
      sections: [
        {
          name: gate,
          said: list_join_newline([
            "gate_named_this is here twice",
            " 1 group found",
          ]),
        },
      ],
      why: "the older shape, where a gate prints its findings as it goes and throws a count. Nothing about following a long complaint may change what a short one does, and the lines printed before the throw are still the ones carrying the names",
    },
    {
      name: "a gate quiet on the second ask says nothing",
      output: list_join_newline([
        "=== " + gate + " ===",
        "QUIET ON THE SECOND ASK  " + gate + ": nothing to say",
        "=== gate_named_that ===",
      ]),
      sections: [],
      why: "it complained while the others ran and had nothing to say alone, which is what a file being saved mid-run looks like. Counting it would hold an app over an edit that has already landed",
    },
    {
      name: "printing that stops part way through a complaint keeps what arrived",
      output: list_join_newline([
        "=== " + gate + " ===",
        opening,
        ' "list": [',
        '  "gate_named_this"',
      ]),
      sections: [
        {
          name: gate,
          said: list_join_newline([" {", ' "list": [', '  "gate_named_this"']),
        },
      ],
      why: "a run cut off has still said who is at fault, and dropping the section for want of a closing brace would turn a named complaint into a nameless one - which is the answer that holds every app",
    },
  ];
  return cases;
}
