import { reply_once_or_more } from "../../../love/public/src/reply_once_or_more.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { reply_optional } from "../../../love/public/src/reply_optional.mjs";
import { reply_messages_inner } from "../../../love/public/src/reply_messages_inner.mjs";
import { reply_last } from "../../../love/public/src/reply_last.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { json_equal_assert } from "../../../love/public/src/json_equal_assert.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
import { reply_choice } from "./reply_choice.mjs";
export function reply_test() {
  let last = reply_last();
  const choice_a_k = reply_choice(["a", "k"]);
  const item = "a";
  const optional_a = reply_optional(item);
  let seq_a_k = reply_sequence(["a", "k"]);
  let seq_k_a = reply_sequence(["k", "a"]);
  let cases = [
    {
      message: "a",
      start: reply_sequence(["a"]),
      expected: {
        tokens: [
          "a",
          {
            namespace: "reply_last",
          },
        ],
        outputs: [],
        index: 1,
        matches: true,
        message: "a",
      },
    },
    {
      message: "ak",
      start: reply_sequence(["a", "k"]),
      expected: {
        tokens: [
          "a",
          "k",
          {
            namespace: "reply_last",
          },
        ],
        outputs: [],
        index: 2,
        matches: true,
        message: "ak",
      },
    },
    {
      message: "",
      start: reply_sequence([last]),
      expected: {
        tokens: [
          {
            namespace: "reply_last",
          },
        ],
        outputs: [],
        index: 1,
        matches: true,
        message: "",
      },
    },
    {
      message: "a",
      start: reply_sequence(["a", last]),
      expected: {
        tokens: [
          "a",
          {
            namespace: "reply_last",
          },
        ],
        outputs: [],
        index: 2,
        matches: true,
        message: "a",
      },
    },
    {
      message: "a",
      start: reply_choice(["a", "k"]),
      expected: {
        tokens: [
          "a",
          {
            namespace: "reply_last",
          },
        ],
        outputs: [],
        index: 1,
        matches: true,
        message: "a",
      },
    },
    {
      message: "k",
      start: choice_a_k,
      expected: {
        tokens: [
          "k",
          {
            namespace: "reply_last",
          },
        ],
        outputs: [],
        index: 1,
        matches: true,
        message: "k",
      },
    },
    {
      message: "a",
      start: reply_sequence([choice_a_k]),
      expected: {
        tokens: [
          "a",
          {
            namespace: "reply_last",
          },
        ],
        outputs: [],
        index: 1,
        matches: true,
        message: "a",
      },
    },
    {
      message: "k",
      start: reply_sequence([choice_a_k]),
      expected: {
        tokens: [
          "k",
          {
            namespace: "reply_last",
          },
        ],
        outputs: [],
        index: 1,
        matches: true,
        message: "k",
      },
    },
    {
      message: "kk",
      start: reply_sequence([choice_a_k, choice_a_k]),
      expected: {
        tokens: [
          "k",
          "k",
          {
            namespace: "reply_last",
          },
        ],
        outputs: [],
        index: 2,
        matches: true,
        message: "kk",
      },
    },
    {
      message: "ak",
      start: reply_choice([seq_a_k, seq_k_a]),
      expected: {
        tokens: [
          "a",
          "k",
          {
            namespace: "reply_last",
          },
        ],
        outputs: [],
        index: 2,
        matches: true,
        message: "ak",
      },
    },
    {
      message: "ka",
      start: reply_choice([seq_a_k, seq_k_a]),
      expected: {
        tokens: [
          "k",
          "a",
          {
            namespace: "reply_last",
          },
        ],
        outputs: [],
        index: 2,
        matches: true,
        message: "ka",
      },
    },
    {
      message: "ak",
      start: reply_sequence([choice_a_k, "k"]),
      expected: {
        tokens: [
          "a",
          "k",
          {
            namespace: "reply_last",
          },
        ],
        outputs: [],
        index: 2,
        matches: true,
        message: "ak",
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
        tokens: [
          "a",
          {
            namespace: "reply_last",
          },
        ],
        outputs: [],
        index: 2,
        matches: true,
        message: "a",
      },
    },
    {
      message: "a",
      start: reply_sequence(["a", optional_a, last]),
      expected: {
        tokens: [
          "a",
          {
            namespace: "reply_last",
          },
        ],
        outputs: [],
        index: 2,
        matches: true,
        message: "a",
      },
    },
    {
      message: "aa",
      start: reply_sequence(["a", optional_a, last]),
      expected: {
        tokens: [
          "a",
          "a",
          {
            namespace: "reply_last",
          },
        ],
        outputs: [],
        index: 3,
        matches: true,
        message: "aa",
      },
    },
    {
      message: "aaa",
      start: reply_once_or_more("a"),
      expected: {
        tokens: [
          "a",
          "a",
          "a",
          {
            namespace: "reply_last",
          },
        ],
        outputs: [],
        index: 3,
        matches: true,
        message: "aaa",
      },
    },
    {
      message: "akk",
      start: reply_once_or_more(choice_a_k),
      expected: {
        tokens: [
          "a",
          "k",
          "k",
          {
            namespace: "reply_last",
          },
        ],
        outputs: [],
        index: 3,
        matches: true,
        message: "akk",
      },
    },
  ];
  async function lambda(item) {
    let message = property_get(item, "message");
    let start2 = property_get(item, "start");
    let expected = property_get(item, "expected");
    let actual = await reply_messages_inner(message, start2);
    json_equal_assert(actual, expected);
  }
  each(cases, lambda);
}
