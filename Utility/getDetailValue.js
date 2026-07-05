export function getDetailValue(details, key) {
  if (!Array.isArray(details)) return null;

  const item = details.find((detail) =>
    Object.prototype.hasOwnProperty.call(detail, key)
  );

  return item ? item[key] : null;
}