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
    { id: 3, title: "Video Editing" },
    { id: 4, title: "Social Media Strategy" },
    { id: 5, title: "Batch Content Creation" },
    { id: 2, title: "UGC/Influencer Coordination" },
  ]

  return (
   <div className="px-4 sm:px-6 md:px-8 mt-10">
      <h2 className="text-3xl font-bold text-[#5B1E1B] text-center mb-5">
        Find The Right Service For You
      </h2>

      <div className="flex flex-col items-center space-y-0">
        {formOptions.map((option) => (
          <div
            key={option.id}
            onClick={() => handleSelect(option.title)}
            className="cursor-pointer p-3 text-center font-medium text-[#5B1E1B] hover:bg-[#5B1E1B] hover:text-white border-2 border-[#5B1E1B] transition w-full max-w-sm"
          > 
            {option.title}
          </div>
        ))}
      </div>

      <MultiFormModal
        open={open}
        onClose={() => setOpen(false)}
        formType={formType}
      />
    </div>
  )
}

export default FormsSec
