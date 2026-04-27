import { useState, useEffect } from 'react';

const STORAGE_KEY = 'tiba_offer_start';
const OFFER_DURATION_MS = 24 * 60 * 60 * 1000;

type OfferState = {
  active: boolean;        // true = dentro de las 24h
  timeLeft: number;       // milisegundos restantes
  hours: string;
  minutes: string;
  seconds: string;
};

export function useCountdownOffer(): OfferState {
  const getOrInitStart = (): number => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return parseInt(stored, 10);
    const now = Date.now();
    localStorage.setItem(STORAGE_KEY, String(now));
    return now;
  };

  const calc = (): OfferState => {
    const start = getOrInitStart();
    const elapsed = Date.now() - start;
    const remaining = OFFER_DURATION_MS - elapsed;

    if (remaining <= 0) {
      return { active: false, timeLeft: 0, hours: '00', minutes: '00', seconds: '00' };
    }

    const h = Math.floor(remaining / 3_600_000);
    const m = Math.floor((remaining % 3_600_000) / 60_000);
    const s = Math.floor((remaining % 60_000) / 1_000);

    return {
      active: true,
      timeLeft: remaining,
      hours: String(h).padStart(2, '0'),
      minutes: String(m).padStart(2, '0'),
      seconds: String(s).padStart(2, '0'),
    };
  };

  const [state, setState] = useState<OfferState>(calc);

  useEffect(() => {
    const id = setInterval(() => {
      const next = calc();
      setState(next);
      if (!next.active) clearInterval(id);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return state;
}
