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
    { id: 1, title: "Mobile Event Coverage" },
    { id: 2, title: "UGC/Influencer Coordination" },
    { id: 3, title: "Video Editing" },
    { id: 4, title: "Social Media Strategy" },
    { id: 5, title: "Batch Content Creation" },
  ]

  return (
    <div className="grid place-content-center mt-10 space-y-0">
      {formOptions.map((option) => (
        <div
          key={option.id}
          onClick={() => handleSelect(option.title)}
          className="cursor-pointer p-3 text-center font-medium text-[#5B1E1B] hover:bg-[#5B1E1B] hover:text-white border-[#5B1E1B] border-3 transition w-80"
        >
          {option.title}
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
