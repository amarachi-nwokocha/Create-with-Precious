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
   <div className="px-4 sm:px-6 md:px-8 mt-10">
      <h2 className="underline text-[#5B1E1B] text-2xl sm:text-3xl mb-10 font-semibold text-center">
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
