/* Troca de imagens que o Framer renderiza só no navegador (não estão no HTML).
 * Cada regra: parte da URL original -> nova imagem local. */
(function () {
  var RULES = [
    // Card "Fale com a gente agora mesmo" (seção final)
    { match: "T9Q1B5aNhBQPdKZxiw9ZJDgLQ", src: "/images/cta-whatsapp.webp" },
    // Card "Atendimento automático 24/7" (topo da página)
    { match: "KpyEgwDf59Abz8B5axt9UqxiKM", src: "/images/hero-card.webp" }
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
  function scan(root) {
    if (root.nodeType !== 1) return;
    if (root.tagName === "IMG") apply(root);
    var imgs = root.querySelectorAll ? root.querySelectorAll("img") : [];
    for (var i = 0; i < imgs.length; i++) apply(imgs[i]);
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
