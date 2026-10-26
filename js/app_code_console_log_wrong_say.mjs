import { arguments_assert } from "./arguments_assert.mjs";
import { text_to } from "./text_to.mjs";
import { text_trim } from "./text_trim.mjs";
import { js_console_log_name } from "./js_console_log_name.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { not } from "./not.mjs";
import { text_size } from "./text_size.mjs";
import { text_slice } from "./text_slice.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { app_code_program_trace } from "./app_code_program_trace.mjs";
import { catch_null } from "./catch_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { js_string_quote } from "./js_string_quote.mjs";
import { js_tokenizer_normalized } from "./js_tokenizer_normalized.mjs";
export function app_code_console_log_wrong_say(question, answer, choice) {
  arguments_assert(arguments, 3);
  ("said when a learner picks a wrong output for one console.log call: that console.log writes out what is inside its ( ), worked out first when it is a sum, and without the quote marks when it is a text, as parts that take turns between words and code. null when the code is not one console.log call, when it cannot be followed, or when what it writes out is not the right answer");
  ("Not picked: the working of a sum step by step, as the expression reminder gives it; the lessons here teach what console.log does with its inside, and the value it writes out is enough to find the slip");
  let message = text_to(question);
  let code = text_trim(message);
  let right = text_to(answer);
  let name = js_console_log_name();
  ("a program of several lines may start and end like one call, so only a single line is taken");
  let lines = text_split_newline(code);
  let b5 = list_size_1(lines);
  if (not(b5)) {
    return null;
  }
  let start = name + "(";
  let start_size = text_size(start);
  let left = text_slice(code, 0, start_size);
  let b = equal(left, start);
  if (not(b)) {
    return null;
  }
  let call = code;
  let size = text_size(call);
  let from2 = subtract(size, 1);
  let left2 = text_slice(call, from2, size);
  if (equal(left2, ";")) {
    let to = subtract(size, 1);
    call = text_slice(call, 0, to);
    size = text_size(call);
  }
  let from3 = subtract(size, 1);
  let left3 = text_slice(call, from3, size);
  let b2 = equal(left3, ")");
  if (not(b2)) {
    return null;
  }
  let to2 = subtract(size, 1);
  let message2 = text_slice(call, start_size, to2);
  let inside = text_trim(message2);
  function trace_get() {
    let trace = app_code_program_trace(code);
    return trace;
  }
  let trace = catch_null(trace_get);
  if (null_is(trace)) {
    return null;
  }
  let logged = [];
  for (let entry of trace) {
    for (let action of property_get(entry, "actions")) {
      let left4 = property_get(action, "kind");
      if (equal(left4, "log")) {
        let input = property_get(action, "value");
        let item = text_to(input);
        list_add(logged, item);
      }
    }
  }
  let output = list_join_newline(logged);
  let b3 = equal(output, right);
  if (not(b3)) {
    return null;
  }
  let quote = js_string_quote();
  let how = " writes out what is inside its ";
  let after = "";
  let left5 = text_slice(inside, 0, 1);
  let b4 = equal(inside, output);
  ("only a text standing alone is written out as itself less its quote marks; a text joined to more is worked out like a sum");
  let list = js_tokenizer_normalized(inside);
  let alone = list_size_1(list);
  if (equal(left5, quote) && alone) {
    after = " without the quote marks";
  } else if (not(b4)) {
    how = " works out what is inside its ";
    after = ", then writes it out";
  }
  let parts = [
    "Remember: ",
    name,
    how,
    "( )",
    after + ", so ",
    code,
    " writes out ",
    output,
    "",
  ];
  return parts;
}
