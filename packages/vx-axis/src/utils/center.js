export default function center(scale) {
  let offset = scale.bandwidth() / 2;
  if (scale.round()) offset = Math.round(offset);
  return d => {
    return scale(d) + offset;
  };
}
