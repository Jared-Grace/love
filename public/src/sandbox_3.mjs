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
  object_merge_match(to, {
    b: 2,
    a: 2,
  });
  json_equal_assert(to, {
    c: 3,
    b: 2,
    a: 1,
  });
}
