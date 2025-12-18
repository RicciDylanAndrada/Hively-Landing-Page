export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      description: "For small service teams getting organized.",
      features: [
        "Up to 50 active bookings per month",
        "Client management and lead tracking",
        "Basic automations and reminders",
        "Invoice generation and payment tracking",
        "Calendar view and scheduling",
        "Email support",
      ],
    },
    {
      name: "Pro",
      price: "$79",
      description: "For growing teams managing active workflows.",
      features: [
        "Up to 200 active bookings per month",
        "Advanced automation workflows",
        "Custom invoice templates",
        "Team collaboration and permissions",
        "Priority email and chat support",
        "Custom reporting and exports",
        "API access for integrations",
      ],
      emphasized: true,
    },
    {
      name: "Business",
      price: "$149",
      description: "For teams running complex operations.",
      features: [
        "Unlimited bookings per month",
        "Advanced workflow automation",
        "White-label client portal",
        "Multiple team workspaces",
        "Dedicated account manager",
        "Custom integrations and webhooks",
        "Advanced analytics and forecasting",
        "SLA and priority support",
      ],
    },
  ];

  return (
    <section
      className="min-h-screen pb-32"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="px-6 md:px-8 pt-16 pb-32">
        <div className="max-w-[1200px] w-full mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8 space-y-2">
            <h2
              className="text-[39px] leading-[1.2] tracking-tight"
              style={{
                fontWeight: 600,
                color: "#0F172A",
              }}
            >
              Choose your plan.
            </h2>
            <p
              className="text-[20px] leading-[1.5] max-w-2xl mx-auto"
              style={{ color: "rgba(15,23,42,0.72)" }}
            >
              All plans include full access to the Hively platform with monthly
              billing.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="rounded-2xl p-6 space-y-4 relative"
                style={{
                  backgroundColor: "#FFFFFF",
                  boxShadow: plan.emphasized
                    ? "0 8px 32px rgba(0,0,0,0.12), 0 0 0 2px rgba(249,115,22,0.2)"
                    : "0 4px 20px rgba(0,0,0,0.06)",
                  transform: plan.emphasized ? "scale(1.05)" : "scale(1)",
                  transition: "all 0.3s ease",
                }}
              >
                {plan.emphasized && (
                  <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[14px]"
                    style={{
                      backgroundColor: "#E6F29A",
                      color: "#1a1a1a",
                      fontWeight: 600,
                    }}
                  >
                    Most Popular
                  </div>
                )}

                {/* Plan Header */}
                <div className="space-y-4">
                  <h3
                    className="text-[25px] tracking-tight"
                    style={{
                      fontWeight: 600,
                      color: "#0F172A",
                    }}
                  >
                    {plan.name}
                  </h3>
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-1">
                      <span
                        className="text-[42px] tracking-tight"
                        style={{
                          fontWeight: 600,
                          color: "#0F172A",
                        }}
                      >
                        {plan.price}
                      </span>
                      <span
                        className="text-[16px]"
                        style={{ color: "rgba(15,23,42,0.48)" }}
                      >
                        /month
                      </span>
                    </div>
                    <p
                      className="text-[16px] leading-[1.5]"
                      style={{ color: "rgba(15,23,42,0.72)" }}
                    >
                      {plan.description}
                    </p>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-3 text-[16px] leading-[1.5]"
                      style={{ color: "rgba(15,23,42,0.72)" }}
                    >
                      <svg
                        className="w-5 h-5 mt-0.5 flex-shrink-0"
                        style={{ color: "#E6F29A" }}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className="w-full px-6 py-3 rounded-lg transition-all hover:opacity-90"
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
            ))}
          </div>

          {/* Post-pricing reassurance */}
          <div className="text-center space-y-4">
            <p
              className="text-[16px] leading-[1.5]"
              style={{ color: "rgba(15,23,42,0.72)" }}
            >
              Cancel anytime with no long-term commitment required.
            </p>
            <p
              className="text-[16px] leading-[1.5]"
              style={{ color: "rgba(15,23,42,0.72)" }}
            >
              All plans include secure data storage and regular platform
              updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
