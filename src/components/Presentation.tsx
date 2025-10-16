import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { toast } from 'sonner';
import TitleSlide from './slides/TitleSlide';
import IntroductionSlide from './slides/IntroductionSlide';
import BackgroundSlide from './slides/BackgroundSlide';
import CorporatizationSlide from './slides/CorporatizationSlide';
import RecentStudiesSlide from './slides/RecentStudiesSlide';
import StatisticsSlide from './slides/StatisticsSlide';
import ConclusionSlide from './slides/ConclusionSlide';
import WayForwardSlide from './slides/WayForwardSlide';
import ThankYouSlide from './slides/ThankYouSlide';

const slides = [
  TitleSlide,
  IntroductionSlide,
  BackgroundSlide,
  CorporatizationSlide,
  RecentStudiesSlide,
  StatisticsSlide,
  ConclusionSlide,
  WayForwardSlide,
  ThankYouSlide,
];

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isExporting, setIsExporting] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        previousSlide();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const exportToPDF = async () => {
    setIsExporting(true);
    toast.info('Generating PDF... This may take a moment.');
    
    try {
      const pdf = new jsPDF('landscape', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      for (let i = 0; i < slides.length; i++) {
        setCurrentSlide(i);
        // Wait for slide to render
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const slideElement = document.querySelector('.slide-content') as HTMLElement;
        if (slideElement) {
          const canvas = await html2canvas(slideElement, {
            scale: 2,
            useCORS: true,
            logging: false,
          });
          
          const imgData = canvas.toDataURL('image/png');
          const imgWidth = pageWidth;
          const imgHeight = (canvas.height * pageWidth) / canvas.width;
          
          if (i > 0) {
            pdf.addPage();
          }
          
          pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        }
      }
      
      pdf.save('Corporatization-of-Agriculture-Presentation.pdf');
      toast.success('PDF downloaded successfully!');
      setCurrentSlide(0);
    } catch (error) {
      console.error('Error generating PDF:', error);
      toast.error('Failed to generate PDF. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-subtle">
      {/* Slide Content */}
      <div className="w-full h-full slide-content">
        <CurrentSlideComponent />
      </div>

      {/* Download PDF Button */}
      <div className="absolute top-8 right-8 z-50">
        <Button
          onClick={exportToPDF}
          disabled={isExporting}
          className="bg-white/90 hover:bg-white border-primary/20 shadow-soft backdrop-blur-sm"
          variant="outline"
        >
          <Download className="h-4 w-4 mr-2" />
          {isExporting ? 'Generating PDF...' : 'Download PDF'}
        </Button>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={previousSlide}
          disabled={currentSlide === 0}
          className="bg-white/90 hover:bg-white border-primary/20 shadow-soft backdrop-blur-sm"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide
                  ? 'w-8 bg-primary'
                  : 'w-2 bg-primary/30 hover:bg-primary/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="bg-white/90 hover:bg-white border-primary/20 shadow-soft backdrop-blur-sm"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 right-8 text-sm font-medium text-muted-foreground bg-white/90 px-4 py-2 rounded-full backdrop-blur-sm shadow-soft">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
};

export default Presentation;
