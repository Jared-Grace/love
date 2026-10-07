import { strongs_hebrew_js_path } from "./strongs_hebrew_js_path.mjs";
import { file_read } from "./file_read.mjs";
import { json_from } from "./json_from.mjs";
export async function strongs_hebrew_dictionary() {
  "Strong's Hebrew Dictionary (James Strong, 1894; openscriptures JSON, CC-BY-SA), the whole of it, keyed H1, H2 and on, each entry { lemma, xlit, pron, derivation, strongs_def, kjv_def }.";
  "THE FILE IS A SCRIPT AND IS READ AS TEXT, because the download assigns the dictionary to a variable and then exports it. The object runs from the first opening brace to the last closing one, and the header comment above it holds no brace.";
  "IT HANDS BACK THE WHOLE DICTIONARY AND KEEPS NO COPY, so a caller that asks about thousands of numbers reads the file once by asking once.";
  let file_path = strongs_hebrew_js_path();
  let text = await file_read(file_path);
  let start = text.indexOf("{");
  let end = text.lastIndexOf("}");
  let json = text.slice(start, end + 1);
  let dictionary = json_from(json);
  return dictionary;
}
