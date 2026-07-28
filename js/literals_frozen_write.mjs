import { literals_frozen_values } from "./literals_frozen_values.mjs";
import { literals_frozen_path } from "./literals_frozen_path.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function literals_frozen_write() {
  "Writes the record of what every frozen constant hands back today.";
  "Run this only when a frozen value is deliberately being changed. That is a rare and heavy thing to do - the point of the list is that these values have already escaped - so the changed record is meant to sit in the commit as the visible sign that it happened.";
  "The record is generated rather than kept by hand for the usual reason: a copy that can be edited on its own can be brought into line with a mistake as easily as with an intention.";
  let values = await literals_frozen_values();
  let path = literals_frozen_path();
  await file_overwrite_json(path, values);
  return path;
}
