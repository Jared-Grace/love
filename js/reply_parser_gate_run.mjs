import { reply_last } from "./reply_last.mjs";
import { reply_choice } from "./reply_choice.mjs";
import { reply_optional } from "./reply_optional.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { fn_name } from "./fn_name.mjs";
import { reply_once_or_more } from "./reply_once_or_more.mjs";
import { property_get } from "./property_get.mjs";
import { reply_messages_inner } from "./reply_messages_inner.mjs";
import { json_equal_assert_json } from "./json_equal_assert_json.mjs";
import { each_async } from "./each_async.mjs";
import { list_size } from "./list_size.mjs";
export async function reply_parser_gate_run() {
  "Checks the reply parser against written-down messages and the tokens each one should come apart into - a sequence a choice an optional and a once-or-more each read both where they match and where they must not";
  "★ THE WALK MUST BE AWAITED, AND THAT IS THE ONE THING THIS FILE CAN GET WRONG WITHOUT ANYONE FINDING OUT. Reading a message is asynchronous, so a walk that calls the check without awaiting it launches every case and returns before a single one has answered: the function hands back success, and the failures arrive afterwards as rejections nobody is holding a catch around. Measured 2026-09-18, it printed its result first and crashed second, and that is why no gate could run it.";
  ("★ THE EXPECTED RESULT IS THE WHOLE RECORD, SPELLED IN THE ORDER THE READER BUILDS IT. The comparison goes through ",
    fn_name("json_to"),
    ", so a field left out and a field in the wrong place both read as a difference - which is deliberate: a new field appearing in the parse result should break this and be looked at, not slip past. cost and codes appeared on 2026-09-07 and sat unnoticed here until the walk above was fixed.");
  let last = reply_last();
  let choice_a_k = reply_choice(["a", "k"]);
  let item = "a";
  let optional_a = reply_optional(item);
  let seq_a_k = reply_sequence(["a", "k"]);
  let seq_k_a = reply_sequence(["k", "a"]);
  let name_last = {
    namespace: fn_name("reply_last"),
  };
  let cases = [
    {
      message: "a",
      start: reply_sequence(["a"]),
      expected: {
        tokens: ["a", name_last],
        index: 1,
        matches: true,
        cost: 0,
        message: "a",
        outputs: [],
        codes: [],
      },
    },
    {
      message: "ak",
      start: reply_sequence(["a", "k"]),
      expected: {
        tokens: ["a", "k", name_last],
        index: 2,
        matches: true,
        cost: 0,
        message: "ak",
        outputs: [],
        codes: [],
      },
    },
    {
      message: "",
      start: reply_sequence([last]),
      expected: {
        tokens: [name_last],
        index: 1,
        matches: true,
        cost: 0,
        message: "",
        outputs: [],
        codes: [],
      },
    },
    {
      message: "a",
      start: reply_sequence(["a", last]),
      expected: {
        tokens: ["a", name_last],
        index: 2,
        matches: true,
        cost: 0,
        message: "a",
        outputs: [],
        codes: [],
      },
    },
    {
      message: "a",
      start: reply_choice(["a", "k"]),
      expected: {
        tokens: ["a", name_last],
        index: 1,
        matches: true,
        cost: 0,
        message: "a",
        outputs: [],
        codes: [],
      },
    },
    {
      message: "k",
      start: choice_a_k,
      expected: {
        tokens: ["k", name_last],
        index: 1,
        matches: true,
        cost: 0,
        message: "k",
        outputs: [],
        codes: [],
      },
    },
    {
      message: "a",
      start: reply_sequence([choice_a_k]),
      expected: {
        tokens: ["a", name_last],
        index: 1,
        matches: true,
        cost: 0,
        message: "a",
        outputs: [],
        codes: [],
      },
    },
    {
      message: "k",
      start: reply_sequence([choice_a_k]),
      expected: {
        tokens: ["k", name_last],
        index: 1,
        matches: true,
        cost: 0,
        message: "k",
        outputs: [],
        codes: [],
      },
    },
    {
      message: "kk",
      start: reply_sequence([choice_a_k, choice_a_k]),
      expected: {
        tokens: ["k", "k", name_last],
        index: 2,
        matches: true,
        cost: 0,
        message: "kk",
        outputs: [],
        codes: [],
      },
    },
    {
      message: "ak",
      start: reply_choice([seq_a_k, seq_k_a]),
      expected: {
        tokens: ["a", "k", name_last],
        index: 2,
        matches: true,
        cost: 0,
        message: "ak",
        outputs: [],
        codes: [],
      },
    },
    {
      message: "ka",
      start: reply_choice([seq_a_k, seq_k_a]),
      expected: {
        tokens: ["k", "a", name_last],
        index: 2,
        matches: true,
        cost: 0,
        message: "ka",
        outputs: [],
        codes: [],
      },
    },
    {
      message: "ak",
      start: reply_sequence([choice_a_k, "k"]),
      expected: {
        tokens: ["a", "k", name_last],
        index: 2,
        matches: true,
        cost: 0,
        message: "ak",
        outputs: [],
        codes: [],
      },
    },
    {
      message: "ak",
      start: reply_sequence([choice_a_k, "l"]),
      expected: {
        matches: false,
        message: "ak",
      },
    },
    {
      message: "a",
      start: reply_sequence([choice_a_k, last]),
      expected: {
        tokens: ["a", name_last],
        index: 2,
        matches: true,
        cost: 0,
        message: "a",
        outputs: [],
        codes: [],
      },
    },
    {
      message: "a",
      start: reply_sequence(["a", optional_a, last]),
      expected: {
        tokens: ["a", name_last],
        index: 2,
        matches: true,
        cost: 0,
        message: "a",
        outputs: [],
        codes: [],
      },
    },
    {
      message: "aa",
      start: reply_sequence(["a", optional_a, last]),
      expected: {
        tokens: ["a", "a", name_last],
        index: 3,
        matches: true,
        cost: 0,
        message: "aa",
        outputs: [],
        codes: [],
      },
    },
    {
      message: "aaa",
      start: reply_once_or_more("a"),
      expected: {
        tokens: ["a", "a", "a", name_last],
        index: 3,
        matches: true,
        cost: 0,
        message: "aaa",
        outputs: [],
        codes: [],
      },
    },
    {
      message: "akk",
      start: reply_once_or_more(choice_a_k),
      expected: {
        tokens: ["a", "k", "k", name_last],
        index: 3,
        matches: true,
        cost: 0,
        message: "akk",
        outputs: [],
        codes: [],
      },
    },
  ];
  async function lambda(case_item) {
    let message = property_get(case_item, "message");
    let start = property_get(case_item, "start");
    let expected = property_get(case_item, "expected");
    let actual = await reply_messages_inner(message, start);
    json_equal_assert_json(actual, expected, {
      hint: "the reply parse should match the expected tokens for this message",
      message,
    });
  }
  await each_async(cases, lambda);
  let checked = list_size(cases);
  let r = {
    checked,
  };
  return r;
}
