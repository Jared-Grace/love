export function text_from_code_number(code_number) {
  "The one character a number stands for, as text.";
  "Written this way rather than as the character itself wherever the character is one nothing shows - a mark that prints as nothing looks in the source like a mistyped empty word, and anybody tidying the file would take it out.";
  let t = String.fromCodePoint(code_number);
  return t;
}
