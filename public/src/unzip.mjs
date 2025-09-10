export async function unzip(buffer) {
  const { gunzip } = await import("zlib");
  const { promisify } = await import("util");
  const gunzipAsync = promisify(gunzip);
  const uncompressed = await gunzipAsync(buffer);
  return uncompressed;
}
