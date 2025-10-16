const WayForwardSlide = () => {
  const strategies = [
    {
      category: "Technology",
      items: [
        "Use modern technology like AI, drones, and satellite monitoring",
        "Expand digital marketplaces for transparency and easier access"
      ],
      icon: "🤖"
    },
    {
      category: "Sustainability",
      items: [
        "Promote sustainable practices to protect soil, water, and climate",
        "Build better storage and transport facilities"
      ],
      icon: "🌍"
    },
    {
      category: "Empowerment",
      items: [
        "Support farmer groups (FPOs) to help farmers sell directly",
        "Train farmers and rural youth in new farming skills"
      ],
      icon: "👥"
    },
    {
      category: "Policy",
      items: [
        "Ensure fair government policies to protect small farmers",
        "Encourage corporate investment while maintaining farmer rights"
      ],
      icon: "📋"
    }
  ];

  return (
    <div className="relative w-full h-full bg-gradient-subtle">
      <div className="container mx-auto px-12 py-12 h-full overflow-y-auto">
        {/* Header */}
        <div className="mb-10 animate-fade-in">
          <h2 className="text-6xl font-bold text-gradient mb-4">Way Forward</h2>
          <p className="text-2xl text-muted-foreground">
            Strategic roadmap for sustainable agricultural transformation
          </p>
        </div>

        {/* Strategies Grid */}
        <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
          {strategies.map((strategy, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-elegant hover:shadow-2xl transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center text-4xl shadow-soft">
                  {strategy.icon}
                </div>
                <h3 className="text-3xl font-bold text-primary">{strategy.category}</h3>
              </div>
              <div className="space-y-4">
                {strategy.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-accent rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <p className="text-lg text-foreground/80 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-10 bg-gradient-accent rounded-2xl p-8 shadow-elegant text-center animate-fade-in">
          <p className="text-2xl text-white font-semibold leading-relaxed">
            A collaborative approach combining technology, policy, and sustainability is key to transforming Indian agriculture
          </p>
        </div>
      </div>
    </div>
  );
};

export default WayForwardSlide;
