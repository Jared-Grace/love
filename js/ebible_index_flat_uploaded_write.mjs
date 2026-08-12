import { ebible_index_flat_uploaded_measure } from "./ebible_index_flat_uploaded_measure.mjs";
import { ebible_index_flat_uploaded_path } from "./ebible_index_flat_uploaded_path.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function ebible_index_flat_uploaded_write() {
  "Asks storage which bibles have a flat index and writes the answer down.";
  "The asking reaches the network, so it is a command somebody runs. What checks the answer afterwards needs nothing but the file, and so can run wherever the rest of the gates run.";
  let measured = await ebible_index_flat_uploaded_measure();
  let path = ebible_index_flat_uploaded_path();
  await file_overwrite_json(path, measured);
  return measured;
}
