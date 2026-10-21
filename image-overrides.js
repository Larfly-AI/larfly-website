/* Troca de imagens que o Framer renderiza só no navegador (não estão no HTML).
 * Cada regra: parte da URL original -> nova imagem local. */
(function () {
  var RULES = [
    // Card "Fale com a gente agora mesmo" (seção final)
    { match: "T9Q1B5aNhBQPdKZxiw9ZJDgLQ", src: "/images/cta-whatsapp.webp" },
    // Card "Atendimento automático 24/7" (topo da página)
    { match: "KpyEgwDf59Abz8B5axt9UqxiKM", src: "/images/hero-card.webp" },
    // Card "Fale com a gente agora mesmo" (CTA no fim da página)
    { match: "uHPSOoQb4k49tgAgjgVys3y4Tk", src: "/images/cta-whatsapp.webp" }
  ];
  function apply(img) {
    var cur = img.getAttribute("src") || "";
    for (var i = 0; i < RULES.length; i++) {
      var r = RULES[i];
      if (cur.indexOf(r.match) !== -1) {
        img.removeAttribute("srcset");
        img.removeAttribute("sizes");
        img.setAttribute("src", r.src);
      }
    }
  }
  function addMobileHeroCard() {
    if (window.innerWidth > 809) return;
    var heroImage = document.querySelector('img[src*="al30PJoD6YTO5Wp7MpXKSpzdMfs"]');
    var host = heroImage && heroImage.closest(".framer-qqhng7");
    if (!host || host.querySelector(".lf-mobile-hero-card")) return;

    var card = document.createElement("div");
    card.className = "lf-mobile-hero-card";
    card.setAttribute("aria-label", "Atendimento automático 24/7");
    card.innerHTML = '<img src="/images/hero-card.webp" alt=""><span>Atendimento<br>automático 24/7</span>';
    host.appendChild(card);
  }

  var mobileCardStyle = document.createElement("style");
  mobileCardStyle.textContent = "@media(max-width:809px){.framer-qqhng7{overflow:visible!important}.framer-vi5os2{padding-bottom:165px!important}.lf-mobile-cta-parent{padding-bottom:150px!important}.framer-1hc5svz{position:relative;overflow:visible!important}.lf-mobile-hero-card{position:absolute;z-index:5;left:12px;bottom:-155px;width:min(190px,calc(100vw - 130px));height:145px;border-radius:18px;overflow:visible;filter:drop-shadow(0 5px 14px rgba(0,0,0,.16));pointer-events:none}.lf-mobile-hero-card img{display:block;width:100%;height:100%;object-fit:cover;border-radius:18px}.lf-mobile-hero-card span{position:absolute;right:-78px;top:18px;max-width:150px;padding:9px 10px;background:#fff;border-radius:14px 14px 4px 14px;font:500 12px/1.3 'Plus Jakarta Sans',system-ui,sans-serif;color:#111;box-shadow:0 3px 10px rgba(0,0,0,.1)}.framer-1hc5svz{overflow:visible!important}.lf-mobile-cta-card{position:absolute;z-index:5;left:12px;bottom:-150px;width:min(190px,calc(100vw - 130px));height:145px;border-radius:18px;overflow:visible;filter:drop-shadow(0 5px 14px rgba(0,0,0,.16));pointer-events:none}.lf-mobile-cta-card img{display:block;width:100%;height:100%;object-fit:cover;border-radius:18px}.lf-mobile-cta-card span{position:absolute;left:min(190px,calc(100vw - 200px));top:18px;width:142px;max-width:142px;padding:9px 11px;background:#fff;border-radius:14px 14px 4px 14px;font:500 13px/1.3 'Plus Jakarta Sans',system-ui,sans-serif;color:#111;box-shadow:0 3px 10px rgba(0,0,0,.1)}}@media(min-width:810px){.lf-mobile-hero-card,.lf-mobile-cta-card{display:none!important}}";
  document.head.appendChild(mobileCardStyle);

  function addMobileCtaCard() {
    if (window.innerWidth > 809) return;
    var host = document.querySelector(".framer-1hc5svz");
    if (!host || host.querySelector(".lf-mobile-cta-card")) return;
    var card = document.createElement("div");
    card.className = "lf-mobile-cta-card";
    card.setAttribute("aria-label", "Fale com a gente agora mesmo");
    card.innerHTML = '<img src="/images/cta-whatsapp.webp" alt=""><span>Fale com a gente<br>agora mesmo</span>';
    host.appendChild(card);
    var section = host.closest(".framer-180zx8");
    if (section) section.classList.add("lf-mobile-cta-parent");
  }

  var FEATURE_ICONS = [
    { label: "IA Responde Primeiro", svg: '<path d="M8 18H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-5l-4 4v-3z"/><path d="m12 6 .8 2.2L15 9l-2.2.8L12 12l-.8-2.2L9 9l2.2-.8L12 6z"/><path d="m17 10 .5 1.3L19 12l-1.5.5L17 14l-.5-1.5L15 12l1.5-.7L17 10z"/>' },
    { label: "Atendimento 24 Horas", svg: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/><path d="M4.9 4.9 3.5 6.3M19.1 4.9l1.4 1.4"/>' },
    { label: "Nunca Prospecta", svg: '<path d="M12 3 20 6v5c0 5-3.4 8.2-8 10-4.6-1.8-8-5-8-10V6l8-3z"/><path d="m8.5 8.5 7 7M15.5 8.5l-7 7"/>' },
    { label: "Fala Como Sua Marca", svg: '<path d="M4 5h16v11H9l-5 4V5z"/><path d="M8 10v2M11 8v6M14 9v4M17 10v2"/>' }
  ];

  function applyFeatureIcons(root) {
    var anchors = [];
    if (root.matches && root.matches("a")) anchors.push(root);
    if (root.querySelectorAll) anchors = anchors.concat(Array.prototype.slice.call(root.querySelectorAll("a")));
    anchors.forEach(function (anchor) {
      if (anchor.dataset.lfFeatureIconApplied) return;
      var text = (anchor.innerText || "").replace(/\\s+/g, " ").trim();
      var icon = FEATURE_ICONS.find(function (item) { return text.indexOf(item.label) !== -1; });
      if (!icon) return;
      var slots = anchor.querySelectorAll('[data-framer-name="Primary Arrow"] .svgContainer, [data-framer-name="Secondary Arrow"] .svgContainer');
      if (!slots.length) return;
      slots.forEach(function (slot) {
        slot.innerHTML = '<svg class="lf-semantic-icon" viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + icon.svg + '</svg>';
      });
      anchor.dataset.lfFeatureIconApplied = "true";
    });
  }

  function scan(root) {
    if (root.nodeType !== 1) return;
    if (root.tagName === "IMG") apply(root);
    var imgs = root.querySelectorAll ? root.querySelectorAll("img") : [];
    for (var i = 0; i < imgs.length; i++) apply(imgs[i]);
    addMobileHeroCard();
    addMobileCtaCard();
    applyFeatureIcons(root);
  }
  new MutationObserver(function (muts) {
    for (var i = 0; i < muts.length; i++) {
      var m = muts[i];
      if (m.type === "attributes") apply(m.target);
      else for (var j = 0; j < m.addedNodes.length; j++) scan(m.addedNodes[j]);
    }
  }).observe(document.documentElement, { childList: true, subtree: true, attributes: true, attributeFilter: ["src", "srcset"] });
  scan(document.documentElement);
})();
