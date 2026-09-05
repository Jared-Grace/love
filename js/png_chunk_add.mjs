export function png_chunk_add(buffer_png, bytes_chunk) {
  "put a whole chunk into a PNG, directly after the header chunk, and hand back the picture that makes";
  "directly after the header is the one place that is right for every chunk this is used for and wrong for none of them: the header must come first by the format's own rule, and everything else may sit anywhere before the picture data begins";
  "the place is worked out from the header's own length rather than written down as a number, because a number would be a fact about every PNG ever made and the file in front of it is the only one that can be asked";
  "the bytes handed in are written in untouched. They already carry their own length and their own checksum from wherever they came from, so nothing here has to compute either, and nothing here can get either wrong";
  let header_size = buffer_png.readUInt32BE(8);
  let position = 8 + 12 + header_size;
  let bytes_head = buffer_png.subarray(0, position);
  let bytes_tail = buffer_png.subarray(position);
  let joined = Buffer.concat([bytes_head, bytes_chunk, bytes_tail]);
  return joined;
}
