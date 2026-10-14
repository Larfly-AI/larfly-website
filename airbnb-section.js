/* Seção "Integração com Airbnb", inserida logo acima dos planos (#pricing).
 * É injetada pelo navegador porque o Framer controla o resto da página. */
(function () {
  var HTML =
    '<div class="lf-airbnb-card">' +
    '<h2>Importe seus imóveis do Airbnb com poucos cliques</h2>' +
    '<p>A Larfly se integra ao Airbnb e traz os apartamentos que você já cadastrou, sem recadastrar nada. A IA passa a responder sobre eles e a agenda fica sincronizada automaticamente.</p>' +
    '<div class="lf-airbnb-flow" role="img" aria-label="Larfly conectada ao Airbnb">' +
    '<div class="lf-airbnb-logo"><img src="/favicon.webp" alt="Larfly"></div>' +
    '<div class="lf-airbnb-line"><span class="lf-airbnb-badge">Importação em poucos cliques</span><span class="lf-airbnb-dot"></span></div>' +
    '<div class="lf-airbnb-logo"><img src="/images/airbnb-logo.svg" alt="Airbnb"></div>' +
    '</div>' +
    '<a class="lf-airbnb-cta" href="https://app.larfly.com/" target="_blank" rel="noopener">Testar gratuitamente</a>' +
    '<p class="lf-airbnb-note">Sincronização com Airbnb disponível no plano Pro.</p>' +
    '</div>';

  var section = document.createElement("section");
  section.className = "lf-airbnb";
  section.id = "airbnb";
  section.setAttribute("aria-label", "Integração com Airbnb");
  section.innerHTML = HTML;

  function place() {
    var pricing = document.getElementById("pricing");
    if (!pricing || !pricing.parentElement) return;
    if (pricing.previousElementSibling !== section) pricing.parentElement.insertBefore(section, pricing);
  }
  function start() {
    place();
    new MutationObserver(place).observe(document.getElementById("main") || document.body, { childList: true, subtree: true });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
