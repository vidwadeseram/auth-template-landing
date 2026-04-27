import { describe, it, expect } from 'vitest';
import robots from '@/app/robots';

describe('robots', () => {
  it('returns rules for all user agents', () => {
    const result = robots();
    const rules = Array.isArray(result.rules) ? result.rules[0] : result.rules;
    expect(rules.userAgent).toBe('*');
  });

  it('allows root path', () => {
    const result = robots();
    const rules = Array.isArray(result.rules) ? result.rules[0] : result.rules;
    expect(rules.allow).toBe('/');
  });

  it('disallows /api/ path', () => {
    const result = robots();
    const rules = Array.isArray(result.rules) ? result.rules[0] : result.rules;
    expect(rules.disallow).toBe('/api/');
  });

  it('includes sitemap URL', () => {
    const result = robots();
    expect(result.sitemap).toBe('https://auth-template.com/sitemap.xml');
  });
});
