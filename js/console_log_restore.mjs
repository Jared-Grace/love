export function console_log_restore(real) {
  ("Puts the real printer back. Always pair this with the silencing, including");
  ("when the work between them failed, or everything after it goes quiet too.");
  console.log = real;
}
