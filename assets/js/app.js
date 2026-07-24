(() => {
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

  const toast = (message) => {
    let node = $('.toast');
    if (!node) {
      node = document.createElement('div');
      node.className = 'toast';
      document.body.appendChild(node);
    }
    node.textContent = message;
    node.classList.add('show');
    clearTimeout(window.__toastTimer);
    window.__toastTimer = setTimeout(() => node.classList.remove('show'), 2200);
  };

  const copyText = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      toast('کپی شد ✓');
      return true;
    } catch (err) {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand('copy');
      ta.remove();
      if (ok) toast('کپی شد ✓');
      return ok;
    }
  };

  $$('[data-copy-text]').forEach(btn => {
    btn.addEventListener('click', () => copyText(btn.getAttribute('data-copy-text') || ''));
  });

  const promptBox = $('[data-prompt-url]');
  if (promptBox) {
    const url = promptBox.getAttribute('data-prompt-url');
    const pre = $('pre', promptBox);
    const copyBtn = $('[data-copy-prompt]');
    fetch(url)
      .then(r => {
        if (!r.ok) throw new Error('Prompt load failed');
        return r.text();
      })
      .then(text => {
        pre.textContent = text;
        promptBox.dataset.prompt = text;
        if (copyBtn) copyBtn.disabled = false;
      })
      .catch(() => {
        pre.textContent = 'پرامپت بارگذاری نشد. صفحه را یک‌بار رفرش کنید.';
      });

    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        const text = promptBox.dataset.prompt;
        if (text) copyText(text);
      });
    }
  }

  $$('[data-copy-section]').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.getAttribute('data-copy-section'));
      if (target) copyText(target.innerText.trim());
    });
  });

  $$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();
