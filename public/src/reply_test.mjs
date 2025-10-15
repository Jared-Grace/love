import { log } from "../../../love/public/src/log.mjs";
import { reply_dictionary } from "../../../love/public/src/reply_dictionary.mjs";
import { reply_messages_inner } from "../../../love/public/src/reply_messages_inner.mjs";
import { reply_last } from "../../../love/public/src/reply_last.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { json_equal_assert } from "../../../love/public/src/json_equal_assert.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { reply_choice } from "./reply_choice.mjs";
export async function reply_test() {
  let dictionary = await reply_dictionary();
  let last = reply_last();
  marker("1");
  const choice_a_k = reply_choice(["a", "k"]);
  let seq_a_k = reply_sequence(["a", "k"]);
  let seq_k_a = reply_sequence(["k", "a"]);
  let cases = [
    {
      message: "a",
      start: reply_sequence(["a"]),
      expected: {
        tokens: ["a", {}],
        outputs: [],
        index: 1,
        matches: true,
        input: "a",
      },
    },
    {
      message: "ak",
      start: reply_sequence(["a", "k"]),
      expected: {
        tokens: ["a", "k", {}],
        outputs: [],
        index: 2,
        matches: true,
        input: "ak",
      },
    },
    {
      message: "a",
      start: reply_sequence(["a", last]),
      expected: {
        tokens: ["a", {}],
        outputs: [],
        index: 2,
        matches: true,
        input: "a",
      },
    },
    {
      message: "a",
      start: reply_choice(["a", "k"]),
      expected: {
        tokens: ["a", {}],
        outputs: [],
        index: 1,
        matches: true,
        input: "a",
      },
    },
    {
      message: "k",
      start: choice_a_k,
      expected: {
        tokens: ["k", {}],
        outputs: [],
        index: 1,
        matches: true,
        input: "k",
      },
    },
    {
      message: "a",
      start: reply_sequence([choice_a_k]),
      expected: {
        tokens: ["a", {}],
        outputs: [],
        index: 1,
        matches: true,
        input: "a",
      },
    },
    {
      message: "k",
      start: reply_sequence([choice_a_k]),
      expected: {
        tokens: ["k", {}],
        outputs: [],
        index: 1,
        matches: true,
        input: "k",
      },
    },
    {
      message: "kk",
      start: reply_sequence([choice_a_k, choice_a_k]),
      expected: {
        tokens: ["k", "k", {}],
        outputs: [],
        index: 2,
        matches: true,
        input: "kk",
      },
    },
    {
      message: "",
      start: reply_sequence([last]),
      expected: {
        tokens: [{}],
        outputs: [],
        index: 1,
        matches: true,
        input: "",
      },
    },
    {
      message: "a",
      start: reply_sequence(["a", last]),
      expected: {
        tokens: ["a", {}],
        outputs: [],
        index: 2,
        matches: true,
        input: "a",
      },
    },
    {
      message: "ak",
      start: reply_choice([seq_a_k, seq_k_a]),
      expected: {
        tokens: ["a", "k", {}],
        outputs: [],
        index: 2,
        matches: true,
        input: "ak",
      },
    },
    {
      message: "ka",
      start: reply_choice([seq_a_k, seq_k_a]),
      expected: {
        tokens: ["k", "a", {}],
        outputs: [],
        index: 2,
        matches: true,
        input: "ka",
      },
    },
    {
      message: "ak",
      start: reply_sequence([choice_a_k, "k"]),
      expected: {
        tokens: ["a", "k", {}],
        outputs: [],
        index: 2,
        matches: true,
        input: "ak",
      },
    },
    {
      message: "ak",
      start: reply_sequence([choice_a_k, "l"]),
      expected: [],
    },
  ];
  async function lambda(item) {
    let message = object_property_get(item, "message");
    let start2 = object_property_get(item, "start");
    let expected = object_property_get(item, "expected");
    log({
      message,
    });
    let actual = reply_messages_inner(message, dictionary, start2);
    json_equal_assert(actual, expected);
  }
  await each_async(cases, lambda);
}
