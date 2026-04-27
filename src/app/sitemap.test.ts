import { describe, it, expect } from 'vitest';
import sitemap from '@/app/sitemap';

describe('sitemap', () => {
  it('returns an array of sitemap entries', () => {
    const result = sitemap();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
  });

  it('includes the homepage URL', () => {
    const result = sitemap();
    const urls = result.map((entry) => entry.url);
    expect(urls).toContain('https://auth-template.com');
  });

  it('includes the login URL', () => {
    const result = sitemap();
    const urls = result.map((entry) => entry.url);
    expect(urls).toContain('https://auth-template.com/login');
  });

  it('includes the register URL', () => {
    const result = sitemap();
    const urls = result.map((entry) => entry.url);
    expect(urls).toContain('https://auth-template.com/register');
  });

  it('homepage has priority 1', () => {
    const result = sitemap();
    const home = result.find((entry) => entry.url === 'https://auth-template.com');
    expect(home?.priority).toBe(1);
  });

  it('login and register have priority 0.8', () => {
    const result = sitemap();
    const login = result.find((entry) => entry.url === 'https://auth-template.com/login');
    const register = result.find((entry) => entry.url === 'https://auth-template.com/register');
    expect(login?.priority).toBe(0.8);
    expect(register?.priority).toBe(0.8);
  });

  it('each entry has a lastModified date', () => {
    const result = sitemap();
    for (const entry of result) {
      expect(entry.lastModified).toBeInstanceOf(Date);
    }
  });
});
