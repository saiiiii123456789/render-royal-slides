import backgroundPattern from '@/assets/background-pattern.jpg';

const BackgroundSlide = () => {
  const points = [
    "Farming used to be mostly small and family-run",
    "Growing populations needed more food, so small farms couldn't keep up",
    "Technology and machines started changing how farming works",
    "Big companies began helping with seeds, fertilizers, and machines",
    "Governments wanted to make farming more organized and efficient"
  ];

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${backgroundPattern})` }}
      />
      <div className="absolute inset-0 bg-gradient-subtle"></div>

      <div className="relative container mx-auto px-12 py-16 h-full flex items-center">
        <div className="w-full">
          {/* Header */}
          <div className="mb-16 animate-fade-in">
            <h2 className="text-7xl font-bold text-gradient mb-6">Background</h2>
            <p className="text-2xl text-muted-foreground max-w-3xl">
              Understanding the historical context of agricultural transformation
            </p>
          </div>

          {/* Timeline Points */}
          <div className="space-y-6 max-w-4xl">
            {points.map((point, index) => (
              <div 
                key={index}
                className="flex items-start gap-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-elegant">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
                <div className="flex-1 bg-white rounded-xl p-6 shadow-soft hover:shadow-elegant transition-all duration-300">
                  <p className="text-xl text-foreground leading-relaxed">{point}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundSlide;
