import { folder_user_combine } from "../../../love/public/src/folder_user_combine.mjs";
export async function sandbox() {
  let joined = folder_user_combine(folder, destination);
  const XLSX = await import("xlsx");
  const { writeFileSync } = await import("fs");
  const wb = XLSX.readFile("input.xlsx");
  const ws = wb.Sheets[wb.SheetNames[0]];
  const json = XLSX.utils.sheet_to_json(ws);
  let v = JSON.stringify(json, null, 2);
  writeFileSync("output.json", v);
}
