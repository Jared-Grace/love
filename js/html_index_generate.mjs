import { html_name_to_path } from "./html_name_to_path.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { user_repo_path_combine } from "./user_repo_path_combine.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function html_index_generate(app_name) {
  let combined2 = html_name_to_path("index");
  let combined = await user_repo_path_combine(combined2);
  let contents = text_combine_multiple([
    '<!DOCTYPE html>\n<html>\n<head>\n<meta name="viewport" content="width=device-width, initial-scale=1">\n  <style>\n    html, body {\n      margin: 0;\n      padding: 0;\n      height: 100%;\n    }\n    iframe {\n      border: none;\n      width: 100%;\n      height: 100%;   /* now 100% of viewport */\n      display: block; /* remove default inline gap */\n    }\n  </style>\n</head>\n<body>\n  <iframe src="',
    app_name,
    '.html"></iframe>\n</body>\n</html>',
  ]);
  await file_overwrite(combined, contents);
}
