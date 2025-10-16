import heroImage from '@/assets/hero-agriculture.jpg';

const ThankYouSlide = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary-light/85 to-secondary/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-8 animate-fade-in">
        <h1 className="text-8xl md:text-9xl font-bold text-white mb-8 tracking-tight">
          Thank You
        </h1>
        <div className="w-48 h-2 bg-secondary mx-auto rounded-full mb-12"></div>
        <p className="text-3xl md:text-4xl text-white/90 font-light mb-8">
          Questions & Discussion
        </p>
        <div className="space-y-4 text-xl text-white/80">
          <p>Corporatization of Agriculture</p>
          <p>Transforming Farming for a Sustainable Future</p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/10 to-transparent"></div>
    </div>
  );
};

export default ThankYouSlide;
