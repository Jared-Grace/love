export function midi_number_variable_length(value) {
  "writes one number the way midi writes a delta time as seven bits per byte with the top bit set on every byte but the last";
  "this is the mirror of midi_bytes_variable_length which reads the same shape back";
  let parts = [value % 128];
  let rest = Math.floor(value / 128);
  while (rest > 0) {
    parts.unshift((rest % 128) + 128);
    rest = Math.floor(rest / 128);
  }
  return parts;
}
