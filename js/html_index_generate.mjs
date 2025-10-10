import { file_overwrite } from "../../../love/public/src/file_overwrite.mjs";
import { file_name_html } from "../../../love/public/src/file_name_html.mjs";
import { folder_public_combine } from "../../../love/public/src/folder_public_combine.mjs";
import { user_repo_path_combine } from "../../../love/public/src/user_repo_path_combine.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function html_index_generate(app_name) {
  marker("1");
  let f_name = file_name_html("index");
  let combined2 = folder_public_combine(f_name);
  let combined = await user_repo_path_combine(combined2);
  let contents = `<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
    html, body {
      margin: 0;
      padding: 0;
      height: 100%;
    }
    iframe {
      border: none;
      width: 100%;
      height: 100%;   /* now 100% of viewport */
      display: block; /* remove default inline gap */
    }
  </style>
</head>
<body>
  <iframe src="${app_name}.html"></iframe>
</body>
</html>`;
  await file_overwrite(combined, contents);
}
