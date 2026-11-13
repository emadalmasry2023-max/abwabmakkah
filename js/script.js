(() => {
  "use strict";

  const whatsappNumber = "966563132448";
  const year = document.getElementById("current-year");
  if (year) year.textContent = new Date().getFullYear();

  const form = document.getElementById("whatsapp-form");
  const hint = document.getElementById("form-hint");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const service = String(data.get("service") || "").trim();
    const details = String(data.get("details") || "").trim();

    const message = [
      "السلام عليكم، أرغب في الاستفسار عن خدمات أبواب مكة للدهانات.",
      `الاسم: ${name}`,
      `الخدمة المطلوبة: ${service}`,
      details ? `تفاصيل إضافية: ${details}` : "",
      "الموقع: مكة المكرمة"
    ].filter(Boolean).join("\n");

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    if (hint) hint.textContent = "تم تجهيز الرسالة. أكمل إرسالها من تطبيق واتساب.";
  });
})();
