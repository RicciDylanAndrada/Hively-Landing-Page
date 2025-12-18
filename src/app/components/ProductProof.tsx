const dashboardImage = "/assets/dashboard.png";

export default function ProductProof() {
  return (
    <section className="rounded-t-[48px] overflow-hidden" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="px-6 md:px-8 pt-24 pb-24">
        <div className="max-w-[1200px] w-full mx-auto">
          {/* Overlapping Card */}
          <div 
            className="rounded-3xl p-12 md:p-16"
            style={{
              backgroundColor: '#FFFFFF',
              boxShadow: '0 24px 80px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)'
            }}
          >
            {/* Centered Content */}
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 
                className="text-[39px] leading-[1.2] tracking-tight"
                style={{ 
                  fontWeight: 600,
                  color: '#0F172A'
                }}
              >
                Built for teams that sell time and expertise.
              </h2>
              
              <p 
                className="text-[20px] leading-[1.5]"
                style={{ color: 'rgba(15,23,42,0.72)' }}
              >
                Service businesses need visibility, not complexity.
              </p>
              
              <p 
                className="text-[20px] leading-[1.5]"
                style={{ color: 'rgba(15,23,42,0.72)' }}
              >
                Hively gives you one place to understand what's happening, what's coming, and what requires attention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}