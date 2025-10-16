const RecentStudiesSlide = () => {
  const findings = [
    {
      title: "Corporate Investment",
      description: "Big companies play a bigger role in farming by investing money, handling technology, and managing production to reduce costs"
    },
    {
      title: "Government Support",
      description: "Public administration creates policies helping farmers access markets, better seeds, machinery, and fair prices"
    },
    {
      title: "Productivity Improvement",
      description: "Use of machines, better seeds, and investment in research significantly improves agricultural output"
    },
    {
      title: "Contract Farming",
      description: "Companies provide inputs and buy produce, ensuring steady income for farmers through structured agreements"
    }
  ];

  return (
    <div className="relative w-full h-full bg-gradient-subtle">
      <div className="container mx-auto px-12 py-16 h-full flex flex-col justify-center">
        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <h2 className="text-6xl font-bold text-gradient mb-4">Recent Studies</h2>
          <p className="text-2xl text-secondary font-semibold">
            Evidence-based insights on agricultural transformation
          </p>
        </div>

        {/* Research Findings */}
        <div className="grid md:grid-cols-2 gap-8 mb-10 animate-fade-in">
          {findings.map((finding, index) => (
            <div 
              key={index}
              className="relative bg-white rounded-2xl p-8 shadow-elegant hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-accent opacity-10 rounded-bl-full transition-all duration-300 group-hover:scale-150"></div>
              <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    <span className="text-2xl text-white">📊</span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary">{finding.title}</h3>
                </div>
                <p className="text-lg text-foreground/80 leading-relaxed">{finding.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Key Insight */}
        <div className="bg-gradient-accent rounded-2xl p-8 shadow-elegant animate-fade-in">
          <p className="text-2xl text-white font-medium text-center leading-relaxed">
            Proper government rules are needed to balance growth with farmer welfare and sustainability
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecentStudiesSlide;
