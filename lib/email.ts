import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_9idlp3e";
const TEMPLATE_ID = "template_ncjtf3c";
const PUBLIC_KEY = "oirTGHFOR82UTQl9f";

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function sendEmailForm(
  formType: string,
  data: Record<string, any>
): Promise<any> {
  const tableRows = Object.entries(data)
    .filter(([, val]) => val !== null && val !== undefined && String(val).trim() !== "")
    .map(
      ([key, val]) =>
        `<tr><td style="padding:4px 12px 4px 0;font-weight:bold;vertical-align:top">${escapeHtml(
          key
        )}</td><td style="padding:4px 0">${escapeHtml(String(val))}</td></tr>`
    )
    .join("");

  const detailsHtml = `<table style="border-collapse:collapse">${tableRows}</table>`;
  const replyTo = data.Email || data.email || "";

  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      form_type: formType,
      submittedAt: new Date().toLocaleString(),
      details: detailsHtml,
      reply_to: replyTo,
    },
    {
      publicKey: PUBLIC_KEY,
    }
  );
}
