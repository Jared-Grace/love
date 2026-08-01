export function js_unparse_parse(ast) {
  arguments_assert(arguments, 1);
  ("write a tree back out as source and read it straight back in, handing back the tree that came back");
  ("a transform works on the tree, so asking whether it threw only says the transform finished - it says nothing about whether what it left behind can be read. The two are genuinely different: a value written into the header of a loop that walks an object is a perfectly ordinary tree and an unparseable line, so the pass that wrote it finished cleanly and the file it had just rewritten would no longer load. Writing out and reading back is the only question that distinguishes them, and it costs no disk.");
  let code = js_unparse(ast);
  let read_back = js_parse(code);
  return read_back;
}
