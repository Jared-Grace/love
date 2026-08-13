import { text_is } from "./text_is.mjs";
import { json_format_to } from "./json_format_to.mjs";
export function value_file_contents_extension(value) {
  "One value asked what it would be as a file - the contents to write, and the extension that says which shape they are.";
  "This is the one place the question is decided, so every fn that writes a value out gets the same answer to it. A fn that branched on the value itself would be reading a convention off its own body, where a reader has to open it to learn what the file will be, and two such fns would drift into two conventions.";
  "Text is written as itself, because it already IS the contents of a file. Anything else is written as formatted JSON, which is the only shape a file can hold it in.";
  "The extension is not decoration - a file with none opens as a file of no kind, so nothing highlights it and nothing folds it.";
  let is_text = text_is(value);
  if (is_text) {
    let text = {
      contents: value,
      extension: ".txt",
    };
    return text;
  }
  let json = {
    contents: json_format_to(value),
    extension: ".json",
  };
  return json;
}
