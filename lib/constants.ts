export const BASE_PATH = process.env.NODE_ENV === "production" ? "/portfolio" : "";

export function assetPath(path: string): string {
  return `${BASE_PATH}${path}`;
}