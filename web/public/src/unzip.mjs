import { file_write_buffer } from "./file_write_buffer.mjs";
export async function unzip(buffer) {
  const { gunzip } = await import("zlib");
  const { promisify } = await import("util");
  const gunzipAsync = promisify(gunzip);
  const unzipped = await gunzipAsync(buffer);
  await file_write_buffer(f_path, contents);
}
