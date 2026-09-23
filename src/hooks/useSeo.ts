import { useEffect } from 'react';
import { SITE } from '../config';
interface Seo { title: string; description: string; path?: string; image?: string; jsonLd?: object }
const set = (tag: 'meta' | 'link', key: string, name: string, attr: string, val: string) => {
  let el = document.head.querySelector<HTMLElement>(`${tag}[${key}="${name}"]`);
  if (!el) { el = document.createElement(tag); el.setAttribute(key, name); document.head.appendChild(el); }
  el.setAttribute(attr, val);
};
export function useSeo({ title, description, path = '', image, jsonLd }: Seo) {
  useEffect(() => {
    const full = `${title} | ${SITE.name}`, url = SITE.url + path;
    document.title = full;
    set('meta', 'name', 'description', 'content', description);
    set('link', 'rel', 'canonical', 'href', url);
    set('meta', 'property', 'og:title', 'content', full);
    set('meta', 'property', 'og:description', 'content', description);
    set('meta', 'property', 'og:url', 'content', url);
    if (image) set('meta', 'property', 'og:image', 'content', image);
    const id = 'page-jsonld'; document.getElementById(id)?.remove();
    if (jsonLd) { const s = document.createElement('script'); s.id = id; s.type = 'application/ld+json'; s.text = JSON.stringify(jsonLd); document.head.appendChild(s); }
    return () => document.getElementById(id)?.remove();
  }, [title, description, path, image, jsonLd]);
}
