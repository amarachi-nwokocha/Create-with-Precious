

const CardVideoSec = () => {
  return (
   <div className="grid grid-cols-1 md:grid-cols-4 gap-5 px-6 my-5">
  {[
    { text: "Mobile Content Production", img: "/mobile-content.jpg" },
    { text: "Video Editing", img: "/video-editing.jpg" },
    { text: "Social Media Marketing", img: "/smm.jpg" },
    { text: "Influencer & UGC coordination", img: "/ugc.jpg" },
  ].map((item, i) => (
    <div
      key={i}
      className="relative max-w-80 h-60 border-4 border-[#5B1E1B] rounded-xl overflow-hidden flex items-center justify-center text-white text-xl font-semibold"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${item.img})` }}
      ></div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Centered Text */}
      <span className="relative z-10">{item.text}</span>
    </div>
  ))}
</div>

  )
}

export default CardVideoSec