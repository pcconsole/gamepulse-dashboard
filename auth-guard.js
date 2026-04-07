/**
 * GamePulse Token 访问控制
 * ─────────────────────────────────
 * 功能：
 *   1. 检查 URL 中是否携带正确的 ?token=xxx 参数
 *   2. 验证通过后将 token 存入 sessionStorage，后续页面跳转无需重复携带
 *   3. 验证失败则隐藏页面内容，显示 403 拒绝访问页面
 *   4. PC/Mobile 切换时自动携带 token 参数
 *
 * 使用方式：
 *   正确访问：https://pcconsole.github.io/gamepulse-dashboard/?token=gp2026
 *   移动版：  https://pcconsole.github.io/gamepulse-dashboard/mobile.html?token=gp2026
 *   首次带 token 访问后，同一会话（标签页未关闭）内无需重复带 token
 */
(function () {
  'use strict';

  // ═══════════════════════════════════════════════
  // ⚙️ 配置区 — 修改这里来更换 Token
  // ═══════════════════════════════════════════════
  var VALID_TOKENS = ['gp2026'];  // 支持多个 token，任一匹配即通过
  var SESSION_KEY = 'gp_auth_token';

  // ═══════════════════════════════════════════════
  // 🔍 Token 获取与验证
  // ═══════════════════════════════════════════════
  var urlParams = new URLSearchParams(window.location.search);
  var urlToken = urlParams.get('token');
  var sessionToken = null;

  try { sessionToken = sessionStorage.getItem(SESSION_KEY); } catch (e) {}

  // 确定使用哪个 token
  var currentToken = urlToken || sessionToken;
  var isValid = currentToken && VALID_TOKENS.indexOf(currentToken) !== -1;

  if (isValid) {
    // ✅ 验证通过
    // 将 token 存入 sessionStorage（关闭标签页后失效）
    try { sessionStorage.setItem(SESSION_KEY, currentToken); } catch (e) {}

    // 如果 URL 中有 token 参数，清理掉（保持 URL 干净，但不影响访问）
    if (urlToken) {
      urlParams.delete('token');
      var cleanUrl = window.location.pathname;
      var remaining = urlParams.toString();
      if (remaining) cleanUrl += '?' + remaining;
      cleanUrl += window.location.hash;
      try {
        window.history.replaceState(null, '', cleanUrl);
      } catch (e) {}
    }

    // 拦截 PC/Mobile 切换链接，自动带上 token
    document.addEventListener('click', function (e) {
      var link = e.target.closest('a[href*="mobile.html"], a[href*="index.html"]');
      if (!link) return;
      var href = link.getAttribute('href');
      if (href && href.indexOf('token=') === -1) {
        var sep = href.indexOf('?') !== -1 ? '&' : '?';
        link.setAttribute('href', href + sep + 'token=' + currentToken);
      }
    });

  } else {
    // ❌ 验证失败 — 阻止页面渲染
    document.documentElement.innerHTML = '';
    document.write(
      '<!DOCTYPE html>' +
      '<html lang="zh-CN"><head><meta charset="UTF-8">' +
      '<meta name="viewport" content="width=device-width,initial-scale=1.0">' +
      '<title>Access Denied | GamePulse</title>' +
      '<style>' +
      '*{margin:0;padding:0;box-sizing:border-box}' +
      'body{min-height:100vh;display:flex;align-items:center;justify-content:center;' +
      'background:#0d1117;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;color:#c9d1d9;}' +
      '.denied-card{text-align:center;padding:60px 40px;max-width:480px;' +
      'background:rgba(22,27,34,0.95);border:1px solid rgba(99,102,241,0.2);border-radius:16px;' +
      'box-shadow:0 8px 32px rgba(0,0,0,0.4);}' +
      '.denied-icon{font-size:64px;margin-bottom:20px;filter:grayscale(0.3);}' +
      '.denied-title{font-size:28px;font-weight:700;color:#f0f6fc;margin-bottom:12px;}' +
      '.denied-text{font-size:15px;color:#8b949e;line-height:1.7;margin-bottom:24px;}' +
      '.denied-hint{font-size:13px;color:#484f58;margin-top:16px;padding:12px;' +
      'background:rgba(99,102,241,0.06);border-radius:8px;border:1px solid rgba(99,102,241,0.12);}' +
      '.denied-hint code{color:#6366f1;background:rgba(99,102,241,0.15);padding:2px 6px;border-radius:4px;font-size:12px;}' +
      '</style></head><body>' +
      '<div class="denied-card">' +
      '<div class="denied-icon">⚠️</div>' +
      '<div class="denied-title">访问异常</div>' +
      '<div class="denied-text">URL token 错误。</div>' +
      '</div>' +
      '</body></html>'
    );
    document.close();
    // 阻止后续所有脚本执行
    window.stop();
  }

  // ═══════════════════════════════════════════════
  // 🔑 暴露全局 API（方便其他脚本使用）
  // ═══════════════════════════════════════════════
  window.GamePulse = window.GamePulse || {};
  window.GamePulse.auth = {
    isAuthenticated: isValid,
    token: isValid ? currentToken : null,
    // 获取带 token 的完整 URL（用于分享）
    getShareUrl: function (path) {
      var base = window.location.origin + window.location.pathname.replace(/[^/]*$/, '');
      return base + (path || '') + '?token=' + (currentToken || '');
    }
  };
})();
