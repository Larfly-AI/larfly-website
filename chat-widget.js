/* Larfly – balão de chat flutuante (simulação de WhatsApp).
 * Ainda sem backend: as respostas são simuladas. Para integrar a API depois,
 * defina window.LarflyChat.onSend = async (texto) => "resposta da IA" antes
 * (ou depois) deste script carregar. */
(function () {
  if (window.__larflyChat) return;
  window.__larflyChat = true;

  var STORE_KEY = "larfly-chat-teaser-dismissed";
  var cfg = (window.LarflyChat = window.LarflyChat || {});

  var SCRIPT = [
    { from: "bot", text: "Olá! 👋 Sou a IA da Larfly. Respondo seus leads no WhatsApp em segundos." },
    { from: "user", text: "Oi, tem apartamento de 2 quartos para alugar no centro?" },
    { from: "bot", text: "Tenho sim! Encontrei 3 opções de 2 quartos no centro, a partir de R$ 2.200. Quer ver fotos ou agendar uma visita?" }
  ];
  var FALLBACK = "Esta é só uma simulação por enquanto. Em breve você poderá testar a IA em tempo real aqui! 🚀";

  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }
  function stored(set) {
    try { if (set) sessionStorage.setItem(STORE_KEY, "1"); else return sessionStorage.getItem(STORE_KEY); } catch (e) {}
  }
  function now() {
    var d = new Date();
    return ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
  }

  function build() {
    var root = el("div", "lf-chat");
    root.innerHTML =
      '<div class="lf-teaser" role="status"><span class="lf-teaser-text">Clique aqui para testar em tempo real a IA</span>' +
      '<button type="button" class="lf-x" aria-label="Fechar aviso">&times;</button></div>' +
      '<section class="lf-window" role="dialog" aria-label="Simulação de conversa no WhatsApp" aria-hidden="true">' +
      '<header class="lf-head"><div class="lf-avatar">L<img src="/favicon.webp" alt="" onerror="this.remove()"></div>' +
      '<div class="lf-head-info"><div class="lf-name">Larfly IA</div><div class="lf-status">online agora</div></div>' +
      '<button type="button" class="lf-x lf-close" aria-label="Fechar conversa">&times;</button></header>' +
      '<div class="lf-body" aria-live="polite"></div>' +
      '<form class="lf-form" autocomplete="off"><input class="lf-input" type="text" placeholder="Digite uma mensagem" aria-label="Mensagem" maxlength="500">' +
      '<button class="lf-send" type="submit" aria-label="Enviar"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4 20-7z"/></svg></button></form>' +
      '<div class="lf-note">Simulação demonstrativa</div></section>' +
      '<button type="button" class="lf-fab" aria-label="Abrir conversa de teste" aria-expanded="false">' +
      '<svg class="lf-ico-chat" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-12.5 7.3L3 20.5l1.7-5A8.4 8.4 0 1 1 21 11.5z"/></svg>' +
      '<svg class="lf-ico-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg></button>';
    document.body.appendChild(root);

    var q = function (s) { return root.querySelector(s); };
    var fab = q(".lf-fab"), teaser = q(".lf-teaser"), win = q(".lf-window"),
        body = q(".lf-body"), form = q(".lf-form"), input = q(".lf-input");
    var seeded = false, busy = false, teaserObserver;

    function addMsg(from, text) {
      var m = el("div", "lf-msg " + from);
      m.appendChild(document.createTextNode(text));
      m.appendChild(el("span", "lf-time", now()));
      body.appendChild(m);
      body.scrollTop = body.scrollHeight;
    }
    function typing(on) {
      var t = body.querySelector(".lf-typing");
      if (on && !t) { body.appendChild(el("div", "lf-typing", "<i></i><i></i><i></i>")); body.scrollTop = body.scrollHeight; }
      if (!on && t) t.remove();
    }
    function seed() {
      if (seeded) return;
      seeded = true;
      SCRIPT.forEach(function (m) { addMsg(m.from, m.text); });
    }
    function hideTeaser(remember) {
      if (teaserObserver) teaserObserver.disconnect();
      teaser.classList.remove("is-visible");
      if (remember) stored(true);
    }
    function setOpen(open) {
      root.classList.toggle("is-open", open);
      fab.setAttribute("aria-expanded", String(open));
      fab.setAttribute("aria-label", open ? "Fechar conversa de teste" : "Abrir conversa de teste");
      win.setAttribute("aria-hidden", String(!open));
      if (open) { hideTeaser(true); seed(); setTimeout(function () { input.focus(); }, 250); }
    }

    fab.addEventListener("click", function () { setOpen(!root.classList.contains("is-open")); });
    document.addEventListener("click", function (e) {
      var button = e.target.closest("a, button");
      if (!button || button.closest(".lf-chat")) return;
      var label = (button.innerText || button.textContent || "").replace(/\s+/g, " ").trim();
      if (label !== "Testar gratuitamente") return;
      e.preventDefault();
      e.stopPropagation();
      setOpen(true);
    }, true);
    q(".lf-close").addEventListener("click", function () { setOpen(false); fab.focus(); });
    teaser.addEventListener("click", function () { setOpen(true); });
    q(".lf-teaser .lf-x").addEventListener("click", function (e) { e.stopPropagation(); hideTeaser(true); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && root.classList.contains("is-open")) { setOpen(false); fab.focus(); }
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var text = input.value.trim();
      if (!text || busy) return;
      input.value = "";
      addMsg("user", text);
      busy = true;
      typing(true);
      var reply = typeof cfg.onSend === "function"
        ? Promise.resolve().then(function () { return cfg.onSend(text); })
        : new Promise(function (r) { setTimeout(function () { r(FALLBACK); }, 1200); });
      reply.then(function (r) { return r || FALLBACK; }, function () { return "Não consegui responder agora. Tente novamente."; })
        .then(function (r) { typing(false); addMsg("bot", r); busy = false; });
    });

    function observeAirbnbSection() {
      var airbnbSection = document.getElementById("airbnb");
      if (!airbnbSection) return false;
      if (!("IntersectionObserver" in window)) return true;
      teaserObserver = new IntersectionObserver(function (entries) {
        if (entries.some(function (entry) { return entry.isIntersecting; })) {
          if (!root.classList.contains("is-open")) teaser.classList.add("is-visible");
          teaserObserver.disconnect();
        }
      }, { threshold: 0.2 });
      teaserObserver.observe(airbnbSection);
      return true;
    }

    if (!stored() && !observeAirbnbSection()) {
      var sectionObserver = new MutationObserver(function () {
        if (observeAirbnbSection()) sectionObserver.disconnect();
      });
      sectionObserver.observe(document.body, { childList: true, subtree: true });
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", build);
  else build();
})();
