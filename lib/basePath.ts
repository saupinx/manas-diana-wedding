export function withBasePath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  if (
    !basePath ||
    !path.startsWith("/") ||
    path.startsWith(`${basePath}/`) ||
    path === basePath ||
    path.startsWith("//")
  ) {
    return path;
  }

  return `${basePath}${path}`;
}
