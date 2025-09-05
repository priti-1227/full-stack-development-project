"use client"

import * as React from "react"

type FormValues = {
  name: string
  phone: string
  company: string
  email: string
}

export default function ContactForm() {
  const [values, setValues] = React.useState<FormValues>({
    name: "",
    phone: "",
    company: "",
    email: "",
  })
  const [submitting, setSubmitting] = React.useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }
// const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";
 async function onSubmit(e: React.FormEvent) {
  e.preventDefault()
  setSubmitting(true)
  try {
    const res = await fetch("https://full-stack-development-project-iniy.onrender.com/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
    // const res = await fetch(`${API_BASE_URL}/api/contact`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(values),
    // });

    if (!res.ok) {
      const { error } = await res.json()
      throw new Error(error || "Submission failed")
    }

    alert("Thanks! We received your message.")
    setValues({ name: "", phone: "", company: "", email: "" })
  } catch (err: unknown) {
    if (err instanceof Error) {
      alert(err.message || "Something went wrong")
    } else {
      alert("Something went wrong")
    }
  } finally {
    setSubmitting(false)
  }
}


  return (
    <section aria-labelledby="get-started-title" className="w-full bg-gradient-to-b from-sky-50 to-sky-100/70">
      <div className="max-w-7xl mx-4 sm:mx-8  lg:mx-40 px-4 py-10 sm:py-12">
        <header className="text-center mb-6 sm:mb-8">
          <h2
            id="get-started-title"
            className="text-balance font-sans text-2xl sm:text-3xl font-semibold text-slate-800 tracking-tight"
          >
            Get started with today
          </h2>
          <p className="mt-2 text-pretty text-[13px] sm:text-sm text-slate-600">
            We help you shape your vision into bold, practical action.
          </p>
        </header>

        <form
          onSubmit={onSubmit}
          className="rounded-xl bg-sky-100/40  sm:p-6 backdrop-blur-[1px] ring-1 ring-sky-200/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                placeholder="Name"
                value={values.name}
                onChange={handleChange}
                className="input-soft"
                autoComplete="name"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="phone" className="sr-only">
                Mobile No.
              </label>
              <input
                id="phone"
                name="phone"
                placeholder="Mobile No."
                value={values.phone}
                onChange={handleChange}
                className="input-soft"
                inputMode="tel"
                autoComplete="tel"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="company" className="sr-only">
                Company
              </label>
              <input
                id="company"
                name="company"
                placeholder="Company"
                value={values.company}
                onChange={handleChange}
                className="input-soft"
                autoComplete="organization"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="sr-only">
                E-Mail
              </label>
              <input
                id="email"
                name="email"
                placeholder="E-Mail"
                type="email"
                value={values.email}
                onChange={handleChange}
                className="input-soft"
                autoComplete="email"
              />
            </div>

            <div className="md:col-span-2">
              <button type="submit" disabled={submitting} className="btn-gradient w-full">
                {submitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
