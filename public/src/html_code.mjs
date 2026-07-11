import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export function html_code(name, body) {
  let r = text_combine_multiple([
    '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>',
    name,
    '</title>\n</head>\n<body>\n  ',
    body,
    '\n</body>\n</html>',
  ]);
  return r;
}
