import {file_read_json} from './file_read_json.mjs';
export async function data_all() {
  const file_path = "data.json";
  let data = await file_read_json(file_path);
  return {
    data,
    file_path
  };
}
