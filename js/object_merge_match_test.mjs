import { text_includes_assert_json } from "./text_includes_assert_json.mjs";
import { object_merge_generic_message_match } from "./object_merge_generic_message_match.mjs";
import { throws_assert_text } from "./throws_assert_text.mjs";
import { json_equal_assert_json } from "./json_equal_assert_json.mjs";
import { object_merge_match } from "./object_merge_match.mjs";
export function object_merge_match_test() {
  let to = null;
  to = {};
  object_merge_match(to, {});
  json_equal_assert_json(to, {}, {
    hint: "object_merge_match should leave the merged object matching the expected shape",
  });
  to = {};
  object_merge_match(to, {
    a: 1,
  });
  json_equal_assert_json(to, {
    a: 1,
  }, {
    hint: "object_merge_match should leave the merged object matching the expected shape",
  });
  to = {
    b: 2,
  };
  object_merge_match(to, {
    a: 1,
  });
  json_equal_assert_json(to, {
    b: 2,
    a: 1,
  }, {
    hint: "object_merge_match should leave the merged object matching the expected shape",
  });
  to = {
    b: 2,
    a: 1,
  };
  object_merge_match(to, {
    b: 2,
    a: 1,
  });
  json_equal_assert_json(to, {
    b: 2,
    a: 1,
  }, {
    hint: "object_merge_match should leave the merged object matching the expected shape",
  });
  to = {
    c: 3,
    b: 2,
    a: 1,
  };
  object_merge_match(to, {
    b: 2,
    a: 1,
  });
  json_equal_assert_json(to, {
    c: 3,
    b: 2,
    a: 1,
  }, {
    hint: "object_merge_match should leave the merged object matching the expected shape",
  });
  to = {
    c: 3,
    b: 2,
    a: 1,
  };
  function lambda() {
    object_merge_match(to, {
      a: 2,
    });
  }
  let input = throws_assert_text(lambda);
  let part = object_merge_generic_message_match();
  text_includes_assert_json(input, part, {
    hint: "the thrown error text should include the expected message part",
  });
}
