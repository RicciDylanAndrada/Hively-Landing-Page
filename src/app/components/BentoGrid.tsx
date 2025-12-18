const dashboardImage = "/assets/dashboard.png";

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
              Everything you need to grow.
            </h2>
            <p
              className="text-[20px] leading-[1.5] max-w-2xl mx-auto"
              style={{ color: "rgba(15,23,42,0.6)" }}
            >
              A complete operating system designed to simplify your service
              business.
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Top Left - Project Workflow Card */}
            <div
              className="rounded-3xl p-8 space-y-6"
              style={{
                backgroundColor: "#FFFFFF",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              {/* Mock Kanban Board */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-6">
                  <div
                    className="px-3 py-1 rounded-md text-sm"
                    style={{
                      backgroundColor: "#D1FAE5",
                      color: "#065F46",
                      fontWeight: 600,
                    }}
                  >
                    Active Projects
                  </div>
                  <div
                    className="px-3 py-1 rounded-md text-sm"
                    style={{ color: "#64748B" }}
                  >
                    Archived
                  </div>
                  <div className="ml-auto flex -space-x-2">
                    <div
                      className="w-8 h-8 rounded-full"
                      style={{ backgroundColor: "#8B5CF6" }}
                    />
                    <div
                      className="w-8 h-8 rounded-full"
                      style={{ backgroundColor: "#3B82F6" }}
                    />
                    <div
                      className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-xs"
                      style={{ backgroundColor: "#E2E8F0", color: "#64748B" }}
                    >
                      +3
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <div
                      className="text-xs mb-2"
                      style={{ color: "#64748B", fontWeight: 600 }}
                    >
                      TO DO
                    </div>
                    <div className="space-y-2">
                      <div
                        className="h-2 rounded"
                        style={{ backgroundColor: "#DDD6FE", width: "80%" }}
                      />
                      <div
                        className="h-2 rounded"
                        style={{ backgroundColor: "#E0E7FF", width: "100%" }}
                      />
                    </div>
                  </div>
                  <div>
                    <div
                      className="text-xs mb-2"
                      style={{ color: "#64748B", fontWeight: 600 }}
                    >
                      IN PROGRESS
                    </div>
                    <div className="space-y-2">
                      <div
                        className="h-2 rounded"
                        style={{ backgroundColor: "#BBF7D0", width: "90%" }}
                      />
                      <div
                        className="h-2 rounded"
                        style={{ backgroundColor: "#BBF7D0", width: "70%" }}
                      />
                    </div>
                  </div>
                  <div>
                    <div
                      className="text-xs mb-2"
                      style={{ color: "#CBD5E1", fontWeight: 600 }}
                    >
                      REVIEW
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3
                  className="text-[20px] tracking-tight"
                  style={{
                    fontWeight: 600,
                    color: "#0F172A",
                  }}
                >
                  Visualize your entire workflow in one place.
                </h3>
              </div>
            </div>

            {/* Top Right - Smart Scheduling Card */}
            <div
              className="rounded-3xl p-8 space-y-6"
              style={{
                backgroundColor: "#FFFFFF",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              {/* Mock Calendar */}
              <div className="space-y-4">
                <div className="flex justify-between items-center mb-4">
                  <span
                    className="text-sm"
                    style={{ color: "#64748B", fontWeight: 600 }}
                  >
                    October
                  </span>
                  <span className="text-sm" style={{ color: "#64748B" }}>
                    ›
                  </span>
                </div>
                <div className="grid grid-cols-7 gap-2 text-xs text-center">
                  <div style={{ color: "#94A3B8" }}>S</div>
                  <div style={{ color: "#94A3B8" }}>M</div>
                  <div style={{ color: "#94A3B8" }}>T</div>
                  <div style={{ color: "#94A3B8" }}>W</div>
                  <div style={{ color: "#94A3B8" }}>T</div>
                  <div style={{ color: "#94A3B8" }}>F</div>
                  <div style={{ color: "#94A3B8" }}>S</div>
                  {[...Array(7)].map((_, i) => (
                    <div key={i} style={{ color: "#0F172A" }}>
                      {i + 1}
                    </div>
                  ))}
                  {[8, 9].map((num) => (
                    <div key={num} style={{ color: "#0F172A" }}>
                      {num}
                    </div>
                  ))}
                  <div
                    className="w-6 h-6 rounded-md flex items-center justify-center text-white mx-auto"
                    style={{ backgroundColor: "#10B981" }}
                  >
                    10
                  </div>
                  {[11, 12].map((num) => (
                    <div key={num} style={{ color: "#0F172A" }}>
                      {num}
                    </div>
                  ))}
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
                  Smart Scheduling
                </h3>
                <p
                  className="text-[14px] leading-[1.5]"
                  style={{ color: "rgba(15,23,42,0.6)" }}
                >
                  Clients book slots that actually fit your life.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Seamless Payments Card */}
            <div
              className="rounded-3xl p-8 space-y-6"
              style={{
                backgroundColor: "#FFFFFF",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              {/* Mock Invoice */}
              <div className="space-y-3">
                <div
                  className="space-y-2 pb-4 border-b"
                  style={{ borderColor: "#F1F5F9" }}
                >
                  <div
                    className="h-2 rounded"
                    style={{ backgroundColor: "#F1F5F9", width: "60%" }}
                  />
                  <div
                    className="h-2 rounded"
                    style={{ backgroundColor: "#F1F5F9", width: "40%" }}
                  />
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span
                    className="text-[24px]"
                    style={{ fontWeight: 700, color: "#0F172A" }}
                  >
                    $2,450.00
                  </span>
                  <div
                    className="px-3 py-1 rounded-md text-xs"
                    style={{
                      backgroundColor: "#D1FAE5",
                      color: "#065F46",
                      fontWeight: 700,
                    }}
                  >
                    PAID
                  </div>
                </div>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center ml-auto"
                  style={{ backgroundColor: "#D1FAE5" }}
                >
                  <svg
                    className="w-5 h-5"
                    style={{ color: "#10B981" }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
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
                  Seamless Payments
                </h3>
                <p
                  className="text-[14px] leading-[1.5]"
                  style={{ color: "rgba(15,23,42,0.6)" }}
                >
                  Get paid 2x faster with automated invoices.
                </p>
              </div>
            </div>

            {/* Automations on Autopilot Card */}
            <div
              className="rounded-3xl p-8 space-y-6"
              style={{
                backgroundColor: "#FFFFFF",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <div className="flex justify-center">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: "#EDE9FE" }}
                >
                  <svg
                    className="w-8 h-8"
                    style={{ color: "#8B5CF6" }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>

              <div className="space-y-2 text-center">
                <h3
                  className="text-[20px] tracking-tight"
                  style={{
                    fontWeight: 600,
                    color: "#0F172A",
                  }}
                >
                  Automations on Autopilot
                </h3>
                <p
                  className="text-[14px] leading-[1.5]"
                  style={{ color: "rgba(15,23,42,0.6)" }}
                >
                  Trigger automated workflows for emails, tasks, and reminders
                  so you never drop the ball.
                </p>
              </div>
            </div>

            {/* Lead Management Card */}
            <div
              className="rounded-3xl p-8 space-y-6"
              style={{
                backgroundColor: "#FFFFFF",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              {/* Mock Lead Actions */}
              <div className="space-y-3">
                <div
                  className="text-xs px-3 py-1.5 rounded-md inline-block"
                  style={{
                    backgroundColor: "#F1F5F9",
                    color: "#64748B",
                    fontWeight: 600,
                  }}
                >
                  New Lead
                </div>
                <div className="space-y-2 mt-4">
                  <button
                    className="w-full px-4 py-2.5 rounded-lg text-white text-sm flex items-center justify-center gap-2"
                    style={{ backgroundColor: "#A855F7", fontWeight: 600 }}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Send Welcome Email
                  </button>
                  <div
                    className="text-xs text-center pt-2"
                    style={{ color: "#94A3B8", fontWeight: 600 }}
                  >
                    Create Task
                  </div>
                </div>
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
              Start Your Hive →
            </button>
            <p className="text-[14px]" style={{ color: "rgba(15,23,42,0.5)" }}>
              Join 2,000+ service businesses growing with Hively.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
