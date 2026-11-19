import { useState } from 'react';

const contactNumber = '+855 87 762 902';

function WhatsAppIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current"><path d="M20.52 3.48A11.83 11.83 0 0 0 12.1 0C5.55 0 .22 5.33.22 11.88c0 2.1.55 4.15 1.6 5.96L.12 24l6.3-1.65a11.9 11.9 0 0 0 5.68 1.45h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.23-6.15-3.47-8.44ZM12.1 21.78h-.01a9.88 9.88 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.38a9.85 9.85 0 0 1-1.52-5.26c0-5.46 4.45-9.91 9.92-9.91a9.85 9.85 0 0 1 7.01 2.91 9.84 9.84 0 0 1 2.9 7.01c0 5.47-4.45 9.9-9.93 9.9Zm5.44-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.47-2.4-1.5-.89-.8-1.49-1.78-1.66-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.28.3-1.05 1.02-1.05 2.49s1.08 2.89 1.23 3.09c.15.2 2.12 3.23 5.13 4.53.72.31 1.28.5 1.72.63.72.23 1.37.2 1.89.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.08-.15-.28-.2-.58-.35Z" /></svg>;
}

function TelegramIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current"><path d="M21.8 3.2 18.5 20c-.25 1.2-.9 1.5-1.8.95l-5-3.7-2.4 2.3c-.27.27-.5.5-1 .5l.36-5.1 9.3-8.4c.4-.36-.08-.56-.62-.2L5.85 13.6.9 12c-1.08-.34-1.1-1.08.22-1.6L20.5 2.8c.9-.34 1.68.22 1.3.4Z" /></svg>;
}

function WeChatIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current"><path d="M9.8 2C5.2 2 1.5 4.9 1.5 8.5c0 2.1 1.3 4 3.4 5.2l-.7 2.4 2.8-1.4c.8.2 1.7.4 2.6.4h.2a5.8 5.8 0 0 1-.4-2.1c0-3.5 3.4-6.3 7.7-6.3h.7C16.7 3.9 13.5 2 9.8 2Zm-2.7 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm5.4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/><path d="M22.5 13c0-2.8-2.9-5.1-6.5-5.1S9.5 10.2 9.5 13s2.9 5.1 6.5 5.1c.7 0 1.4-.1 2-.3l2.2 1.1-.5-1.9c1.7-.9 2.8-2.3 2.8-4Zm-8.7-.7a.85.85 0 1 1 0-1.7.85.85 0 0 1 0 1.7Zm4.4 0a.85.85 0 1 1 0-1.7.85.85 0 0 1 0 1.7Z"/></svg>;
}

export default function FloatingContactLinks() {
  const [wechatNotice, setWechatNotice] = useState(false);

  async function showWeChatContact() {
    setWechatNotice(true);
    try {
      await navigator.clipboard.writeText(contactNumber);
    } catch {
      // Keep the phone number visible when clipboard access is blocked.
    }
    window.setTimeout(() => setWechatNotice(false), 4000);
  }

  const iconClass = 'grid h-14 w-14 place-items-center rounded-full text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white';

  return (
    <nav aria-label="Contact us on messaging apps" className="fixed bottom-5 right-5 z-[60] flex flex-col gap-3 sm:bottom-6 sm:right-8">
      <div className="relative">
        <button type="button" onClick={() => void showWeChatContact()} title={`Find us on WeChat using ${contactNumber}`} aria-label={`WeChat: copy ${contactNumber} to find us`} className={`${iconClass} bg-[#07C160]`}>
          <WeChatIcon />
        </button>
        {wechatNotice && <span role="status" className="absolute right-16 top-1/2 w-max -translate-y-1/2 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-brand-950 shadow-lg">Search WeChat for {contactNumber}</span>}
      </div>
      <a href="https://t.me/SOKHOURRN_HAM" target="_blank" rel="noreferrer" aria-label="Contact us on Telegram at @SOKHOURRN_HAM" title="Telegram" className={`${iconClass} bg-[#229ED9]`}>
        <TelegramIcon />
      </a>
      <a href="https://wa.me/85587762902" target="_blank" rel="noreferrer" aria-label="Chat with us on WhatsApp" title="WhatsApp" className={`${iconClass} bg-[#25D366]`}>
        <WhatsAppIcon />
      </a>
    </nav>
  );
}
