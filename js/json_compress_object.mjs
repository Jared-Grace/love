import { json_compress } from "./json_compress.mjs";
export async function json_compress_object(data) {
  let compressed = await json_compress(data);
  let c = {
    compressed,
  };
  return c;
}
