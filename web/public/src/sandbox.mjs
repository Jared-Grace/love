import { folder_user_combine } from "../../../love/public/src/folder_user_combine.mjs";
export async function sandbox() {
  const XLSX = await import("xlsx");
  const { writeFileSync } = await import("fs");
  ("todo: download from");
  ("https://bereanbible.com/bsb_tables.xlsx");
  let joined = folder_user_combine("downloads", "bsb_tables.xlsx");
  const wb = XLSX.readFile(joined);
  const ws = wb.Sheets[wb.SheetNames[0]];
  const json = XLSX.utils.sheet_to_json(ws);
  let v = JSON.stringify(json, null, 2);
  writeFileSync(joined + ".json", v);
}
