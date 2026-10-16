import zlib from "zlib";
import { json_compress_object } from "./json_compress_object.mjs";
import { firebase_upload_object_arg } from "./firebase_upload_object_arg.mjs";
import { property_get } from "./property_get.mjs";
import { md5_base64 } from "./md5_base64.mjs";
export async function firebase_upload_object_compressed_md5(value) {
  "The checksum storage would hold for a value written by the compressed upload, worked out without writing it.";
  "IT REPEATS EVERY STEP THAT UPLOAD TAKES, in order: the value is squeezed, wrapped, turned into text, and then gzipped the way the storage library gzips - with zlib's own defaults - because storage keeps and checksums the gzipped bytes, not the text.";
  "If the library ever gzips differently, every checksum here stops matching and every file is written again. That costs money but never loses a change, which is the side worth erring on.";
  let compressed = await json_compress_object(value);
  let arg = firebase_upload_object_arg(compressed);
  let content = property_get(arg, "content");
  let buffer = Buffer.from(content);
  let gzipped = zlib.gzipSync(buffer);
  let md = md5_base64(gzipped);
  return md;
}
