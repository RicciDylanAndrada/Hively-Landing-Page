export default function BentoGrid() {
  return (
    <section className="overflow-hidden" style={{ backgroundColor: "#FAFAFA" }}>
      <div className="px-6 md:px-8 py-24">
        <div className="max-w-[1200px] w-full mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2
              className="text-[39px] leading-[1.2] tracking-tight"
              style={{
                fontWeight: 600,
                color: "#0F172A",
              }}
            >
              Everything you need to book more events.
            </h2>
            <p
              className="text-[20px] leading-[1.5] max-w-2xl mx-auto"
              style={{ color: "rgba(15,23,42,0.6)" }}
            >
              Built specifically for mobile cart vendors who live on Instagram.
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Top Left - Instagram DM Inbox */}
            <div
              className="rounded-3xl p-8 space-y-6"
              style={{
                backgroundColor: "#FFFFFF",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              {/* Mock Instagram Inbox */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className="px-3 py-1 rounded-md text-sm"
                    style={{
                      backgroundColor: "#E0E7FF",
                      color: "#3730A3",
                      fontWeight: 600,
                    }}
                  >
                    Instagram Inbox
                  </div>
                  <div
                    className="px-2 py-0.5 rounded-full text-xs"
                    style={{ backgroundColor: "#EF4444", color: "white", fontWeight: 600 }}
                  >
                    3 new
                  </div>
                </div>

                {/* Conversation List */}
                <div className="space-y-2">
                  {/* Active Conversation */}
                  <div
                    className="flex items-center gap-3 p-3 rounded-xl"
                    style={{ backgroundColor: "#F8FAFC" }}
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm"
                      style={{ backgroundColor: "#8B5CF6", fontWeight: 600 }}
                    >
                      SM
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span style={{ fontWeight: 600, color: "#0F172A", fontSize: "14px" }}>
                          Sarah M.
                        </span>
                        <span style={{ color: "#94A3B8", fontSize: "12px" }}>2m</span>
                      </div>
                      <p
                        className="text-sm truncate"
                        style={{ color: "#64748B" }}
                      >
                        Hi! I&apos;m getting married in June...
                      </p>
                    </div>
                  </div>

                  {/* Other Conversations */}
                  <div className="flex items-center gap-3 p-3 rounded-xl">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm"
                      style={{ backgroundColor: "#3B82F6", fontWeight: 600 }}
                    >
                      CE
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span style={{ fontWeight: 600, color: "#0F172A", fontSize: "14px" }}>
                          Corporate Events Co.
                        </span>
                        <span style={{ color: "#94A3B8", fontSize: "12px" }}>1h</span>
                      </div>
                      <p
                        className="text-sm truncate"
                        style={{ color: "#64748B" }}
                      >
                        Looking for coffee service for 200...
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm"
                      style={{ backgroundColor: "#10B981", fontWeight: 600 }}
                    >
                      JB
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span style={{ fontWeight: 600, color: "#0F172A", fontSize: "14px" }}>
                          Jessica B.
                        </span>
                        <span style={{ color: "#94A3B8", fontSize: "12px" }}>3h</span>
                      </div>
                      <p
                        className="text-sm truncate"
                        style={{ color: "#64748B" }}
                      >
                        What&apos;s your availability for a baby shower?
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3
                  className="text-[20px] tracking-tight"
                  style={{
                    fontWeight: 600,
                    color: "#0F172A",
                  }}
                >
                  Instagram DM Inbox
                </h3>
                <p
                  className="text-[14px] leading-[1.5]"
                  style={{ color: "rgba(15,23,42,0.6)" }}
                >
                  Never lose a lead. See every DM conversation in one place and reply without leaving Hively.
                </p>
              </div>
            </div>

            {/* Top Right - Client Dashboard Preview */}
            <div
              className="rounded-3xl p-8 space-y-6"
              style={{
                backgroundColor: "#FFFFFF",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              {/* Mock Client Dashboard */}
              <div className="space-y-4">
                <div className="flex justify-between items-center mb-2">
                  <span
                    className="text-sm"
                    style={{ color: "#64748B", fontWeight: 600 }}
                  >
                    My Vendors
                  </span>
                  <span
                    className="text-xs px-2 py-1 rounded-md"
                    style={{ backgroundColor: "#F1F5F9", color: "#64748B" }}
                  >
                    June 15 Wedding
                  </span>
                </div>

                {/* Vendor Cards */}
                <div className="space-y-2">
                  <div
                    className="flex items-center gap-3 p-3 rounded-xl"
                    style={{ backgroundColor: "#F0FDF4", border: "1px solid #BBF7D0" }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: "#10B981" }}
                    >
                      <span className="text-white text-xs">☕</span>
                    </div>
                    <div className="flex-1">
                      <span style={{ fontWeight: 600, color: "#0F172A", fontSize: "13px" }}>
                        The Roaming Barista
                      </span>
                    </div>
                    <span
                      className="text-xs px-2 py-1 rounded-md"
                      style={{ backgroundColor: "#10B981", color: "white", fontWeight: 600 }}
                    >
                      Booked
                    </span>
                  </div>

                  <div
                    className="flex items-center gap-3 p-3 rounded-xl"
                    style={{ backgroundColor: "#FEF3C7", border: "1px solid #FDE68A" }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: "#F59E0B" }}
                    >
                      <span className="text-white text-xs">🍰</span>
                    </div>
                    <div className="flex-1">
                      <span style={{ fontWeight: 600, color: "#0F172A", fontSize: "13px" }}>
                        Sweet Treats Cart
                      </span>
                    </div>
                    <span
                      className="text-xs px-2 py-1 rounded-md"
                      style={{ backgroundColor: "#F59E0B", color: "white", fontWeight: 600 }}
                    >
                      Quote Sent
                    </span>
                  </div>

                  <div
                    className="flex items-center gap-3 p-3 rounded-xl"
                    style={{ backgroundColor: "#EDE9FE", border: "1px solid #DDD6FE" }}
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: "#8B5CF6" }}
                    >
                      <span className="text-white text-xs">🌸</span>
                    </div>
                    <div className="flex-1">
                      <span style={{ fontWeight: 600, color: "#0F172A", fontSize: "13px" }}>
                        Bloom Mobile Florist
                      </span>
                    </div>
                    <span
                      className="text-xs px-2 py-1 rounded-md"
                      style={{ backgroundColor: "#8B5CF6", color: "white", fontWeight: 600 }}
                    >
                      Deposit Paid
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3
                  className="text-[20px] tracking-tight"
                  style={{
                    fontWeight: 600,
                    color: "#0F172A",
                  }}
                >
                  Client Dashboard
                </h3>
                <p
                  className="text-[14px] leading-[1.5]"
                  style={{ color: "rgba(15,23,42,0.6)" }}
                >
                  Clients see all vendors, quotes, and payments in one place.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Visual Quote Builder */}
            <div
              className="rounded-3xl p-8 space-y-6"
              style={{
                backgroundColor: "#FFFFFF",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              {/* Mock Quote Builder */}
              <div className="space-y-3">
                <div
                  className="text-xs px-3 py-1.5 rounded-md inline-block"
                  style={{
                    backgroundColor: "#E6F29A",
                    color: "#4D5A0F",
                    fontWeight: 600,
                  }}
                >
                  Quote Builder
                </div>
                <div className="space-y-2 mt-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-4 h-4 rounded border-2 flex items-center justify-center"
                        style={{ borderColor: "#10B981", backgroundColor: "#10B981" }}
                      >
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span style={{ color: "#0F172A" }}>Espresso Bar</span>
                    </div>
                    <span style={{ color: "#64748B" }}>$8/person</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-4 h-4 rounded border-2 flex items-center justify-center"
                        style={{ borderColor: "#10B981", backgroundColor: "#10B981" }}
                      >
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span style={{ color: "#0F172A" }}>Cold Brew</span>
                    </div>
                    <span style={{ color: "#64748B" }}>$6/person</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-4 h-4 rounded border-2"
                        style={{ borderColor: "#CBD5E1" }}
                      />
                      <span style={{ color: "#94A3B8" }}>Pastry Add-on</span>
                    </div>
                    <span style={{ color: "#CBD5E1" }}>$4/person</span>
                  </div>
                </div>
                <div
                  className="pt-3 mt-2 border-t flex justify-between items-center"
                  style={{ borderColor: "#F1F5F9" }}
                >
                  <span style={{ color: "#64748B", fontSize: "13px" }}>75 guests</span>
                  <span style={{ fontWeight: 700, color: "#0F172A", fontSize: "18px" }}>
                    $1,050
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <h3
                  className="text-[20px] tracking-tight"
                  style={{
                    fontWeight: 600,
                    color: "#0F172A",
                  }}
                >
                  Visual Quote Builder
                </h3>
                <p
                  className="text-[14px] leading-[1.5]"
                  style={{ color: "rgba(15,23,42,0.6)" }}
                >
                  Menu-based quotes that auto-calculate pricing.
                </p>
              </div>
            </div>

            {/* Multi-Event Calendar */}
            <div
              className="rounded-3xl p-8 space-y-6"
              style={{
                backgroundColor: "#FFFFFF",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              {/* Mock Day View Calendar */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span
                    className="text-sm"
                    style={{ color: "#0F172A", fontWeight: 600 }}
                  >
                    Saturday, Oct 12
                  </span>
                  <span
                    className="text-xs px-2 py-1 rounded-md"
                    style={{ backgroundColor: "#E6F29A", color: "#4D5A0F", fontWeight: 600 }}
                  >
                    3 events
                  </span>
                </div>

                {/* Event List */}
                <div className="space-y-2">
                  <div
                    className="p-2.5 rounded-lg"
                    style={{ backgroundColor: "#DBEAFE", borderLeft: "3px solid #3B82F6" }}
                  >
                    <div className="flex items-center justify-between">
                      <span style={{ fontWeight: 600, color: "#1E40AF", fontSize: "12px" }}>
                        7:00 AM
                      </span>
                      <span style={{ color: "#3B82F6", fontSize: "11px" }}>Corporate</span>
                    </div>
                    <span style={{ color: "#1E40AF", fontSize: "12px" }}>Tech Corp Office</span>
                  </div>

                  <div
                    className="p-2.5 rounded-lg"
                    style={{ backgroundColor: "#FCE7F3", borderLeft: "3px solid #EC4899" }}
                  >
                    <div className="flex items-center justify-between">
                      <span style={{ fontWeight: 600, color: "#9D174D", fontSize: "12px" }}>
                        2:00 PM
                      </span>
                      <span style={{ color: "#EC4899", fontSize: "11px" }}>Wedding</span>
                    </div>
                    <span style={{ color: "#9D174D", fontSize: "12px" }}>Smith Wedding</span>
                  </div>

                  <div
                    className="p-2.5 rounded-lg"
                    style={{ backgroundColor: "#D1FAE5", borderLeft: "3px solid #10B981" }}
                  >
                    <div className="flex items-center justify-between">
                      <span style={{ fontWeight: 600, color: "#065F46", fontSize: "12px" }}>
                        6:00 PM
                      </span>
                      <span style={{ color: "#10B981", fontSize: "11px" }}>Party</span>
                    </div>
                    <span style={{ color: "#065F46", fontSize: "12px" }}>Birthday @ Park</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3
                  className="text-[20px] tracking-tight"
                  style={{
                    fontWeight: 600,
                    color: "#0F172A",
                  }}
                >
                  Multi-Event Calendar
                </h3>
                <p
                  className="text-[14px] leading-[1.5]"
                  style={{ color: "rgba(15,23,42,0.6)" }}
                >
                  Coffee at 7am, wedding at 2pm. See your whole day.
                </p>
              </div>
            </div>

            {/* Auto Prep Lists */}
            <div
              className="rounded-3xl p-8 space-y-6"
              style={{
                backgroundColor: "#FFFFFF",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              {/* Mock Prep List */}
              <div className="space-y-3">
                <div
                  className="text-xs px-3 py-1.5 rounded-md inline-block"
                  style={{
                    backgroundColor: "#DBEAFE",
                    color: "#1E40AF",
                    fontWeight: 600,
                  }}
                >
                  Smith Wedding - 75 guests
                </div>
                <div className="space-y-2 mt-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-4 h-4 rounded border-2 flex items-center justify-center"
                        style={{ borderColor: "#10B981", backgroundColor: "#10B981" }}
                      >
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span style={{ color: "#0F172A" }}>Coffee beans</span>
                    </div>
                    <span style={{ color: "#10B981", fontWeight: 600 }}>2.5 lbs</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-4 h-4 rounded border-2 flex items-center justify-center"
                        style={{ borderColor: "#10B981", backgroundColor: "#10B981" }}
                      >
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span style={{ color: "#0F172A" }}>Oat milk</span>
                    </div>
                    <span style={{ color: "#10B981", fontWeight: 600 }}>4 cartons</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-4 h-4 rounded border-2"
                        style={{ borderColor: "#CBD5E1" }}
                      />
                      <span style={{ color: "#0F172A" }}>Cups (12oz)</span>
                    </div>
                    <span style={{ color: "#64748B", fontWeight: 600 }}>100 ct</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-4 h-4 rounded border-2"
                        style={{ borderColor: "#CBD5E1" }}
                      />
                      <span style={{ color: "#0F172A" }}>Napkins</span>
                    </div>
                    <span style={{ color: "#64748B", fontWeight: 600 }}>150 ct</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3
                  className="text-[20px] tracking-tight"
                  style={{
                    fontWeight: 600,
                    color: "#0F172A",
                  }}
                >
                  Auto Prep Lists
                </h3>
                <p
                  className="text-[14px] leading-[1.5]"
                  style={{ color: "rgba(15,23,42,0.6)" }}
                >
                  Know exactly what to pack for each event.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16 space-y-4">
            <button
              className="px-8 py-4 rounded-lg transition-all hover:opacity-90"
              style={{
                backgroundColor: "#E6F29A",
                color: "#1a1a1a",
                fontWeight: 600,
                fontSize: "16px",
              }}
            >
              Start Free →
            </button>
            <p className="text-[14px]" style={{ color: "rgba(15,23,42,0.5)" }}>
              Join mobile cart vendors growing with Hively.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
