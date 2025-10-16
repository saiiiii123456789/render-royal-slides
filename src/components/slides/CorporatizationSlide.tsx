const CorporatizationSlide = () => {
  const benefits = [
    {
      icon: "🏢",
      title: "Business Model",
      text: "Running farms like businesses to produce more food"
    },
    {
      icon: "🛠️",
      title: "Better Tools",
      text: "Farmers get better tools and technology"
    },
    {
      icon: "📈",
      title: "Market Access",
      text: "Sell their products easier and reach more markets"
    },
    {
      icon: "💰",
      title: "Higher Income",
      text: "Earn more money through efficient operations"
    }
  ];

  const examples = [
    "Companies invest in farms, making them more efficient and productive",
    "Big agribusiness firms use advanced machines and technology",
    "Public administration supports farmers by improving access to markets",
    "Countries like India and USA have successful corporate-farmer partnerships",
    "Helps farmers earn more, use fewer resources, and reduce waste"
  ];

  return (
    <div className="relative w-full h-full bg-gradient-subtle">
      <div className="container mx-auto px-12 py-12 h-full overflow-y-auto">
        {/* Header */}
        <div className="mb-10 animate-fade-in">
          <h2 className="text-6xl font-bold text-gradient mb-4">Corporatization</h2>
          <p className="text-2xl text-muted-foreground">
            Transforming traditional farming into modern agribusiness
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-10 animate-fade-in">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-primary mb-2">{benefit.title}</h3>
              <p className="text-foreground/70">{benefit.text}</p>
            </div>
          ))}
        </div>

        {/* Key Examples */}
        <div className="bg-gradient-primary rounded-2xl p-8 shadow-elegant animate-fade-in">
          <h3 className="text-3xl font-bold text-white mb-6">Key Examples & Impact</h3>
          <div className="space-y-4">
            {examples.map((example, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <p className="text-lg text-white/95 leading-relaxed">{example}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xl text-white/90 italic border-t border-white/20 pt-6">
            The challenge: Keep farming profitable while protecting the environment and small farmers' rights
          </p>
        </div>
      </div>
    </div>
  );
};

export default CorporatizationSlide;
