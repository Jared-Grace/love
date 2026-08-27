export function midi_song_meta_events(song) {
  "writes the tempo and the time signature of a song that was read as the events a first midi track carries";
  "a tempo is stored as how many millionths of a second one quarter note lasts which is why it is divided into sixty million rather than into sixty";
  let per_quarter = Math.round(60000000 / song.beats_per_minute);
  let one = Math.floor(per_quarter / 65536);
  let two = Math.floor(per_quarter / 256) % 256;
  let three = per_quarter % 256;
  let unit = Math.round(Math.log2(song.beat_unit));
  return [
    {
      tick: 0,
      order: 0,
      bytes: [255, 81, 3, one, two, three],
    },
    {
      tick: 0,
      order: 1,
      bytes: [255, 88, 4, song.beats_per_bar, unit, 24, 8],
    },
  ];
}
