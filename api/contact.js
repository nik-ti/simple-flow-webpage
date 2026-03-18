export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { firstName, lastName, email, phone, message } = req.body;

  if (!firstName || !lastName || !email || !phone || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const botToken = process.env.BOT_TOKEN;
  const chatId   = process.env.CHAT_ID;

  if (!botToken || !chatId) {
    return res.status(500).json({ error: 'Telegram credentials not configured' });
  }

  const escHtml = (str) =>
    String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

  const text = [
    '<b>🔔 New Lead — Simple Flow</b>',
    '',
    `<b>Name:</b> ${escHtml(firstName)} ${escHtml(lastName)}`,
    `<b>Email:</b> ${escHtml(email)}`,
    `<b>Phone:</b> ${escHtml(phone)}`,
    `<b>Message:</b> ${escHtml(message)}`,
  ].join('\n');

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'HTML' }),
      }
    );

    const data = await response.json();

    if (!response.ok || !data.ok) {
      throw new Error(data?.description || 'Telegram API error');
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
