export function app_shared_glow_look_here_animation_name() {
  ("what the blue look-here pulse is called in the page's own stylesheet");
  ("Its own name rather than the gold one's, because both may be defined in the same head at the same time and an element names exactly one of them. Sharing a name would let whichever keyframe was written last decide what colour every glow on the page came out.");
  let name_animation = "lookHerePulse";
  return name_animation;
}
