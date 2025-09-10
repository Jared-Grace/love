import { local_function_path } from "./local_function_path.mjs";
import { file_write_buffer } from "./file_write_buffer.mjs";
export async function unzip(file_name, buffer) {
  const { gunzip } = await import("zlib");
  const { promisify } = await import("util");
  const gunzipAsync = promisify(gunzip);
  const unzipped = await gunzipAsync(buffer);
  let joined = local_function_path(unzip, file_name);
  await file_write_buffer(joined, unzipped);
}
