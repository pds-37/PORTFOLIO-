export function getAssetUrl(name) {
  if (!name) return '';
  try {
    return new URL(`../assets/${name}`, import.meta.url).href;
  } catch (e) {
    return `/assets/${name}`;
  }
}
