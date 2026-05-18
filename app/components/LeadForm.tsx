'use client'

import { useActionState } from 'react'
import { Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { submitLead, type LeadState } from '@/app/actions'

const INQUIRY_TYPES = [
  'General Inquiry',
  'Product Question',
  'Wholesale / Trade Account',
  'Gift Wrapping Request',
  'Custom Order',
]

const inputClass =
  'w-full rounded-lg border border-stone-300 bg-stone-50 px-4 py-3 text-sm text-ink placeholder-zinc-400 focus:border-jade focus:outline-none focus:ring-1 focus:ring-jade transition-colors'

const labelClass = 'block text-sm font-medium text-zinc-700 mb-1.5'

export default function LeadForm() {
  const [state, action, pending] = useActionState<LeadState, FormData>(
    submitLead,
    null
  )

  if (state?.success) {
    return (
      <div className="flex flex-col items-center gap-4 py-10 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-jade/10 ring-1 ring-jade/30">
          <CheckCircle2 className="h-8 w-8 text-jade" />
        </div>
        <h3 className="text-xl font-bold text-ink">Message Sent!</h3>
        <p className="text-zinc-500">{state.message}</p>
      </div>
    )
  }

  return (
    <form action={action} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full Name <span className="text-jade">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Smith"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-jade">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@company.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+1 (555) 000-0000"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="service" className={labelClass}>
            How can we help? <span className="text-jade">*</span>
          </label>
          <select
            id="service"
            name="service"
            required
            defaultValue=""
            className={`${inputClass} appearance-none`}
          >
            <option value="" disabled>
              Select a topic…
            </option>
            {INQUIRY_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us what you're looking for..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {state && !state.success && (
        <div className="flex items-center gap-2 rounded-lg border border-red-300 bg-red-50 px-4 py-3">
          <AlertCircle className="h-4 w-4 text-red-500 shrink-0" />
          <p className="text-sm text-red-600">{state.message}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-jade px-6 py-4 text-base font-bold text-white hover:bg-jade-2 disabled:opacity-60 disabled:cursor-not-allowed transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-jade/20"
      >
        {pending ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            Send Message
          </>
        )}
      </button>

      <p className="text-center text-xs text-zinc-400">
        We typically respond within one business day.
      </p>
    </form>
  )
}
