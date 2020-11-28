export default function isEmpty (item: unknown) {
  if (typeof(item) === 'string' || typeof(item) === 'number') {
    return !item;
  }
  if (Array.isArray(item)) {
    return item.length === 0;
  }
  return false;
}
