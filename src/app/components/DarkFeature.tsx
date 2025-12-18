const dashboardImage = "/assets/dashboard.png";

export default function DarkFeature() {
  return (
    <section
      data-theme="dark"
      className="min-h-screen relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #2d2d30 0%, #252528 50%, #1e1e21 100%)",
      }}
    >
      {/* Glossy highlight at top for that charcoal sheen */}
      <div
        className="absolute top-0 left-0 right-0 h-[300px] pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 100%)",
        }}
      />
      <div className="px-6 md:px-8 py-32 relative z-10">
        <div className="max-w-[1200px] w-full mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Glass Card Content */}
            <div
              className="p-8 md:p-10 rounded-3xl space-y-6"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow:
                  "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
              }}
            >
              <h2
                className="text-[36px] md:text-[42px] leading-[1.15] tracking-tight"
                style={{
                  fontWeight: 600,
                  color: "#FFFFFF",
                  textShadow: "0 2px 20px rgba(0,0,0,0.3)",
                }}
              >
                See your entire business at a glance.
              </h2>

              <p
                className="text-[18px] leading-[1.6]"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                Track revenue, active bookings, new leads, and upcoming events
                without switching between tools.
              </p>

              <p
                className="text-[18px] leading-[1.6]"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                Every metric updates in real-time as your business operates.
              </p>

              <button
                className="px-7 py-3.5 rounded-full transition-all hover:scale-105 hover:shadow-lg mt-2"
                style={{
                  background: "#E6F29A",
                  color: "#1a1a1a",
                  fontWeight: 600,
                  fontSize: "15px",
                  boxShadow: "0 4px 20px rgba(230, 242, 154, 0.3)",
                }}
              >
                Start Your Hive
              </button>
            </div>

            {/* Right: Dashboard Image with glass frame */}
            <div
              className="rounded-3xl overflow-hidden relative"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                boxShadow:
                  "0 25px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
                padding: "12px",
              }}
            >
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={dashboardImage}
                  alt="Dashboard overview of business performance"
                  className="w-full h-auto"
                  style={{
                    maskImage:
                      "linear-gradient(to bottom, black 70%, transparent 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, black 70%, transparent 100%)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
