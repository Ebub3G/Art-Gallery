import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronLeft, ChevronRight, Mail, Phone, MapPin, ExternalLink, Filter, Grid, List } from 'lucide-react';

interface Artwork {
  id: number;
  title: string;
  year: number;
  medium: string;
  dimensions: string;
  description: string;
  price: string;
  image: string;
  category: 'oil-painting' | 'watercolor' | 'portrait' | 'still-life' | 'landscape' | 'abstract';
  featured?: boolean;
}

const artworks: Artwork[] = [
  {
    id: 1,
    title: "Golden Hour Mountains",
    year: 2023,
    medium: "Oil on Canvas",
    dimensions: "36\" x 48\"",
    description: "A breathtaking landscape capturing the golden hour as the sun sets behind majestic mountain peaks. This piece explores the interplay of light and shadow in nature.",
    price: "$3,200",
    image: "https://images.pexels.com/photos/1183021/pexels-photo-1183021.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: 'oil-painting',
    featured: true
  },
  {
    id: 2,
    title: "Serene Valley",
    year: 2023,
    medium: "Oil on Canvas",
    dimensions: "30\" x 40\"",
    description: "A peaceful valley scene with rolling hills and distant mountains, painted with rich oil textures.",
    price: "$2,800",
    image: "https://images.pexels.com/photos/1578662/pexels-photo-1578662.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: 'oil-painting'
  },
  {
    id: 3,
    title: "Morning Mist",
    year: 2023,
    medium: "Watercolor on Paper",
    dimensions: "16\" x 20\"",
    description: "Delicate watercolor technique captures the ethereal quality of morning mist over a tranquil lake.",
    price: "$1,200",
    image: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: 'watercolor'
  },
  {
    id: 4,
    title: "Ocean Dreams",
    year: 2022,
    medium: "Watercolor on Paper",
    dimensions: "14\" x 18\"",
    description: "Fluid watercolor techniques mirror the natural movement of ocean waves in this dynamic seascape.",
    price: "$950",
    image: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: 'watercolor'
  },
  {
    id: 5,
    title: "Portrait of Grace",
    year: 2023,
    medium: "Oil on Canvas",
    dimensions: "20\" x 24\"",
    description: "An intimate portrait study exploring the subtle play of light and emotion across the human form.",
    price: "$2,400",
    image: "https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: 'portrait'
  },
  {
    id: 6,
    title: "The Contemplative",
    year: 2022,
    medium: "Charcoal on Paper",
    dimensions: "16\" x 20\"",
    description: "A powerful charcoal portrait capturing a moment of quiet reflection and inner strength.",
    price: "$1,100",
    image: "https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: 'portrait'
  },
  {
    id: 7,
    title: "Autumn Harvest",
    year: 2023,
    medium: "Oil on Canvas",
    dimensions: "18\" x 24\"",
    description: "A classical still life arrangement featuring seasonal fruits and flowers, demonstrating masterful traditional techniques.",
    price: "$1,800",
    image: "https://images.pexels.com/photos/1070945/pexels-photo-1070945.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: 'still-life'
  },
  {
    id: 8,
    title: "Ceramic and Roses",
    year: 2022,
    medium: "Oil on Canvas",
    dimensions: "16\" x 20\"",
    description: "An elegant still life showcasing the interplay of textures between delicate flowers and smooth ceramics.",
    price: "$1,600",
    image: "https://images.pexels.com/photos/1070945/pexels-photo-1070945.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: 'still-life'
  },
  {
    id: 9,
    title: "Desert Bloom",
    year: 2023,
    medium: "Oil on Canvas",
    dimensions: "24\" x 36\"",
    description: "A vibrant landscape capturing the unexpected beauty of desert wildflowers in full bloom.",
    price: "$2,600",
    image: "https://images.pexels.com/photos/1183021/pexels-photo-1183021.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: 'landscape'
  },
  {
    id: 10,
    title: "Coastal Path",
    year: 2022,
    medium: "Watercolor on Paper",
    dimensions: "12\" x 16\"",
    description: "A serene coastal scene painted with flowing watercolor techniques that capture the essence of sea and sky.",
    price: "$850",
    image: "https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: 'landscape'
  },
  {
    id: 11,
    title: "Urban Symphony",
    year: 2023,
    medium: "Mixed Media on Canvas",
    dimensions: "30\" x 40\"",
    description: "An abstract interpretation of city rhythms using bold colors and dynamic compositions.",
    price: "$2,200",
    image: "https://images.pexels.com/photos/1154638/pexels-photo-1154638.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: 'abstract'
  },
  {
    id: 12,
    title: "Color Flow",
    year: 2022,
    medium: "Acrylic on Canvas",
    dimensions: "24\" x 30\"",
    description: "A vibrant abstract piece exploring the emotional impact of color and form in contemporary expression.",
    price: "$1,900",
    image: "https://images.pexels.com/photos/1154638/pexels-photo-1154638.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: 'abstract'
  }
];

