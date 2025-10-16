const StatisticsSlide = () => {
  const data = [
    { year: 'FY 2012', value: 15.02 },
    { year: 'FY 2013', value: 15.24 },
    { year: 'FY 2014', value: 16.09 },
    { year: 'FY 2015', value: 16.06 },
    { year: 'FY 2016', value: 16.16 },
    { year: 'FY 2017', value: 17.26 },
    { year: 'FY 2018', value: 18.4 },
    { year: 'FY 2019', value: 18.79 },
    { year: 'FY 2020', value: 19.94 },
    { year: 'FY 2021', value: 20.74 },
    { year: 'FY 2022', value: 21.7 },
    { year: 'FY 2023', value: 22.72 },
    { year: 'FY 2024', value: 22.87 }
  ];

  const maxValue = Math.max(...data.map(d => d.value));

  return (
    <div className="relative w-full h-full bg-gradient-subtle">
      <div className="container mx-auto px-12 py-12 h-full flex flex-col">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h2 className="text-5xl font-bold text-gradient mb-3">Statistics</h2>
          <p className="text-xl text-foreground font-semibold mb-2">
            Gross Value Added from Agriculture, Forestry and Fishing in India
          </p>
          <p className="text-lg text-muted-foreground">
            Financial Year 2012 to 2024 (in trillion Indian rupees)
          </p>
        </div>

        {/* Chart */}
        <div className="flex-1 bg-white rounded-2xl p-8 shadow-elegant animate-fade-in">
          <div className="h-full flex items-end justify-between gap-2 pb-12">
            {data.map((item, index) => (
              <div key={index} className="flex-1 flex flex-col items-center group">
                <div className="relative w-full flex items-end justify-center mb-2">
                  <div 
                    className="w-full bg-gradient-primary rounded-t-lg transition-all duration-1000 ease-out hover:bg-gradient-accent group-hover:scale-105"
                    style={{ 
                      height: `${(item.value / maxValue) * 400}px`,
                      animationDelay: `${index * 0.05}s`
                    }}
                  >
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-primary text-white px-3 py-1 rounded-lg text-sm font-semibold whitespace-nowrap shadow-lg">
                        ₹{item.value}T
                      </div>
                    </div>
                  </div>
                </div>
                <span className="text-xs font-medium text-foreground/60 transform -rotate-45 origin-top-left mt-2">
                  {item.year}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex justify-between items-center text-sm text-muted-foreground animate-fade-in">
          <p>Source: MOSPI | Values at constant FY 2012 prices</p>
          <p>© Statista 2025</p>
        </div>
      </div>
    </div>
  );
};

export default StatisticsSlide;
