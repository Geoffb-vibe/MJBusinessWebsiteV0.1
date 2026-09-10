import { useState } from 'react';
import { ArrowDownUp } from 'lucide-react';

export function FXCalculator() {
  const [sendAmount, setSendAmount] = useState('1000');
  const [sendCurrency, setSendCurrency] = useState('BRL');
  const [receiveCurrency, setReceiveCurrency] = useState('EUR');

  const exchangeRate = 0.18;
  const fee = 4.99;
  const receiveAmount = (parseFloat(sendAmount || '0') * exchangeRate - fee).toFixed(2);

  return (
    <div className="relative">
      {/* Floating card with premium shadow */}
      <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-white/20 relative overflow-hidden">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--mj-teal)]/5 via-transparent to-[var(--mj-navy)]/5 pointer-events-none" />

        <div className="relative space-y-8">
          {/* Send amount */}
          <div className="space-y-3">
            <label className="block text-xs uppercase tracking-wider text-[var(--mj-grey-3)]">You send</label>
            <div className="flex gap-4">
              <input
                type="number"
                value={sendAmount}
                onChange={(e) => setSendAmount(e.target.value)}
                className="flex-1 px-5 py-4 bg-[var(--mj-soft-grey)] rounded-2xl outline-none focus:ring-2 focus:ring-[var(--mj-teal)] transition-all text-2xl text-[var(--mj-navy)]"
              />
              <select
                value={sendCurrency}
                onChange={(e) => setSendCurrency(e.target.value)}
                className="px-5 py-4 bg-[var(--mj-soft-grey)] rounded-2xl outline-none focus:ring-2 focus:ring-[var(--mj-teal)] cursor-pointer text-[var(--mj-navy)]"
              >
                <option value="BRL">BRL</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>
            </div>
          </div>

          {/* Exchange icon */}
          <div className="flex justify-center -my-2">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--mj-teal)] to-[var(--mj-green-4)] flex items-center justify-center shadow-lg">
              <ArrowDownUp className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* Receive amount */}
          <div className="space-y-3">
            <label className="block text-xs uppercase tracking-wider text-[var(--mj-grey-3)]">Recipient receives</label>
            <div className="flex gap-4">
              <input
                type="text"
                value={receiveAmount}
                readOnly
                className="flex-1 px-5 py-4 bg-gradient-to-br from-[var(--mj-green-6)] to-[var(--mj-blue-6)] rounded-2xl text-2xl text-[var(--mj-navy)] cursor-default"
              />
              <select
                value={receiveCurrency}
                onChange={(e) => setReceiveCurrency(e.target.value)}
                className="px-5 py-4 bg-[var(--mj-soft-grey)] rounded-2xl outline-none focus:ring-2 focus:ring-[var(--mj-teal)] cursor-pointer text-[var(--mj-navy)]"
              >
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
                <option value="GBP">GBP</option>
                <option value="BRL">BRL</option>
              </select>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-3 pt-6 border-t border-[var(--mj-grey-1)]">
            <div className="flex justify-between items-center">
              <span className="text-sm text-[var(--mj-grey-3)]">Exchange rate</span>
              <span className="text-[var(--mj-navy)]">1 BRL = {exchangeRate} EUR</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-[var(--mj-grey-3)]">Fee</span>
              <span className="text-[var(--mj-navy)]">€{fee.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-[var(--mj-grey-3)]">Arrival</span>
              <span className="text-[var(--mj-teal)]">1-2 business days</span>
            </div>
          </div>
        </div>
      </div>

      {/* Ambient glow effect */}
      <div className="absolute -inset-4 bg-gradient-to-br from-[var(--mj-teal)]/20 via-transparent to-[var(--mj-navy)]/10 blur-3xl -z-10 opacity-60" />
    </div>
  );
}