const categories = [
  { id: 'all', name: 'All Works', count: artworks.length },
  { id: 'oil-painting', name: 'Oil Paintings', count: artworks.filter(a => a.category === 'oil-painting').length },
  { id: 'watercolor', name: 'Watercolors', count: artworks.filter(a => a.category === 'watercolor').length },
  { id: 'portrait', name: 'Portraits', count: artworks.filter(a => a.category === 'portrait').length },
  { id: 'still-life', name: 'Still Life', count: artworks.filter(a => a.category === 'still-life').length },
  { id: 'landscape', name: 'Landscapes', count: artworks.filter(a => a.category === 'landscape').length },
  { id: 'abstract', name: 'Abstract', count: artworks.filter(a => a.category === 'abstract').length }
];

function App() {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLanding, setShowLanding] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredArtworks = selectedCategory === 'all' 
    ? artworks 
    : artworks.filter(artwork => artwork.category === selectedCategory);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const nextArtwork = () => {
    if (!selectedArtwork) return;
    const currentIndex = filteredArtworks.findIndex(art => art.id === selectedArtwork.id);
    const nextIndex = (currentIndex + 1) % filteredArtworks.length;
    setSelectedArtwork(filteredArtworks[nextIndex]);
  };

  const prevArtwork = () => {
    if (!selectedArtwork) return;
    const currentIndex = filteredArtworks.findIndex(art => art.id === selectedArtwork.id);
    const prevIndex = currentIndex === 0 ? filteredArtworks.length - 1 : currentIndex - 1;
    setSelectedArtwork(filteredArtworks[prevIndex]);
  };

  if (showLanding) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white overflow-hidden">
        {/* Landing Page with Gallery Background */}
        <div className="relative min-h-screen flex items-center justify-center">
          {/* Gallery Background Image */}
          <div className="absolute inset-0">
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('/Whisk_768036511c.jpg')`
              }}
            >
              {/* Strong overlay layers for maximum text readability */}
              <div className="absolute inset-0 bg-black/60"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"></div>
            </div>
          </div>

          {/* Content with Enhanced Readability */}
          <div className="relative z-10 text-center space-y-6 sm:space-y-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white drop-shadow-2xl leading-tight">
                <span className="block mb-2 sm:mb-4">Elena Rodriguez</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-[#d8a0fe] font-light drop-shadow-xl">
                Traditional Artist • Contemporary Vision
              </p>
              <div className="bg-black/50 backdrop-blur-md p-4 sm:p-6 lg:p-8 rounded-2xl border border-white/20 max-w-4xl mx-auto">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white leading-relaxed drop-shadow-lg">
                  Exploring the intersection of classical techniques and modern expression through oil paintings, watercolors, and mixed media works
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-4 sm:pt-6">
              <button 
                onClick={() => setShowLanding(false)}
                className="w-full sm:w-auto group relative px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-gradient-to-r from-[#7683d9] to-[#d8a0fe] rounded-full font-semibold text-sm sm:text-base lg:text-lg overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#7683d9]/25 min-w-[200px]"
              >
                <span className="relative z-10">Enter Gallery</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#d8a0fe] to-[#7683d9] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
              
              <button 
                onClick={() => {
                  setShowLanding(false);
                  setTimeout(() => scrollToSection('about'), 100);
                }}
                className="w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-3 sm:py-4 border-2 border-[#7683d9] bg-black/30 backdrop-blur-md rounded-full font-semibold text-sm sm:text-base lg:text-lg hover:border-[#d8a0fe] hover:text-[#d8a0fe] hover:bg-black/50 transition-all duration-500 hover:shadow-lg hover:shadow-[#7683d9]/20 min-w-[200px]"
              >
                About the Artist
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white">
      {/* Responsive Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrollY > 50 ? 'bg-slate-900/95 backdrop-blur-md border-b border-[#7683d9]/30 shadow-lg shadow-[#7683d9]/10' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-4">
            <div className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-[#7683d9] to-[#d8a0fe] bg-clip-text text-transparent">
              Elena Rodriguez
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-4 lg:space-x-8">
              <button onClick={() => scrollToSection('hero')} className="text-sm lg:text-base hover:text-[#d8a0fe] transition-colors duration-300 relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#7683d9] to-[#d8a0fe] group-hover:w-full transition-all duration-300"></span>
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-sm lg:text-base hover:text-[#d8a0fe] transition-colors duration-300 relative group">
                Gallery
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#7683d9] to-[#d8a0fe] group-hover:w-full transition-all duration-300"></span>
              </button>
              <button onClick={() => scrollToSection('about')} className="text-sm lg:text-base hover:text-[#d8a0fe] transition-colors duration-300 relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#7683d9] to-[#d8a0fe] group-hover:w-full transition-all duration-300"></span>
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-sm lg:text-base hover:text-[#d8a0fe] transition-colors duration-300 relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#7683d9] to-[#d8a0fe] group-hover:w-full transition-all duration-300"></span>
              </button>
            </div>

            {/* Mobile Navigation Toggle */}
            <button 
              className="md:hidden hover:text-[#d8a0fe] transition-colors duration-300 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-[#7683d9]/30 bg-slate-900/95 backdrop-blur-md">
              <div className="flex flex-col space-y-4 px-2">
                <button onClick={() => scrollToSection('hero')} className="text-left text-base hover:text-[#d8a0fe] transition-colors duration-300 py-2">Home</button>
                <button onClick={() => scrollToSection('gallery')} className="text-left text-base hover:text-[#d8a0fe] transition-colors duration-300 py-2">Gallery</button>
                <button onClick={() => scrollToSection('about')} className="text-left text-base hover:text-[#d8a0fe] transition-colors duration-300 py-2">About</button>
                <button onClick={() => scrollToSection('contact')} className="text-left text-base hover:text-[#d8a0fe] transition-colors duration-300 py-2">Contact</button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Banner Section with Gallery Background */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Gallery Background Image */}
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/Whisk_768036511c.jpg')`
            }}
          >
            {/* Multiple overlay layers for better text contrast */}
            <div className="absolute inset-0 bg-slate-900/70"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-slate-900/70"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-transparent to-slate-900/60"></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center space-y-6 sm:space-y-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="space-y-6 sm:space-y-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight text-white drop-shadow-2xl">
              <span className="block mb-2 sm:mb-4">Where <span className="bg-gradient-to-r from-[#7683d9] via-[#d8a0fe] to-[#7683d9] bg-clip-text text-transparent">Tradition</span></span>
              <span className="block">Meets <span className="bg-gradient-to-r from-[#d8a0fe] via-[#7683d9] to-[#d8a0fe] bg-clip-text text-transparent">Innovation</span></span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-[#d8a0fe] font-light drop-shadow-lg">
              Contemporary Traditional Artist
            </p>
            <div className="bg-slate-900/60 backdrop-blur-md p-4 sm:p-6 lg:p-8 rounded-2xl border border-white/20 max-w-4xl mx-auto">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white leading-relaxed drop-shadow-lg">
                Exploring the intersection of classical techniques and modern expression through oil paintings, watercolors, and mixed media works that capture the beauty of our natural world and human experience.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-4 sm:pt-6">
            <button 
              onClick={() => scrollToSection('gallery')}
              className="w-full sm:w-auto group relative px-6 sm:px-8 lg:px-10 py-3 sm:py-4 bg-gradient-to-r from-[#7683d9] to-[#d8a0fe] rounded-full font-semibold text-sm sm:text-base lg:text-lg overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#7683d9]/25 min-w-[200px]"
            >
              <span className="relative z-10">Explore Gallery</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#d8a0fe] to-[#7683d9] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-3 sm:py-4 border-2 border-[#7683d9] bg-white/10 backdrop-blur-md rounded-full font-semibold text-sm sm:text-base lg:text-lg hover:border-[#d8a0fe] hover:text-[#d8a0fe] hover:bg-white/20 transition-all duration-500 hover:shadow-lg hover:shadow-[#7683d9]/20 min-w-[200px]"
            >
              Commission Work
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-slate-900 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#7683d9] to-[#d8a0fe] bg-clip-text text-transparent">
              Gallery
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              A curated collection of works spanning various mediums and subjects, each piece telling its own unique story.
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-8 sm:mb-12">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-6 sm:mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-full font-medium text-xs sm:text-sm lg:text-base transition-all duration-500 hover:scale-105 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-[#7683d9] to-[#d8a0fe] text-white shadow-lg shadow-[#7683d9]/30'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-[#7683d9]/30 hover:border-[#d8a0fe]/50'
                  }`}
                >
                  <span className="hidden sm:inline">{category.name} ({category.count})</span>
                  <span className="sm:hidden">{category.name.split(' ')[0]} ({category.count})</span>
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex justify-center items-center gap-3 sm:gap-4">
              <span className="text-slate-300 text-sm sm:text-base">View:</span>
              <div className="flex bg-slate-800 rounded-lg p-1 border border-[#7683d9]/30">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 sm:p-3 rounded-md transition-all duration-300 ${
                    viewMode === 'grid' ? 'bg-gradient-to-r from-[#7683d9] to-[#d8a0fe] text-white shadow-lg' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <Grid size={16} className="sm:w-5 sm:h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 sm:p-3 rounded-md transition-all duration-300 ${
                    viewMode === 'list' ? 'bg-gradient-to-r from-[#7683d9] to-[#d8a0fe] text-white shadow-lg' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  <List size={16} className="sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Artworks Grid/List */}
          <div className={`${
            viewMode === 'grid' 
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8' 
              : 'space-y-4 sm:space-y-6 lg:space-y-8'
          }`}>
            {filteredArtworks.map((artwork, index) => (
              <div 
                key={artwork.id}
                className={`group cursor-pointer relative overflow-hidden rounded-xl sm:rounded-2xl bg-slate-800 border border-[#7683d9]/30 transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-[#7683d9]/20 hover:border-[#d8a0fe]/50 ${
                  viewMode === 'list' ? 'flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6' : ''
                }`}
                onClick={() => setSelectedArtwork(artwork)}
              >
                <div className={`relative overflow-hidden rounded-lg sm:rounded-xl ${
                  viewMode === 'list' ? 'w-full sm:w-48 lg:w-64 h-48 sm:h-36 lg:h-48 flex-shrink-0' : 'w-full h-48 sm:h-64 lg:h-80'
                }`}>
                  <img 
                    src={artwork.image} 
                    alt={artwork.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-gradient-to-r from-[#7683d9]/80 to-[#d8a0fe]/80 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full text-xs font-medium text-white border border-[#7683d9]/30">
                    {categories.find(c => c.id === artwork.category)?.name}
                  </div>
                </div>
                
                <div className={`${
                  viewMode === 'list' 
                    ? 'flex-1 flex flex-col justify-center' 
                    : 'absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500'
                }`}>
                  <h3 className={`font-bold mb-1 sm:mb-2 ${viewMode === 'list' ? 'text-lg sm:text-xl lg:text-2xl text-white' : 'text-base sm:text-lg lg:text-xl'}`}>
                    {artwork.title}
                  </h3>
                  <p className={`text-slate-300 text-xs sm:text-sm mb-1 ${viewMode === 'list' ? 'text-sm sm:text-base' : ''}`}>
                    {artwork.medium}
                  </p>
                  <p className={`text-slate-400 text-xs sm:text-sm mb-2 ${viewMode === 'list' ? 'text-sm sm:text-base' : ''}`}>
                    {artwork.dimensions} • {artwork.year}
                  </p>
                  {viewMode === 'list' && (
                    <p className="text-slate-300 mb-3 sm:mb-4 line-clamp-2 text-sm sm:text-base">{artwork.description}</p>
                  )}
                  <p className={`text-[#d8a0fe] font-semibold ${viewMode === 'list' ? 'text-lg sm:text-xl' : 'text-sm sm:text-base'}`}>
                    {artwork.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-indigo-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-[#7683d9] to-[#d8a0fe] bg-clip-text text-transparent">
                About Elena
              </h2>
              <div className="space-y-4 sm:space-y-6 text-slate-300">
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                  Elena Rodriguez is a contemporary traditional artist based in Santa Fe, New Mexico. With over 15 years of experience, she specializes in oil paintings, watercolors, and mixed media works that explore the relationship between humanity and nature.
                </p>
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                  Her work has been featured in galleries across the Southwest, and she has received numerous awards for her landscape and portrait paintings. Elena draws inspiration from the natural beauty of the American Southwest and the rich artistic traditions of her heritage.
                </p>
                <blockquote className="text-base sm:text-lg lg:text-xl italic text-[#d8a0fe] border-l-4 border-[#7683d9] pl-4 sm:pl-6 bg-slate-800/30 p-4 sm:p-6 rounded-r-xl">
                  "Art is a bridge between the seen and unseen, the known and unknown. Through my paintings, I aim to capture not just the physical beauty of our world, but the emotions and stories that lie beneath the surface."
                </blockquote>
              </div>
              
              <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 text-center">
                <div className="bg-gradient-to-br from-slate-800 to-indigo-800 p-3 sm:p-4 lg:p-6 rounded-xl border border-[#7683d9]/30 hover:border-[#d8a0fe]/50 transition-all duration-300 hover:scale-105">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#d8a0fe] mb-1 sm:mb-2">15+</div>
                  <div className="text-slate-300 text-xs sm:text-sm lg:text-base">Years Experience</div>
                </div>
                <div className="bg-gradient-to-br from-slate-800 to-indigo-800 p-3 sm:p-4 lg:p-6 rounded-xl border border-[#7683d9]/30 hover:border-[#d8a0fe]/50 transition-all duration-300 hover:scale-105">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#d8a0fe] mb-1 sm:mb-2">200+</div>
                  <div className="text-slate-300 text-xs sm:text-sm lg:text-base">Works Created</div>
                </div>
                <div className="bg-gradient-to-br from-slate-800 to-indigo-800 p-3 sm:p-4 lg:p-6 rounded-xl border border-[#7683d9]/30 hover:border-[#d8a0fe]/50 transition-all duration-300 hover:scale-105">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#d8a0fe] mb-1 sm:mb-2">50+</div>
                  <div className="text-slate-300 text-xs sm:text-sm lg:text-base">Exhibitions</div>
                </div>
              </div>
            </div>
            
            <div className="relative order-first lg:order-last">
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-[#7683d9]/30 hover:border-[#d8a0fe]/50 transition-all duration-500">
                <img 
                  src="/Whisk_d69af66ee5.jpg" 
                  alt="Elena Rodriguez working in her studio"
                  className="w-full h-64 sm:h-80 lg:h-[600px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              </div>
              <div className="absolute -bottom-3 sm:-bottom-6 -right-3 sm:-right-6 bg-gradient-to-r from-[#7683d9] to-[#d8a0fe] p-3 sm:p-4 lg:p-6 rounded-xl shadow-2xl border border-[#7683d9]/30 hover:scale-105 transition-transform duration-300 max-w-[200px] sm:max-w-none">
                <p className="text-white font-semibold text-xs sm:text-sm lg:text-base">Currently working on a new landscape series</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-slate-900 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#7683d9] to-[#d8a0fe] bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Interested in commissioning a piece or learning more about available works? I'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-center space-x-3 sm:space-x-4 group hover:scale-105 transition-transform duration-300">
                <div className="bg-gradient-to-r from-[#7683d9] to-[#d8a0fe] p-3 sm:p-4 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#7683d9]/20">
                  <Mail size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-base sm:text-lg text-white">Email</h3>
                  <p className="text-slate-300 text-sm sm:text-base">elena@elenarodriguezart.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 sm:space-x-4 group hover:scale-105 transition-transform duration-300">
                <div className="bg-gradient-to-r from-[#7683d9] to-[#d8a0fe] p-3 sm:p-4 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#7683d9]/20">
                  <Phone size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-base sm:text-lg text-white">Phone</h3>
                  <p className="text-slate-300 text-sm sm:text-base">(505) 555-0123</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 sm:space-x-4 group hover:scale-105 transition-transform duration-300">
                <div className="bg-gradient-to-r from-[#7683d9] to-[#d8a0fe] p-3 sm:p-4 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#7683d9]/20">
                  <MapPin size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-base sm:text-lg text-white">Studio</h3>
                  <p className="text-slate-300 text-sm sm:text-base">Santa Fe, New Mexico</p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-800 to-indigo-800 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-[#7683d9]/30 hover:border-[#d8a0fe]/50 transition-all duration-500">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 sm:mb-6 text-[#d8a0fe]">Commission Information</h3>
                <ul className="text-slate-300 space-y-2 sm:space-y-3 text-sm sm:text-base">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#d8a0fe] rounded-full flex-shrink-0"></div>
                    Custom portraits: Starting at $2,000
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#d8a0fe] rounded-full flex-shrink-0"></div>
                    Landscape commissions: Starting at $2,500
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#d8a0fe] rounded-full flex-shrink-0"></div>
                    Timeline: 6-10 weeks depending on size
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#d8a0fe] rounded-full flex-shrink-0"></div>
                    50% deposit required to begin
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-indigo-800 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-[#7683d9]/30 hover:border-[#d8a0fe]/50 transition-all duration-500">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 sm:mb-6 text-[#d8a0fe]">Send a Message</h3>
              <form className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-300">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-slate-700 border border-[#7683d9]/30 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white text-sm sm:text-base focus:ring-2 focus:ring-[#7683d9] focus:border-transparent transition-all duration-300 hover:border-[#d8a0fe]/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-300">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-slate-700 border border-[#7683d9]/30 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white text-sm sm:text-base focus:ring-2 focus:ring-[#7683d9] focus:border-transparent transition-all duration-300 hover:border-[#d8a0fe]/50"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-300">Subject</label>
                  <select className="w-full bg-slate-700 border border-[#7683d9]/30 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white text-sm sm:text-base focus:ring-2 focus:ring-[#7683d9] focus:border-transparent transition-all duration-300 hover:border-[#d8a0fe]/50">
                    <option>General Inquiry</option>
                    <option>Commission Request</option>
                    <option>Purchase Existing Work</option>
                    <option>Exhibition Opportunity</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-300">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-slate-700 border border-[#7683d9]/30 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white text-sm sm:text-base focus:ring-2 focus:ring-[#7683d9] focus:border-transparent transition-all duration-300 hover:border-[#d8a0fe]/50 resize-none"
                    placeholder="Tell me about your project or inquiry..."
                  />
                </div>
                <button className="w-full bg-gradient-to-r from-[#7683d9] to-[#d8a0fe] hover:from-[#d8a0fe] hover:to-[#7683d9] py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-[#7683d9]/30">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 sm:py-12 border-t border-[#7683d9]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-4 sm:mb-6">
            <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#7683d9] to-[#d8a0fe] bg-clip-text text-transparent mb-2">
              Elena Rodriguez
            </h3>
            <p className="text-slate-400 text-sm sm:text-base">Traditional Art • Contemporary Expression</p>
          </div>
          <p className="text-slate-500 text-xs sm:text-sm">
            © 2024 Elena Rodriguez. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Artwork Modal */}
      {selectedArtwork && (
        <div className="fixed inset-0 bg-slate-900/95 flex items-center justify-center z-50 p-2 sm:p-4 backdrop-blur-sm">
          <div className="max-w-7xl w-full max-h-full overflow-y-auto bg-gradient-to-br from-slate-800 to-indigo-800 rounded-xl sm:rounded-2xl border border-[#7683d9]/30 shadow-2xl shadow-[#7683d9]/20">
            <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-8">
              <div className="relative">
                <img 
                  src={selectedArtwork.image} 
                  alt={selectedArtwork.title}
                  className="w-full h-auto max-h-[300px] sm:max-h-[500px] lg:max-h-[700px] object-contain rounded-lg sm:rounded-xl border border-[#7683d9]/30"
                />
                
                {/* Navigation Arrows */}
                <button 
                  onClick={prevArtwork}
                  className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-[#7683d9]/80 to-[#d8a0fe]/80 hover:from-[#7683d9] hover:to-[#d8a0fe] p-2 sm:p-3 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110 border border-[#7683d9]/30 shadow-lg shadow-[#7683d9]/20"
                >
                  <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
                </button>
                <button 
                  onClick={nextArtwork}
                  className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-[#7683d9]/80 to-[#d8a0fe]/80 hover:from-[#7683d9] hover:to-[#d8a0fe] p-2 sm:p-3 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110 border border-[#7683d9]/30 shadow-lg shadow-[#7683d9]/20"
                >
                  <ChevronRight size={20} className="sm:w-6 sm:h-6" />
                </button>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r from-[#7683d9] to-[#d8a0fe] bg-clip-text text-transparent">
                      {selectedArtwork.title}
                    </h2>
                    <p className="text-slate-400 text-base sm:text-lg">{selectedArtwork.year}</p>
                  </div>
                  <button 
                    onClick={() => setSelectedArtwork(null)}
                    className="text-slate-400 hover:text-white transition-colors duration-300 p-2 hover:bg-slate-700 rounded-full"
                  >
                    <X size={20} className="sm:w-6 sm:h-6" />
                  </button>
                </div>
                
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    <span className="bg-gradient-to-r from-[#7683d9] to-[#d8a0fe] px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                      {selectedArtwork.medium}
                    </span>
                    <span className="bg-slate-700 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm border border-[#7683d9]/30">
                      {selectedArtwork.dimensions}
                    </span>
                    <span className="bg-slate-700 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm border border-[#7683d9]/30">
                      {categories.find(c => c.id === selectedArtwork.category)?.name}
                    </span>
                  </div>
                  
                  <p className="text-slate-300 leading-relaxed text-sm sm:text-base lg:text-lg">
                    {selectedArtwork.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-4 sm:pt-6 border-t border-[#7683d9]/30 gap-4">
                    <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#7683d9] to-[#d8a0fe] bg-clip-text text-transparent">
                      {selectedArtwork.price}
                    </span>
                    <button 
                      onClick={() => {
                        setSelectedArtwork(null);
                        scrollToSection('contact');
                      }}
                      className="w-full sm:w-auto bg-gradient-to-r from-[#7683d9] to-[#d8a0fe] hover:from-[#d8a0fe] hover:to-[#7683d9] px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-500 flex items-center justify-center gap-2 hover:scale-105 hover:shadow-lg hover:shadow-[#7683d9]/30"
                    >
                      Inquire <ExternalLink size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;