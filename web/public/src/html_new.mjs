import {file_write} from './file_write.mjs';
import {file_open} from "./file_open.mjs";
import {folder_public_combine} from "./folder_public_combine.mjs";
import {file_name_html} from "./file_name_html.mjs";
import {folder_public} from "./folder_public.mjs";
import {path_join} from "./path_join.mjs";
import {file_overwrite} from "./file_overwrite.mjs";
export async function html_new(name) {
  const file_name = file_name_html(name);
  const file_path = folder_public_combine(file_name);
  await file_write(file_path, `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${name}</title>
</head>
<body>

</body>
</html>`);
  await file_open(file_path);
}
