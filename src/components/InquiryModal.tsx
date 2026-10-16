import React, { useState } from 'react';
import { X, Send, MessageCircle, Phone, MapPin, Check, Copy } from 'lucide-react';
import { STORE_INFO } from '../data/storeData';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultBrand?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  defaultBrand = 'Apple',
}) => {
  const [selectedBrand, setSelectedBrand] = useState(defaultBrand);
  const [productQuery, setProductQuery] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const greeting = customerName.trim() ? `Hi, I am ${customerName.trim()}.` : 'Hi Luxmi Mobile Hub,';
    const queryText = productQuery.trim()
      ? `I would like to inquire about availability and pricing for: ${productQuery.trim()} (${selectedBrand}).`
      : `I would like to know about available models and pricing for ${selectedBrand} smartphones and gadgets.`;
    const fullMsg = `${greeting} ${queryText} I found your store in Indri, Karnal.`;
    
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(fullMsg)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const handleCopyDetails = () => {
    const textToCopy = `Inquiry for Luxmi Mobile Hub (Indri):\nBrand: ${selectedBrand}\nDetails: ${productQuery || 'Latest models availability'}\nContacting: ${STORE_INFO.phonePlaceholder}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-[#11161f] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 text-slate-100 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="inquiry-title"
      >
        {/* Subtle accent light */}
        <div className="absolute top-0 right-1/4 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div>
            <h3 id="inquiry-title" className="text-xl font-bold font-display text-white">
              Inquire with Luxmi Mobile Hub
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Instant response via WhatsApp or visit our Indri store
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleWhatsAppSend} className="mt-5 space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-2">
              Select Brand or Category
            </label>
            <div className="grid grid-cols-3 gap-2">
              {['Apple', 'Samsung', 'OnePlus', 'Accessories', 'Gadgets', 'Upgrades'].map((brand) => (
                <button
                  key={brand}
                  type="button"
                  onClick={() => setSelectedBrand(brand)}
                  className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all text-center whitespace-nowrap ${
                    selectedBrand === brand
                      ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-200 shadow-sm'
                      : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:border-white/20'
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="inquiry-product" className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1.5">
              Model or Gadget You Are Looking For (Optional)
            </label>
            <input
              id="inquiry-product"
              type="text"
              value={productQuery}
              onChange={(e) => setProductQuery(e.target.value)}
              placeholder="e.g. iPhone 15 Pro, Galaxy S24, OnePlus 12R, Fast Charger..."
              className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>

          <div>
            <label htmlFor="inquiry-name" className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1.5">
              Your Name (Optional)
            </label>
            <input
              id="inquiry-name"
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="e.g. Rahul Sharma"
              className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
            <button
              type="submit"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 rounded-xl shadow-lg shadow-emerald-950/40 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Chat on WhatsApp</span>
            </button>
            <button
              type="button"
              onClick={handleCopyDetails}
              className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all cursor-pointer whitespace-nowrap"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy Text</span>
                </>
              )}
            </button>
          </div>
        </form>

        <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-cyan-400" />
            <span>Naya Bazar, Indri (1st Floor)</span>
          </div>
          <span className="text-slate-500 font-mono text-[11px]">Direct Store Support</span>
        </div>
      </div>
    </div>
  );
};
