import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { ShimmerButton } from './ui/shimmer-button';

const steps = [
  {
    label: 'Teljes neved',
    placeholder: 'Pl. Kovács Anna',
    type: 'text',
    key: 'name',
    validate: (v: string) => v.trim().length > 2,
    error: 'Kérlek, add meg a teljes neved!'
  },
  {
    label: 'Email címed',
    placeholder: 'valami@email.hu',
    type: 'email',
    key: 'email',
    validate: (v: string) => /.+@.+\..+/.test(v),
    error: 'Érvényes email címet adj meg!'
  },
  {
    label: 'Telefonszámod',
    placeholder: '+36...',
    type: 'tel',
    key: 'phone',
    validate: (v: string) => v.trim().length > 5,
    error: 'Kérlek, add meg a telefonszámod!'
  },
  {
    label: 'Hány fővel tervezel érkezni?',
    placeholder: 'Pl. 4',
    type: 'number',
    key: 'guests',
    validate: (v: string) => Number(v) > 0,
    error: 'Add meg, hány fővel jönnél!'
  },
  {
    label: 'Jössz gyerekkel?',
    type: 'radio',
    key: 'withKids',
    options: [
      { label: 'Igen', value: 'igen' },
      { label: 'Nem', value: 'nem' }
    ],
    validate: (v: string) => v === 'igen' || v === 'nem',
    error: 'Válassz, hogy jössz-e gyerekkel!'
  },
  {
    label: 'Mikor szeretnél jönni?',
    placeholder: 'Pl. 2024. július 10-15.',
    type: 'text',
    key: 'date',
    validate: (v: string) => v.trim().length > 2,
    error: 'Add meg a tervezett időpontot!'
  },
  {
    label: 'Szeretnél állattal jönni?',
    type: 'radio',
    key: 'withPet',
    options: [
      { label: 'Igen', value: 'igen' },
      { label: 'Nem', value: 'nem' }
    ],
    validate: (v: string) => v === 'igen' || v === 'nem',
    error: 'Válassz, hogy jössz-e állattal!'
  },
  {
    label: 'Egyéb üzenet (opcionális)',
    placeholder: 'Írd le, mire vagy kíváncsi, milyen igényeid vannak...',
    type: 'textarea',
    key: 'message',
    validate: () => true,
    error: ''
  }
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  guests: string;
  withKids: string;
  date: string;
  withPet: string;
  message: string;
};

const initialState: FormState = {
  name: '',
  email: '',
  phone: '',
  guests: '',
  withKids: '',
  date: '',
  withPet: '',
  message: ''
};

const MultiStepContactForm = () => {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(initialState);
  const [touched, setTouched] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const current = steps[step];
  const value = form[current.key as keyof FormState];
  const isValid = current.validate(String(value));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { type, value, name } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    setTouched(true);
  };

  const handleRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    setTouched(true);
  };

  const next = () => {
    if (step < steps.length - 1) {
      setStep(s => s + 1);
      setTouched(false);
    }
  };
  const prev = () => {
    if (step > 0) setStep(s => s - 1);
    setTouched(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm(initialState);
    setStep(0);
    setTouched(false);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className="fancy-card p-5 max-w-md mx-auto">
      <h3 className="text-xl font-bold text-deepBlue mb-4">Küldd el kérdéseidet</h3>
      <div className="w-full bg-gray-200 rounded-full h-1.5 mb-6">
        <div className="bg-deepBlue h-1.5 rounded-full transition-all duration-300" style={{ width: `${((step + 1) / steps.length) * 100}%` }}></div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 min-h-56 flex flex-col justify-between">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={step}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-2"
          >
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {current.label}
            </label>
            {current.type === 'text' || current.type === 'email' || current.type === 'tel' || current.type === 'number' ? (
              <input
                type={current.type}
                name={current.key}
                value={String(value)}
                onChange={handleChange}
                placeholder={current.placeholder}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deepBlue focus:border-transparent text-base"
                autoFocus
                min={current.type === 'number' ? 1 : undefined}
              />
            ) : null}
            {current.type === 'textarea' ? (
              <textarea
                name={current.key}
                value={String(value)}
                onChange={handleChange}
                placeholder={current.placeholder}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-deepBlue focus:border-transparent text-base"
              />
            ) : null}
            {current.type === 'radio' && current.options ? (
              <div className="flex gap-6 mt-2">
                {current.options.map((opt: any) => (
                  <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name={current.key}
                      value={opt.value}
                      checked={value === opt.value}
                      onChange={handleRadio}
                      className="accent-deepBlue"
                    />
                    <span>{opt.label}</span>
                  </label>
                ))}
              </div>
            ) : null}
            {!isValid && touched && current.error && (
              <span className="text-xs text-red-500 mt-1">{current.error}</span>
            )}
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-between pt-2">
          <ShimmerButton type="button" onClick={prev} className={`flex items-center justify-center px-3 py-1.5 rounded-lg border border-deepBlue text-deepBlue hover:bg-deepBlue/5 transition-colors cursor-pointer ${step === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} disabled={step === 0}>Vissza</ShimmerButton>
          {step < steps.length - 1 ? (
            <ShimmerButton type="button" onClick={next} className={`flex items-center justify-center px-3 py-1.5 rounded-lg bg-deepBlue text-white hover:bg-deepBlue/90 transition-colors cursor-pointer ${!isValid ? 'opacity-50 pointer-events-none' : ''}`} disabled={!isValid}>Tovább</ShimmerButton>
          ) : (
            <ShimmerButton type="submit">Küldés</ShimmerButton>
          )}
        </div>
        <p className="text-xs text-gray-500 text-center mt-2">
          A foglalás csak az egyeztetés után történik, minden igényedet teljesítjük előtte!
        </p>
        {submitted && (
          <div className="text-green-600 text-center font-semibold mt-2">Köszönjük! Az üzeneted sikeresen elküldve.</div>
        )}
      </form>
    </div>
  );
};

export default MultiStepContactForm; 