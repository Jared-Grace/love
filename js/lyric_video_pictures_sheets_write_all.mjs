import { folder_read } from "./folder_read.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { lyric_video_pictures_sheet_write } from "./lyric_video_pictures_sheet_write.mjs";
import { list_size } from "./list_size.mjs";
export async function lyric_video_pictures_sheets_write_all() {
  "A sheet for every lyric video picture folder there is, so the whole body of pictures can be looked over without naming one folder at a time. Answers one row per folder, saying where its sheet was written and how many pictures went into it.";
  "WHY IT EXISTS: the pictures already written into documents were never looked at, and there are more than a hundred folders of them. Naming each folder by hand is the same command typed a hundred times, which leaves nothing behind; this finds its own set from the folder itself.";
  "A FOLDER IS TAKEN ONLY IF IT IS NAMED FOR A DOCUMENT, that is, if its name starts with the translation prefix. The folder holding downloaded originals is passed over, and so is anything else that is not a document's own folder.";
  let folder_pictures = "gitignore/lyric_video_pictures";
  let names = await folder_read(folder_pictures);
  function lambda_document(name) {
    let document = text_starts_with(name, "bsb_");
    return document;
  }
  let documents = names.filter(lambda_document);
  let rows = [];
  for (let document_name of documents) {
    let sheet = await lyric_video_pictures_sheet_write(document_name);
    let count = list_size(sheet.names);
    let row = {
      document_name,
      sheet_path: sheet.sheet_path,
      count,
    };
    rows.push(row);
  }
  return rows;
}
