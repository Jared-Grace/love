export function js_code_handback_object(names) {
  ("The written-out object a moved body hands back, carrying one name for each thing it wrote to that belonged to the function it used to sit inside.");
  ("Each name stands alone rather than being spelled twice with a colon between. The word being handed back and the word it will be put back under are the same word, and JS reads a name on its own as both, so writing it once is the whole of what needs saying.");
  let joined = js_code_join_comma_space(names);
  let code = js_code_wrap_braces(joined);
  return code;
}
