import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { global_function_property_exists } from "./global_function_property_exists.mjs";
import { global_function_property_get } from "./global_function_property_get.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { js_code_literals_key_only } from "./js_code_literals_key_only.mjs";
import { global_function_property_set } from "./global_function_property_set.mjs";
import { property_exists } from "./property_exists.mjs";
export function js_code_literal_key_only_remembered(code, literal) {
  arguments_assert(arguments, 2);
  ("Whether this one written word names a field everywhere the file mentions it,");
  ("answered from a table of the whole file that is worked out once and then held");
  ("for as long as the asking stays on that file.");
  (fn_name("js_code_literal_key_only"),
    " answers the same question and reads the file in and");
  ("walks it every single time, so a caller asking about many spellings of one");
  ("file in a row pays that walk once per spelling. Over this repo that measured");
  ("sixty-two seconds against three, for the same answers.");
  ("What is held is the file's own writing beside its table, so a file that has");
  ("changed is a different question and cannot be answered from the old one - the");
  ("staleness a table kept under a name would have is not possible here.");
  ("Only the one most recent file is held, which suits a caller working through a");
  ("file's spellings together and then moving on. A caller alternating between");
  ("files would find nothing held each time and would be better served by the");
  ("word-at-a-time form.");
  let known = global_function_property_exists(
    js_code_literal_key_only_remembered,
    "code",
  );
  let same = false;
  if (known) {
    let code_before = global_function_property_get(
      js_code_literal_key_only_remembered,
      "code",
    );
    same = equal(code_before, code);
  }
  if (not(same)) {
    let table = js_code_literals_key_only(code);
    global_function_property_set(
      js_code_literal_key_only_remembered,
      "code",
      code,
    );
    global_function_property_set(
      js_code_literal_key_only_remembered,
      "key_only",
      table,
    );
  }
  let key_only = global_function_property_get(
    js_code_literal_key_only_remembered,
    "key_only",
  );
  let answer = property_exists(key_only, literal);
  return answer;
}
