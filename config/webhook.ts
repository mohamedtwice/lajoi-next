const WEBHOOK_BASE = 'https://n8n.srv1161994.hstgr.cloud';
const WEBHOOK_ID = '04776848-4a6d-4ac3-9600-b88704bca2ef';

export const WEBHOOK_URL =
  import.meta.env.DEV
    ? `${WEBHOOK_BASE}/webhook-test/${WEBHOOK_ID}`
    : `${WEBHOOK_BASE}/webhook/${WEBHOOK_ID}`;

export async function submitToWebhook(formType: string, data: Record<string, unknown>): Promise<void> {
  const response = await fetch(WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ formtype: formType, ...data }),
  });
  if (!response.ok) {
    throw new Error(`Webhook failed: ${response.status}`);
  }
}
