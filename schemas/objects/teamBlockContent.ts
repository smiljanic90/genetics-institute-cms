export const teamBlockContent = {
  name: 'teamBlockContent',
  title: 'Sadržaj tima',
  type: 'array',
  // Important: keep this portable-text array to plain `block` only.
  // This avoids paste/upload conversion errors seen with `blockContent`
  // that includes a custom `figure` item.
  of: [{ type: 'block' }],
};

