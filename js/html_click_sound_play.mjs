import { arguments_assert } from "./arguments_assert.mjs";
export function html_click_sound_play(maker) {
  arguments_assert(arguments, 1);
  ("$plain maker");
  ("One short click, now, made rather than played from a recording.");
  ("IT IS SHORT AND HIGH BECAUSE THE THING BEING MEASURED IS WHEN IT STARTS. Somebody answering a sound answers the moment it arrives, so a sound that fades in has no single moment to answer and every press against it carries the fading in as well as the person. A thirtieth of a second at a thousand cycles arrives all at once and is over before anybody could have reacted to it.");
  ("It fades out rather than stopping flat. A sound cut off square makes a second click of its own at the end, which on a run of these is a second thing to answer.");
  let context = maker.context;
  let at = context.currentTime;
  let over = at + 0.03;
  let oscillator = context.createOscillator();
  let gain = context.createGain();
  oscillator.frequency.setValueAtTime(1000, at);
  gain.gain.setValueAtTime(0.25, at);
  gain.gain.exponentialRampToValueAtTime(0.0001, over);
  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start(at);
  oscillator.stop(over);
}
