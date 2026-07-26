export function js_code_texts_listed(f_name, note, texts) {
  "the source of a function that answers a fixed list of pieces of text, one per line so a change to one of them reads as one line in a diff";
  "the text is written out as JSON rather than quoted by hand, which is what keeps a quote or a backslash inside one of them from ending the string early and turning the generated file into something that will not parse";
  let lines = [];
  for (let text of texts) {
    let json = json_to(text);
    let line = text_combine_multiple(["    ", json, ",\n"]);
    list_add(lines, line);
  }
  let joined = list_join(lines, "");
  let code = text_combine_multiple([
    "export function ",
    f_name,
    "() {\n",
    "  ",
    json_to(note),
    ";\n",
    "  let texts = [\n",
    joined,
    "  ];\n",
    "  return texts;\n",
    "}\n",
  ]);
  return code;
}
