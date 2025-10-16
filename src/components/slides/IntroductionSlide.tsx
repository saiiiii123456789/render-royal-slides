const IntroductionSlide = () => {
  const points = [
    {
      title: "Corporate Evolution",
      description: "The increasing involvement of large corporations in agricultural activities, shifting control from individual farmers to big companies."
    },
    {
      title: "Modern Management",
      description: "Today, farming is becoming more like big businesses with better planning and management."
    },
    {
      title: "Policy Framework",
      description: "Governments create rules to make sure farming stays fair and helps both farmers and consumers."
    }
  ];

  return (
    <div className="relative w-full h-full bg-gradient-subtle">
      <div className="container mx-auto px-12 py-16 h-full flex flex-col justify-center">
        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <h2 className="text-6xl font-bold text-gradient mb-4">Introduction</h2>
          <div className="w-24 h-1 bg-gradient-accent rounded-full"></div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
          {points.map((point, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-elegant hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-white">{index + 1}</span>
              </div>
              <h3 className="text-2xl font-semibold text-primary mb-4">{point.title}</h3>
              <p className="text-lg text-foreground/80 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Accent */}
        <div className="mt-auto pt-8">
          <div className="h-2 bg-gradient-accent rounded-full w-1/3 mx-auto opacity-60"></div>
        </div>
      </div>
    </div>
  );
};

export default IntroductionSlide;
