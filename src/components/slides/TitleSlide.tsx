import heroImage from '@/assets/hero-agriculture.jpg';

const TitleSlide = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-secondary/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-8 animate-fade-in">
        <h1 className="text-7xl md:text-8xl font-bold text-white mb-6 tracking-tight leading-tight">
          Corporatization of Agriculture
        </h1>
        <div className="w-32 h-1.5 bg-secondary mx-auto rounded-full mb-8"></div>
        <p className="text-2xl md:text-3xl text-white/90 font-light">
          Transforming Modern Farming Through Innovation
        </p>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/20 to-transparent"></div>
    </div>
  );
};

export default TitleSlide;
