export function audio_master_compressor_range_decibels() {
  "answer how far below the ceiling the squeezing starts, as a number of decibels";
  "★ THIS ONE NUMBER IS THE WHOLE CHOICE BETWEEN A SQUEEZE AND A FLATTENING, and it was picked by ear rather than reasoned to. Everything from this far below the ceiling upwards is mapped onto the room that is left, so a wide range squeezes gently and touches a lot of the song, and a narrow one squeezes hard and touches very little. At zero there is no room at all and the squeezing becomes a flattening, which is exactly what a limiter on its own does.";
  "★ FIVE DECIBELS WAS CHOSEN BY LISTENING, NOT BY ARITHMETIC (2026-09-20). The loudest passage of one song was rendered twice at matched loudness, once held down at the ceiling and once squeezed from five decibels below it, and the squeezed one was preferred. Counted rather than heard, the held version pinned four instants of that passage to the ceiling and the squeezed version pinned one. A number chosen this way belongs in a function with the hearing written beside it, because the next person to wonder why it is five cannot recover the listening from the number.";
  let r = 5;
  return r;
}
