"use client";

import { useState, useRef, FormEvent } from "react";

export default function MultiFormModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formType, setFormType] = useState(""); // selected form
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleIframeLoad = () => {
    if (isSubmitted) {
      setIsLoading(false);
      alert("Form submitted successfully!");
      setIsSubmitted(false);
      setIsModalOpen(false);
      setFormType(""); // reset selection
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSubmitted(true);

    const form = e.target as HTMLFormElement;

    // Submit via hidden iframe (bypasses CORS)
    form.submit();
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition z-50"
      >
        Open Multi Form
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4">
          <div className="bg-black rounded-lg p-6 w-full max-w-lg relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-white font-bold"
            >
              X
            </button>

            <form
              onSubmit={handleSubmit}
              action="https://script.google.com/macros/s/AKfycbyUdluzh3ymqJF6T7tAGCLbqet9CRmPd6CyhLNrsr98jEIuOC8o29IfLeE0pD9Sicgv6g/exec"
              method="POST"
              target="hidden_iframe"
              className="space-y-4"
            >
              <input type="hidden" name="formType" value={formType} />

              {/* Form selector */}
              <select
                name="formTypeSelect"
                required
                value={formType}
                onChange={(e) => setFormType(e.target.value)}
                className="w-full border p-2 rounded"
              >
                <option value="">Select Form</option>
                <option value="Mobile Event Coverage">Mobile Event Coverage</option>
                <option value="UGC/Influencer Coordination">UGC/Influencer Coordination</option>
                <option value="Video Editing">Video Editing</option>
                <option value="Social Media Strategy">Social Media Strategy</option>
                <option value="Batch Content Creation">Batch Content Creation</option>
              </select>

              {/* ------------------ FORM 1 ------------------ */}
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

              {/* ------------------ FORM 2 ------------------ */}
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

              {/* ------------------ FORM 3 ------------------ */}
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

              {/* ------------------ FORM 4 ------------------ */}
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

              {/* ------------------ FORM 5 ------------------ */}
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
                className={`bg-black text-[#FFD700] border border-[#FFD700] px-6 py-2 rounded font-bold transition ${isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-[#FFD700] hover:text-black"}`}
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
          </div>
        </div>
      )}
    </>
  );
}
