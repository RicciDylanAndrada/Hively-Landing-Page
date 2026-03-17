export default function ProductProof() {
  const vendorTypes = [
    { name: "Coffee Carts", emoji: "☕" },
    { name: "Dessert Carts", emoji: "🧁" },
    { name: "Flower Carts", emoji: "💐" },
    { name: "Mobile Bars", emoji: "🍸" },
    { name: "Food Trucks", emoji: "🚚" },
    { name: "Photo Booths", emoji: "📸" },
  ];

  return (
    <section
      className="rounded-t-[48px] overflow-hidden"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="px-6 md:px-8 pt-24 pb-24">
        <div className="max-w-[1200px] w-full mx-auto">
          {/* Overlapping Card */}
          <div
            className="rounded-3xl p-12 md:p-16"
            style={{
              backgroundColor: "#FFFFFF",
              boxShadow:
                "0 24px 80px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)",
            }}
          >
            {/* Centered Content */}
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2
                className="text-[39px] leading-[1.2] tracking-tight"
                style={{
                  fontWeight: 600,
                  color: "#0F172A",
                }}
              >
                Built for the vendors who make events special.
              </h2>

              {/* Vendor Type Badges */}
              <div className="flex flex-wrap justify-center gap-3">
                {vendorTypes.map((type, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 rounded-full text-[15px] flex items-center gap-2"
                    style={{
                      background: "#F8FAFC",
                      border: "1px solid #E2E8F0",
                      color: "#475569",
                      fontWeight: 500,
                    }}
                  >
                    <span>{type.emoji}</span>
                    <span>{type.name}</span>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <div className="pt-6 space-y-4">
                <p
                  className="text-[22px] leading-[1.5] italic"
                  style={{ color: "#0F172A" }}
                >
                  &ldquo;I used to lose leads in my Instagram DMs. Now every
                  inquiry becomes a trackable lead, and my clients love having
                  their own dashboard.&rdquo;
                </p>
                <div className="flex items-center justify-center gap-3">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-[16px]"
                    style={{
                      background: "#E6F29A",
                      color: "#1a1a1a",
                      fontWeight: 600,
                    }}
                  >
                    M
                  </div>
                  <div className="text-left">
                    <p
                      className="text-[16px]"
                      style={{ fontWeight: 600, color: "#0F172A" }}
                    >
                      Maria Chen
                    </p>
                    <p
                      className="text-[14px]"
                      style={{ color: "rgba(15,23,42,0.6)" }}
                    >
                      The Roaming Barista, Austin TX
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}