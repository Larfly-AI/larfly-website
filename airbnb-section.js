/* Seção "Integração com Airbnb", inserida logo acima dos planos (#pricing).
 * É injetada pelo navegador porque o Framer controla o resto da página. */
(function () {
  var HTML =
    '<div class="lf-airbnb-card">' +
    '<h2>Importe seus imóveis do Airbnb com poucos cliques</h2>' +
    '<p>Conecte seus anúncios do Airbnb e do Booking.com à Larfly e importe seus imóveis em poucos cliques, sem recadastrar tudo.</p>' +
    '<div class="lf-airbnb-flow" role="img" aria-label="Booking.com e Airbnb conectados à Larfly">' +
    '<div class="lf-airbnb-sources">' +
    '<div class="lf-airbnb-logo lf-booking-source"><img src="/images/booking-icon-official.svg" alt="Booking.com"></div>' +
    '<div class="lf-airbnb-logo lf-airbnb-source"><img src="/images/airbnb-logo.svg" alt="Airbnb"></div>' +
    '</div>' +
    '<div class="lf-airbnb-merge"><svg viewBox="0 0 100 200" preserveAspectRatio="none" aria-hidden="true"><path id="lf-airbnb-top-path" d="M0 50 H45 C60 50 55 100 70 100"/><path id="lf-airbnb-bottom-path" d="M0 150 H45 C60 150 55 100 70 100"/><path id="lf-airbnb-output-path" d="M70 100 H100"/></svg><span class="lf-airbnb-junction lf-airbnb-moving-dot" data-path="lf-airbnb-top-path" data-output-path="lf-airbnb-output-path"></span><span class="lf-airbnb-junction lf-airbnb-moving-dot" data-path="lf-airbnb-bottom-path" data-output-path="lf-airbnb-output-path"></span><span class="lf-airbnb-badge">Importação em poucos cliques</span></div>' +
    '<div class="lf-airbnb-logo lf-larfly-destination"><img src="/favicon.webp" alt="Larfly"></div>' +
    '</div>' +
    '<a class="lf-airbnb-cta" href="https://app.larfly.com/" target="_blank" rel="noopener">Testar gratuitamente</a>' +
    '<p class="lf-airbnb-note">Sincronização com Airbnb disponível no plano Pro.</p>' +
    '</div>';

  var section = document.createElement("section");
  section.className = "lf-airbnb";
  section.id = "airbnb";
  section.setAttribute("aria-label", "Integração com Airbnb");
  section.innerHTML = HTML;

  function animateDots() {
    var svg = section.querySelector(".lf-airbnb-merge svg");
    var dots = section.querySelectorAll(".lf-airbnb-moving-dot");
    if (!svg || !svg.createSVGPoint) return;
    dots.forEach(function (dot, index) {
      var path = svg.querySelector("#" + dot.getAttribute("data-path"));
      if (!path) return;
      var length = path.getTotalLength();
      var outputPath = dot.getAttribute("data-output-path") && svg.querySelector("#" + dot.getAttribute("data-output-path"));
      var outputLength = outputPath ? outputPath.getTotalLength() : 0;
      var duration = 2400;
      var started = performance.now() - index * duration / 2;
      function frame(now) {
        if (!dot.isConnected) return;
        var progress = ((now - started) % duration) / duration;
        var activePath = path;
        var point;
        if (outputPath && progress >= 0.72) {
          point = outputPath.getPointAtLength(outputLength * ((progress - 0.72) / 0.28));
          activePath = outputPath;
        } else {
          point = path.getPointAtLength(length * (outputPath ? progress / 0.72 : progress));
        }
        var matrix = activePath.getScreenCTM();
        var screenPoint = svg.createSVGPoint();
        screenPoint.x = point.x;
        screenPoint.y = point.y;
        screenPoint = screenPoint.matrixTransform(matrix);
        var bounds = dot.parentElement.getBoundingClientRect();
        dot.style.left = (screenPoint.x - bounds.left) + "px";
        dot.style.top = (screenPoint.y - bounds.top) + "px";
        requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    });
  }

  function place() {
    var pricing = document.getElementById("pricing");
    if (!pricing || !pricing.parentElement) return;
    if (pricing.previousElementSibling !== section) pricing.parentElement.insertBefore(section, pricing);
  }
  function start() {
    place();
    requestAnimationFrame(animateDots);
    new MutationObserver(place).observe(document.getElementById("main") || document.body, { childList: true, subtree: true });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
