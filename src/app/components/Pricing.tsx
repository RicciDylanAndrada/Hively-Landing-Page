export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Get started and see if Hively is right for you.",
      features: [
        "Up to 5 leads per month",
        "2 bookings per month",
        "Basic quote builder",
        "Client dashboard access",
        "Email support",
      ],
    },
    {
      name: "Pro",
      price: "$29",
      description: "Everything you need to run your mobile cart business.",
      features: [
        "Unlimited leads and bookings",
        "Instagram DM inbox",
        "Visual quote builder",
        "Auto prep lists",
        "Calendar sync (Google, Apple)",
        "Priority support",
      ],
      emphasized: true,
    },
    {
      name: "Business",
      price: "$59",
      description: "For vendors with multiple carts or team members.",
      features: [
        "Everything in Pro",
        "Multiple cart profiles",
        "Team member accounts",
        "Advanced analytics",
        "Custom branding on quotes",
        "Dedicated onboarding",
        "API access",
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
              Simple pricing. Start free.
            </h2>
            <p
              className="text-[20px] leading-[1.5] max-w-2xl mx-auto"
              style={{ color: "rgba(15,23,42,0.72)" }}
            >
              No credit card required. Upgrade when you&apos;re ready.
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
                    backgroundColor: plan.emphasized ? "#E6F29A" : "#F1F5F9",
                    color: "#1a1a1a",
                    fontWeight: 600,
                    fontSize: "16px",
                  }}
                >
                  {plan.name === "Free" ? "Start Free" : "Get Started"}
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
              Cancel anytime. No contracts, no commitment.
            </p>
            <p
              className="text-[16px] leading-[1.5]"
              style={{ color: "rgba(15,23,42,0.72)" }}
            >
              Questions? Email us at hello@hively.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
