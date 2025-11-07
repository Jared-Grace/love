export async function sandbox() {
  const wb = XLSX.readFile("input.xlsx");
  const ws = wb.Sheets[wb.SheetNames[0]];
  const json = XLSX.utils.sheet_to_json(ws);
  let v = JSON.stringify(json, null, 2);
  writeFileSync("output.json", v);
}
