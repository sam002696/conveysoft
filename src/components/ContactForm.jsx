'use client'

import { useState, useId } from 'react'
import { Button } from '@/components/Button'
import { FadeIn } from '@/components/FadeIn'

function TextInput({ label, value, onChange, ...props }) {
  const id = useId()
  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        id={id}
        value={value}
        onChange={onChange}
        placeholder=" "
        {...props}
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pt-12 pb-4 text-base/6 text-neutral-950 ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-1/2 left-6 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-neutral-950 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

function RadioInput({ label, name, value, checked, onChange }) {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-hidden checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-neutral-950">{label}</span>
    </label>
  )
}

export default function ContactForm() {
  const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    budget: '',
  })

  //   console.log('FORMSPREE_ENDPOINT', FORMSPREE_ENDPOINT)

  const [status, setStatus] = useState(null)

  function handleChange(e) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus(null)

    console.log('formData', formData)

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: new FormData(e.target),
      })

      if (res.ok) {
        setStatus('success')
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: '',
          budget: '',
        })
      } else {
        throw new Error('Form submission failed')
      }
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <FadeIn className="lg:order-last">
      <form onSubmit={handleSubmit}>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Work inquiries
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <TextInput
            label="Email"
            name="email"
            value={formData.email}
            type="email"
            onChange={handleChange}
          />
          <TextInput
            label="Company"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
          <TextInput
            label="Phone"
            name="phone"
            value={formData.phone}
            type="tel"
            onChange={handleChange}
          />
          <TextInput
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">Budget</legend>
              <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <RadioInput
                  label="$0K – $5K"
                  name="budget"
                  value={5}
                  checked={formData.budget === '5'}
                  onChange={handleChange}
                />
                <RadioInput
                  label="$5K – $10K"
                  name="budget"
                  value={10}
                  checked={formData.budget === '10'}
                  onChange={handleChange}
                />
                <RadioInput
                  label="$10K – $20K"
                  name="budget"
                  value={15}
                  checked={formData.budget === '15'}
                  onChange={handleChange}
                />
                <RadioInput
                  label="More than $20K"
                  name="budget"
                  value={20}
                  checked={formData.budget === '20'}
                  onChange={handleChange}
                />
              </div>
            </fieldset>
          </div>
        </div>
        <Button type="submit" className="mt-10">
          Let’s work together
        </Button>
        {status === 'success' && (
          <p className="mt-4 text-green-600">Message sent successfully!</p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-red-600">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </FadeIn>
  )
}
