export const DEFAULT_LANGUAGE = 'en';

export function getLanguageFromURL(pathname: string): string {
  const langCodeMatch = pathname.match(/\/([a-z]{2})/);
  return langCodeMatch ? langCodeMatch[1] : DEFAULT_LANGUAGE;
} 