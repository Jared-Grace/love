import { text_includes } from "./text_includes.mjs";

// A zero-argument getter whose whole job is to return one string literal —
// the shape that makes a constant nameable. Returns that literal, or "" when
// `code` is not that shape.
export function js_code_getter_literal(code, f_name) {
  let start = code.indexOf("export function " + f_name + "()");
  if (start < 0) {
    return "";
  }
  let body = code.slice(start).split("\n}")[0];
  if (text_includes(body, "arguments_assert")) {
    return "";
  }
  if (!text_includes(body, "return")) {
    return "";
  }
  let matches = body.match(/"(?:[^"\\]|\\.)*"/g);
  if (!matches || matches.length !== 1) {
    return "";
  }
  return JSON.parse(matches[0]);
}
