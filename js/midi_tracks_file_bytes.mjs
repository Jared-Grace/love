export function midi_tracks_file_bytes(division, tracks_bytes) {
  "puts an MThd header in front of already written track chunks and answers the bytes of a whole midi file";
  "format one is written because the tracks are meant to be read together as one piece rather than as separate pieces";
  let head = Buffer.alloc(14);
  head.write("MThd", 0, "ascii");
  head.writeUInt32BE(6, 4);
  head.writeUInt16BE(1, 8);
  head.writeUInt16BE(tracks_bytes.length, 10);
  head.writeUInt16BE(division, 12);
  return Buffer.concat([head].concat(tracks_bytes));
}
