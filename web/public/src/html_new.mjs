import {file_name_html} from './file_name_html.mjs';
import {folder_public} from './folder_public.mjs';
import {path_join} from './path_join.mjs';
import {file_overwrite} from "./file_overwrite.mjs";
export async function html_new(name) {
  await file_overwrite(path_join([folder_public(), file_name_html(name)]), `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${name}</title>
</head>
<body>

</body>
</html>`);
}
s;
