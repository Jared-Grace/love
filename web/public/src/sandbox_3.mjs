import { assert_json_get } from "../../../love/public/src/assert_json_get.mjs";
import { object_merge_generic_message_match } from "../../../love/public/src/object_merge_generic_message_match.mjs";
import { text_includes } from "../../../love/public/src/text_includes.mjs";
import { text_to } from "../../../love/public/src/text_to.mjs";
import { throws_assert } from "../../../love/public/src/throws_assert.mjs";
import { json_equal_assert } from "../../../love/public/src/json_equal_assert.mjs";
import { object_merge_match } from "../../../love/public/src/object_merge_match.mjs";
export async function sandbox_3() {
  let to = null;
  to = {};
  object_merge_match(to, {});
  json_equal_assert(to, {});
  to = {};
  object_merge_match(to, {
    a: 1,
  });
  json_equal_assert(to, {
    a: 1,
  });
  to = {
    b: 2,
  };
  object_merge_match(to, {
    a: 1,
  });
  json_equal_assert(to, {
    b: 2,
    a: 1,
  });
  to = {
    b: 2,
    a: 1,
  };
  object_merge_match(to, {
    b: 2,
    a: 1,
  });
  json_equal_assert(to, {
    b: 2,
    a: 1,
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
  json_equal_assert(to, {
    c: 3,
    b: 2,
    a: 1,
  });
  to = {
    c: 3,
    b: 2,
    a: 1,
  };
  function lambda2() {
    object_merge_match(to, {
      a: 2,
    });
  }
  let e = throws_assert(lambda2);
  let t = text_to(e);
  let part = object_merge_generic_message_match();
  let i = text_includes(t, part);
  function lambda3() {}
  assert_json_get(b2, lambda3);
  return e;
}
