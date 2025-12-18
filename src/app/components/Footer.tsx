export default function Footer() {
  return (
    <footer className="overflow-hidden" style={{ backgroundColor: "#000000" }}>
      <div className="px-6 md:px-8 py-24">
        <div className="max-w-[1200px] w-full mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            {/* Left: Final CTA */}
            <div className="space-y-6">
              <h2
                className="text-[39px] leading-[1.2] tracking-tight"
                style={{
                  fontWeight: 600,
                  color: "#FFFFFF",
                }}
              >
                Ready to organize your operations?
              </h2>
              <p
                className="text-[20px] leading-[1.5]"
                style={{ color: "rgba(255,255,255,0.72)" }}
              >
                Join service businesses running their entire workflow through
                Hively.
              </p>
              <button
                className="px-8 py-4 rounded-lg transition-all hover:opacity-90 mt-4"
                style={{
                  backgroundColor: "#E6F29A",
                  color: "#1a1a1a",
                  fontWeight: 600,
                  fontSize: "16px",
                }}
              >
                Start Your Hive
              </button>
            </div>

            {/* Right: Company Info */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "#E6F29A" }}
                >
                  <svg
                    className="w-6 h-6"
                    style={{ color: "#1a1a1a" }}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                  </svg>
                </div>
                <span
                  className="text-[20px]"
                  style={{
                    fontWeight: 600,
                    color: "#FFFFFF",
                  }}
                >
                  Hively
                </span>
              </div>

              <div className="space-y-3">
                <p
                  className="text-[16px] leading-[1.5]"
                  style={{ color: "rgba(255,255,255,0.72)" }}
                >
                  The business operating system for service-based teams.
                </p>
                <p
                  className="text-[14px]"
                  style={{ color: "rgba(255,255,255,0.48)" }}
                >
                  Hively is not designed for collecting PII or securing highly
                  sensitive data.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div
            className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
          >
            <p
              className="text-[14px]"
              style={{ color: "rgba(255,255,255,0.48)" }}
            >
              © 2025 Hively. All rights reserved.
            </p>

            <div className="flex gap-6">
              <a
                href="#"
                className="text-[14px] hover:opacity-80 transition-opacity"
                style={{ color: "rgba(255,255,255,0.72)" }}
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-[14px] hover:opacity-80 transition-opacity"
                style={{ color: "rgba(255,255,255,0.72)" }}
              >
                Terms
              </a>
              <a
                href="#"
                className="text-[14px] hover:opacity-80 transition-opacity"
                style={{ color: "rgba(255,255,255,0.72)" }}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
