"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useRef, useState, FormEvent } from "react"

type MultiFormModalProps = {
  open: boolean
  onClose: () => void
  formType: string
}

const MultiFormModal = ({ open, onClose, formType }: MultiFormModalProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const handleIframeLoad = () => {
    if (isSubmitted) {
      setIsLoading(false)
      alert("Form submitted successfully!")
      setIsSubmitted(false)
      onClose() // close modal
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setIsSubmitted(true)

    const form = e.target as HTMLFormElement
    form.submit() // submit via hidden iframe
  }
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white text-[#5B1E1B] rounded-2xl p-6 w-full max-w-lg relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold mb-4">{formType}</h2>
              <form
              method="POST"
              action="https://script.google.com/macros/s/AKfycbyUdluzh3ymqJF6T7tAGCLbqet9CRmPd6CyhLNrsr98jEIuOC8o29IfLeE0pD9Sicgv6g/exec"
              target="hidden_iframe"
              onSubmit={handleSubmit}
              className="space-y-3"
            >
            {/* Render specific form */}
             {formType === "Mobile Event Coverage" && (
                <>
                  <input type="text" name="entry.1496771093" placeholder="Name" className="w-full border p-2 rounded" required />
                  <input type="email" name="entry.1190185547" placeholder="Email" className="w-full border p-2 rounded" required />
                  <input type="text" name="entry.1696450173" placeholder="Event Type" className="w-full border p-2 rounded" required />
                  <input type="date" name="entry.1657169561" placeholder="Event Date" className="w-full border p-2 rounded" required />
                  <input type="text" name="entry.1464720357" placeholder="Deliverables" className="w-full border p-2 rounded" />
                  <input type="text" name="entry.1767645713" placeholder="Add Ons" className="w-full border p-2 rounded" />
                </>
              )}
             {formType === "UGC/Influencer Coordination" && (
                <>
                  <input type="text" name="entry.1496771093" placeholder="Brand Name" className="w-full border p-2 rounded" required />
                  <input type="email" name="entry.1190185547" placeholder="Email Address" className="w-full border p-2 rounded" required />
                  <input type="text" name="entry.1771964033" placeholder="Brand Product/Service" className="w-full border p-2 rounded" />
                  <input type="text" name="entry.1696450173" placeholder="Audience Description" className="w-full border p-2 rounded" />
                  <select name="entry.1767645713" className="w-full border p-2 rounded">
                    <option value="">Campaign Goal</option>
                    <option value="Awareness">Awareness</option>
                    <option value="Engagement">Engagement</option>
                    <option value="Leads">Leads</option>
                  </select>
                  <select name="entry.1708624009" className="w-full border p-2 rounded">
                    <option value="">Type of Creators Needed</option>
                    <option value="Micro">Micro</option>
                    <option value="Macro">Macro</option>
                    <option value="Celebrity">Celebrity</option>
                  </select>
                  <select name="entry.1638876987" className="w-full border p-2 rounded">
                    <option value="">Content Format</option>
                    <option value="Photo">Photo</option>
                    <option value="Video">Video</option>
                    <option value="Carousel">Carousel</option>
                  </select>
                  <input type="text" name="entry.612480023" placeholder="Budget Range" className="w-full border p-2 rounded" />
                  <input type="date" name="entry.1657169561" placeholder="Timeline" className="w-full border p-2 rounded" />
                </>
              )}

       {formType === "Video Editing" && (
                <>
                  <input type="text" name="entry.1496771093" placeholder="Name & Pronouns" className="w-full border p-2 rounded" required />
                  <input type="email" name="entry.1190185547" placeholder="Email Address" className="w-full border p-2 rounded" required />
                  <select name="entry.1696450173" className="w-full border p-2 rounded">
                    <option value="">Type of Project</option>
                    <option value="Social Media Video">Social Media Video</option>
                    <option value="Commercial/Ad">Commercial/Ad</option>
                    <option value="Tutorial/Explainer">Tutorial/Explainer</option>
                    <option value="Other">Other</option>
                  </select>
                  <input type="number" name="entry.1771964033" placeholder="Number of Videos Needed" className="w-full border p-2 rounded" min={1} />
                  <select name="entry.1767645713" className="w-full border p-2 rounded">
                    <option value="">Content Style</option>
                    <option value="Cinematic">Cinematic</option>
                    <option value="Vlog">Vlog</option>
                    <option value="Minimalist">Minimalist</option>
                    <option value="Other">Other</option>
                  </select>
                  <input type="text" name="entry.1708624009" placeholder="Budget Range" className="w-full border p-2 rounded" />
                  <input type="date" name="entry.1657169561" placeholder="Timeline" className="w-full border p-2 rounded" />
                </>
              )}

           {formType === "Social Media Strategy" && (
                <>
                  <input type="text" name="entry.1496771093" placeholder="Brand Name/Handle" className="w-full border p-2 rounded" />
                  <input type="email" name="entry.1190185547" placeholder="Email Address" className="w-full border p-2 rounded" />
                  <textarea name="entry.1771964033" placeholder="Audience Description" className="w-full border p-2 rounded" />
                  <select name="entry.1696450173" multiple size={4} className="w-full border p-2 rounded">
                    <option value="Content Planning">Content Planning</option>
                    <option value="Engagement Strategy">Engagement Strategy</option>
                    <option value="Analytics/Insights">Analytics/Insights</option>
                    <option value="Other">Other</option>
                  </select>
                  <select name="entry.1767645713" multiple size={4} className="w-full border p-2 rounded">
                    <option value="Increase Followers">Increase Followers</option>
                    <option value="Boost Engagement">Boost Engagement</option>
                    <option value="Improve Brand Awareness">Improve Brand Awareness</option>
                    <option value="Other">Other</option>
                  </select>
                  <input type="text" name="entry.1708624009" placeholder="Budget Range" className="w-full border p-2 rounded" />
                  <input type="date" name="entry.1657169561" placeholder="Timeline" className="w-full border p-2 rounded" />
                </>
              )}
            {formType === "Batch Content Creation" && (
                <>
                  <input type="text" name="entry.1496771093" placeholder="Brand/Personal Name" className="w-full border p-2 rounded" />
                  <input type="email" name="entry.1190185547" placeholder="Email Address" className="w-full border p-2 rounded" />
                  <select name="entry.1771964033" className="w-full border p-2 rounded">
                    <option value="">Number of Videos Needed</option>
                    <option value="1-3">1-3</option>
                    <option value="4-6">4-6</option>
                    <option value="7-10">7-10</option>
                    <option value="10+">10+</option>
                  </select>
                  <select name="entry.1696450173" multiple size={4} className="w-full border p-2 rounded">
                    <option value="Instagram">Instagram</option>
                    <option value="TikTok">TikTok</option>
                    <option value="YouTube">YouTube</option>
                    <option value="Other">Other</option>
                  </select>
                  <select name="entry.1767645713" multiple size={4} className="w-full border p-2 rounded">
                    <option value="Cinematic">Cinematic</option>
                    <option value="Vlog">Vlog</option>
                    <option value="Tutorial">Tutorial</option>
                    <option value="Other">Other</option>
                  </select>
                  <input type="text" name="entry.1708624009" placeholder="Budget Range" className="w-full border p-2 rounded" />
                  <input type="date" name="entry.1657169561" placeholder="Timeline" className="w-full border p-2 rounded" />
                </>
              )}
               <button
                type="submit"
                disabled={isLoading}
                className={`bg-[#5B1E1B] text-white border border-[#5B1E1B] px-6 py-2 rounded font-bold transition ${isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-[#5B1E1B]"}`}
              >
                {isLoading ? "Submitting..." : "Submit"}
              </button>
              </form>
               
          

            <iframe
              name="hidden_iframe"
              ref={iframeRef}
              onLoad={handleIframeLoad}
              style={{ display: "none" }}
            ></iframe>
          
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MultiFormModal
