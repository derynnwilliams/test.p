'use server'

import { createClient } from '@supabase/supabase-js'

export type LeadState = {
  success: boolean
  message: string
} | null

export async function submitLead(
  _prevState: LeadState,
  formData: FormData
): Promise<LeadState> {
  const name = (formData.get('name') as string)?.trim()
  const email = (formData.get('email') as string)?.trim()
  const phone = (formData.get('phone') as string)?.trim()
  const service = formData.get('service') as string
  const message = (formData.get('message') as string)?.trim()

  if (!name || !email || !service) {
    return { success: false, message: 'Please fill in all required fields.' }
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, message: 'Please enter a valid email address.' }
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !key) {
    return {
      success: false,
      message: 'Service temporarily unavailable. Please contact us directly.',
    }
  }

  try {
    const supabase = createClient(url, key)
    const { error } = await supabase.from('leads').insert([
      {
        name,
        email,
        phone: phone || null,
        service,
        message: message || null,
      },
    ])

    if (error) throw error

    return {
      success: true,
      message: "Thank you! We'll be in touch within 24 hours.",
    }
  } catch (err) {
    console.error('Lead submission error:', err)
    return { success: false, message: 'Something went wrong. Please try again.' }
  }
}
