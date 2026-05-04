import { folder_user_docs_read_lines } from "../../../love/public/src/folder_user_docs_read_lines.mjs";
import { folder_user_docs_path } from "../../../love/public/src/folder_user_docs_path.mjs";
export async function app_calendar_urls() {
  let result = folder_user_docs_path(file_name);
  let split = await folder_user_docs_read_lines(
    "bible_references.hopenation.org.txt",
  );
}
