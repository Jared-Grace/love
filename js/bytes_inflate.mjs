export async function bytes_inflate(bytes) {
  "$plain bytes";
  "The bytes a run of zlib-compressed bytes stands for.";
  "Written as its own name rather than inside the one reader that wanted it, because compression is a property of a file format and several of the formats worth reading here use the same one. A Sword module is the first; nothing about undoing zlib knows or cares that a bible is inside.";
  "The synchronous form is asked for on purpose. This is called once per block of a bible and the answer is held, so a few dozen calls decide the whole reading, and the callers are node-side builders rather than anything a person is waiting on.";
  let zlib = await import("zlib");
  let r = zlib.inflateSync(bytes);
  return r;
}
