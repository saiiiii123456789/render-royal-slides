const ConclusionSlide = () => {
  const points = [
    {
      icon: "🚀",
      title: "Technology & Investment",
      text: "Brings modern technology and investments that boost farm productivity and incomes"
    },
    {
      icon: "📱",
      title: "Market Access",
      text: "Helps farmers access markets and digital tools for better farming decisions"
    },
    {
      icon: "⚠️",
      title: "Farmer Concerns",
      text: "Small farmers worry about losing land and control over their produce"
    },
    {
      icon: "⚖️",
      title: "Policy Balance",
      text: "Government policies focus on balancing corporate benefits with farmer protection"
    },
    {
      icon: "🌱",
      title: "Sustainable Future",
      text: "Can transform agriculture if done fairly and sustainably"
    }
  ];

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-primary"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,174,71,0.2),transparent_50%)]"></div>

      <div className="relative container mx-auto px-12 py-16 h-full flex flex-col justify-center">
        {/* Header */}
        <div className="mb-12 text-center animate-fade-in">
          <h2 className="text-7xl font-bold text-white mb-4">Conclusion</h2>
          <div className="w-32 h-1.5 bg-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-2xl text-white/90 font-light">
            Corporatization in Agriculture: A Balanced Perspective
          </p>
        </div>

        {/* Key Points */}
        <div className="grid md:grid-cols-5 gap-6 animate-fade-in">
          {points.map((point, index) => (
            <div 
              key={index}
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-elegant hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4">{point.icon}</div>
              <h3 className="text-lg font-bold text-primary mb-3 min-h-[3rem] flex items-center justify-center">
                {point.title}
              </h3>
              <p className="text-sm text-foreground/80 leading-relaxed">{point.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConclusionSlide;
