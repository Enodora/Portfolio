// Lightweight i18n helper (no frameworks).
// Usage:
// 1) Add data-i18n="key" on any element whose text should be translated.
//    For attributes, use data-i18n-attr="placeholder|title|alt" (pipe-separated).
// 2) Call i18nInit() once (we auto-run on DOMContentLoaded).
// 3) To switch language: changeLanguage('en') or changeLanguage('ja').

const I18N = (() => {
  const fallbackLang = 'en';
  const storageKey = 'site_lang';
  let currentLang = localStorage.getItem(storageKey) || null;
  let dict = {};

  function setHtmlLang(lang) {
    document.documentElement.setAttribute('lang', lang);
  }

  async function loadDict(lang) {
    try {
      const res = await fetch(`lang/${lang}.json`, { cache: 'no-store' });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return await res.json();
    } catch (e) {
      if (lang !== fallbackLang) {
        console.warn(`[i18n] Falling back to ${fallbackLang} due to:`, e);
        const res = await fetch(`lang/${fallbackLang}.json`, { cache: 'no-store' });
        return await res.json();
      } else {
        console.error('[i18n] Failed to load dictionary for fallback.');
        return {};
      }
    }
  }

  function t(key) {
    // dot-notation lookup
    return key.split('.').reduce((o, k) => (o && o[k] != null ? o[k] : null), dict) ?? key;
  }

  function applyAll() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const attrs = (el.getAttribute('data-i18n-attr') || '').split('|').map(s => s.trim()).filter(Boolean);

      const value = t(key);
      if (attrs.length) {
        attrs.forEach(attr => {
          if (attr === 'text') {
            el.textContent = value;
          } else {
            el.setAttribute(attr, value);
          }
        });
      } else {
        // default: set text
        el.textContent = value;
      }
    });
  }

  async function init() {
    if (!currentLang) {
      const navLang = (navigator.language || 'en').toLowerCase().startsWith('ja') ? 'ja' : 'en';
      currentLang = navLang;
    }
    dict = await loadDict(currentLang);
    setHtmlLang(currentLang);
    applyAll();

    // Hook up any language switcher buttons
    document.querySelectorAll('[data-lang]').forEach(btn => {
      btn.addEventListener('click', () => changeLanguage(btn.getAttribute('data-lang')));
    });
  }

  async function changeLanguage(lang) {
    if (!lang || lang === currentLang) return;
    currentLang = lang;
    localStorage.setItem(storageKey, currentLang);
    dict = await loadDict(currentLang);
    setHtmlLang(currentLang);
    applyAll();
  }

  // Auto-init
  document.addEventListener('DOMContentLoaded', init);

  return { init, changeLanguage };
})();

// Expose to window for convenience
window.changeLanguage = I18N.changeLanguage;