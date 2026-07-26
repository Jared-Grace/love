export function code_calls_name_is(code, name) {
  "Whether this source text calls the fn of this name, rather than only mentioning it";
  "Handing a fn's own name to something else reads the same to a plain text search as calling it, and the two mean opposite things when the question is what a fn does";
  "The word boundary keeps a longer name that ends in this one from counting, since an underscore joins rather than separates";
  let pattern = new RegExp("\\b" + name + "\\(");
  let called = pattern.test(code);
  return called;
}
