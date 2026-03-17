export default function DarkFeature() {
  const clientVendors = [
    {
      name: "The Roaming Barista",
      type: "Coffee Cart",
      status: "Booked",
      statusColor: "#22C55E",
      event: "Wedding Reception",
      date: "Mar 22",
    },
    {
      name: "Sweet Treats Cart",
      type: "Dessert Cart",
      status: "Quote Sent",
      statusColor: "#F59E0B",
      event: "Corporate Event",
      date: "Apr 5",
    },
    {
      name: "Bloom Mobile Florist",
      type: "Flower Cart",
      status: "Deposit Paid",
      statusColor: "#3B82F6",
      event: "Wedding Reception",
      date: "Mar 22",
    },
  ];

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
                Your clients will love you for this.
              </h2>

              <p
                className="text-[18px] leading-[1.6]"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                Give every client their own dashboard. They see all their
                vendors, quotes, and payments in one place — even vendors not on
                Hively.
              </p>

              <p
                className="text-[18px] leading-[1.6]"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                No more &ldquo;did you get my payment?&rdquo; texts. No more
                hunting through emails for contracts. Everything is organized,
                automatically.
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
                Start Free
              </button>
            </div>

            {/* Right: Client Dashboard Mockup */}
            <div
              className="rounded-3xl overflow-hidden relative"
              style={{
                background: "rgba(255, 255, 255, 0.03)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                boxShadow:
                  "0 25px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
                padding: "16px",
              }}
            >
              {/* Client Dashboard UI */}
              <div
                className="rounded-2xl p-6 space-y-5"
                style={{ background: "#FFFFFF" }}
              >
                {/* Dashboard Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <p
                      className="text-[13px]"
                      style={{ color: "rgba(15,23,42,0.5)" }}
                    >
                      Client Dashboard
                    </p>
                    <p
                      className="text-[18px]"
                      style={{ fontWeight: 600, color: "#0F172A" }}
                    >
                      Sarah&apos;s Wedding
                    </p>
                  </div>
                  <div
                    className="px-3 py-1 rounded-full text-[12px]"
                    style={{
                      background: "#F0FDF4",
                      color: "#15803D",
                      fontWeight: 500,
                    }}
                  >
                    March 22, 2026
                  </div>
                </div>

                {/* Vendor Cards */}
                <div className="space-y-3">
                  <p
                    className="text-[13px]"
                    style={{ color: "rgba(15,23,42,0.5)", fontWeight: 500 }}
                  >
                    My Vendors
                  </p>
                  {clientVendors.map((vendor, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl flex items-center justify-between"
                      style={{
                        background: "#F8FAFC",
                        border: "1px solid #E2E8F0",
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-[14px]"
                          style={{
                            background: "#E6F29A",
                            color: "#1a1a1a",
                            fontWeight: 600,
                          }}
                        >
                          {vendor.name.charAt(0)}
                        </div>
                        <div>
                          <p
                            className="text-[14px]"
                            style={{ fontWeight: 600, color: "#0F172A" }}
                          >
                            {vendor.name}
                          </p>
                          <p
                            className="text-[12px]"
                            style={{ color: "rgba(15,23,42,0.5)" }}
                          >
                            {vendor.type}
                          </p>
                        </div>
                      </div>
                      <div
                        className="px-2 py-1 rounded-md text-[11px]"
                        style={{
                          background: `${vendor.statusColor}15`,
                          color: vendor.statusColor,
                          fontWeight: 600,
                        }}
                      >
                        {vendor.status}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  <div
                    className="p-3 rounded-lg text-center"
                    style={{ background: "#F8FAFC" }}
                  >
                    <p
                      className="text-[20px]"
                      style={{ fontWeight: 600, color: "#0F172A" }}
                    >
                      3
                    </p>
                    <p
                      className="text-[11px]"
                      style={{ color: "rgba(15,23,42,0.5)" }}
                    >
                      Vendors
                    </p>
                  </div>
                  <div
                    className="p-3 rounded-lg text-center"
                    style={{ background: "#F8FAFC" }}
                  >
                    <p
                      className="text-[20px]"
                      style={{ fontWeight: 600, color: "#0F172A" }}
                    >
                      $2,450
                    </p>
                    <p
                      className="text-[11px]"
                      style={{ color: "rgba(15,23,42,0.5)" }}
                    >
                      Total
                    </p>
                  </div>
                  <div
                    className="p-3 rounded-lg text-center"
                    style={{ background: "#F8FAFC" }}
                  >
                    <p
                      className="text-[20px]"
                      style={{ fontWeight: 600, color: "#22C55E" }}
                    >
                      $850
                    </p>
                    <p
                      className="text-[11px]"
                      style={{ color: "rgba(15,23,42,0.5)" }}
                    >
                      Paid
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
