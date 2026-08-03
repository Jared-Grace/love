export function js_code_function_shape(code) {
  "What the one function written out in this piece of code does, with its own name, its private names and its prose taken away, so that it can be held beside another and compared";
  "Written out rather than read off a file, so a question about what the comparing does can be asked of code that is standing right there instead of code that had to be committed first";
  let ast = js_parse(code);
  let declaration = js_flo(ast);
  let shape = js_function_shape(declaration);
  return shape;
}
