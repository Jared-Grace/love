import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { json_equal_assert } from "../../../love/public/src/json_equal_assert.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { reply_messages } from "../../../love/public/src/reply_messages.mjs";
import { reply_sequence } from "./reply_sequence.mjs";
export async function reply_test() {
  marker("1");
  let cases = [
    {
      messages: ["a"],
      start: reply_sequence(["a"]),
      expected: [
        {
          tokens: ["a", {}],
          outputs: [],
          index: 1,
          matches: true,
          input: "a",
        },
      ],
    },
    {
      messages: ["a", "k"],
      start: reply_sequence(["a", "k"]),
      expected: [
        {
          tokens: ["a", {}],
          outputs: [],
          index: 1,
          matches: true,
          input: "a",
        },
      ],
    },
  ];
  async function lambda(item) {
    let messages2 = object_property_get(item, "messages");
    let start2 = object_property_get(item, "start");
    let expected = object_property_get(item, "expected");
    let actual = await reply_messages(messages2, start2);
    json_equal_assert(actual, expected);
  }
  await each_async(cases, lambda);
}
