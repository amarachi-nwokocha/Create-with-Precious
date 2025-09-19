"use client"

import { useState } from "react"
import MultiFormModal from "./MultiFormModal"

const FormsSec = () => {
  const [formType, setFormType] = useState("")
  const [open, setOpen] = useState(false)

  const handleSelect = (type: string) => {
    setFormType(type)
    setOpen(true) // open modal immediately
  }

  const formOptions = [
    "Mobile Event Coverage",
    "UGC/Influencer Coordination",
    "Video Editing",
    "Social Media Strategy",
    "Batch Content Creation",
  ]

  return (
    <div className="grid place-content-center mt-10 space-y-0 ">
      {formOptions.map((option) => (
      <div className="">
          <div
          key={option}
          onClick={() => handleSelect(option)}
          className="cursor-pointer  p-3  text-center font-medium  text-[#5B1E1B] hover:bg-[#5B1E1B] hover:text-white border-[#5B1E1B] border-3 transition w-80"
        >
          {option}
        </div>
      </div>
      ))}

      <MultiFormModal
        open={open}
        onClose={() => setOpen(false)}
        formType={formType}
      />
    </div>
  )
}

export default FormsSec
