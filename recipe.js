// //Style 1


// <div className="mb-12">
//   <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
//     {categoryCircles.map((category) => (
//       <Link 
//         key={category.name} 
//         href={`/recipes/category/${category.name.toLowerCase()}`} 
//         className="group"
//       >
//         <div className="relative overflow-hidden bg-white rounded-md shadow-sm hover:shadow-md transition-shadow">
//           <div className="flex items-center p-3">
//             <div className="w-12 h-12 relative rounded-full overflow-hidden flex-shrink-0 border-2 border-stone-100">
//               <Image
//                 src={category.image}
//                 alt={category.name}
//                 fill
//                 className="object-cover"
//               />
//             </div>
//             <span className="ml-3 text-base font-medium group-hover:text-green-700 transition-colors">{category.name}</span>
//             <svg 
//               className="w-5 h-5 ml-3 text-gray-400 group-hover:text-green-700 transition-colors" 
//               fill="none" 
//               stroke="currentColor" 
//               viewBox="0 0 24 24" 
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </div>
//           <div className="h-1 w-0 bg-green-700 group-hover:w-full transition-all duration-300"></div>
//         </div>
//       </Link>
//     ))}
//   </div>
// </div>


// //style 2

// {/* Category display - Elegant ribbon design */}
// <div className="mb-16">
//   <div className="max-w-5xl mx-auto">
//     <div className="flex flex-wrap justify-center">
//       {categoryCircles.map((category, index) => (
//         <Link 
//           key={category.name} 
//           href={`/recipes/category/${category.name.toLowerCase()}`} 
//           className={`w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-2 group relative ${
//             index % 2 === 0 ? 'transform translate-y-4' : ''
//           }`}
//         >
//           <div className="relative bg-white shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
//             {/* Image container */}
//             <div className="h-32 relative">
//               <Image
//                 src={category.image}
//                 alt={category.name}
//                 fill
//                 className="object-cover"
//               />
              
//               {/* Ribbon design element */}
//               <div className="absolute -bottom-5 left-0 right-0 h-10 bg-white transform -skew-y-3"></div>
//             </div>
            
//             {/* Category name */}
//             <div className="py-3 px-2 text-center">
//               <h3 className="font-medium text-base group-hover:text-green-700 transition-colors">
//                 {category.name}
//               </h3>
//             </div>
            
//             {/* Bottom accent */}
//             <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-700 via-green-500 to-green-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            
//             {/* Corner decoration */}
//             <div className="absolute top-0 right-0 w-8 h-8 overflow-hidden">
//               <div className="absolute transform rotate-45 bg-green-700 text-white w-12 h-6 flex items-center justify-center -top-1 -right-4 text-xs font-bold">
//                 {index + 1}
//               </div>
//             </div>
//           </div>
//         </Link>
//       ))}
//     </div>
//   </div>
// </div>




// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import Image from 'next/image';
// import { ChevronRight } from 'lucide-react';

// const CategoryDisplay = () => {
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [isHovering, setIsHovering] = useState(false);

//   // Example categories - replace with your actual data
//   const categoryCircles = [
//     { name: "Breakfast", image: "/api/placeholder/500/500" },
//     { name: "Lunch", image: "/api/placeholder/500/500" },
//     { name: "Dinner", image: "/api/placeholder/500/500" },
//     { name: "Desserts", image: "/api/placeholder/500/500" },
//     { name: "Snacks", image: "/api/placeholder/500/500" },
//     { name: "Drinks", image: "/api/placeholder/500/500" },
//     { name: "Vegan", image: "/api/placeholder/500/500" },
//     { name: "Seafood", image: "/api/placeholder/500/500" }
//   ];

//   // Hexagon layout positions
//   const hexPositions = [
//     { top: "0%", left: "25%" },
//     { top: "0%", left: "50%" },
//     { top: "0%", left: "75%" },
//     { top: "25%", left: "12.5%" },
//     { top: "25%", left: "37.5%" },
//     { top: "25%", left: "62.5%" },
//     { top: "25%", left: "87.5%" },
//     { top: "50%", left: "25%" },
//     { top: "50%", left: "50%" },
//     { top: "50%", left: "75%" },
//     { top: "75%", left: "12.5%" },
//     { top: "75%", left: "37.5%" },
//     { top: "75%", left: "62.5%" },
//     { top: "75%", left: "87.5%" }
//   ];

//   // Assign positions to each category
//   const positionedCategories = categoryCircles.map((category, index) => ({
//     ...category,
//     position: hexPositions[index % hexPositions.length]
//   }));

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: { opacity: 1, scale: 1 }
//   };

//   return (
//     <div className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
//       <div className="max-w-6xl mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Explore Our <span className="text-green-600">Categories</span></h2>
        
//         {/* Desktop Layout - Hexagonal Grid */}
//         <div className="hidden lg:block relative h-screen max-h-[800px]">
//           <motion.div
//             className="absolute inset-0"
//             initial="hidden"
//             animate="visible"
//             variants={containerVariants}
//           >
//             {positionedCategories.map((category, index) => (
//               <motion.div
//                 key={category.name}
//                 className="absolute"
//                 style={{
//                   top: category.position.top,
//                   left: category.position.left,
//                   transform: "translate(-50%, -50%)"
//                 }}
//                 variants={itemVariants}
//                 whileHover={{ scale: 1.1, zIndex: 50 }}
//               >
//                 <Link
//                   href={`/recipes/category/${category.name.toLowerCase()}`}
//                   className="block"
//                   onMouseEnter={() => {
//                     setSelectedCategory(category.name);
//                     setIsHovering(true);
//                   }}
//                   onMouseLeave={() => {
//                     setIsHovering(false);
//                   }}
//                 >
//                   <div className="w-40 h-40 relative">
//                     {/* Hexagon shape with clip-path */}
//                     <div className="w-full h-full overflow-hidden" style={{
//                       clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)"
//                     }}>
//                       <Image
//                         src={category.image}
//                         alt={category.name}
//                         fill
//                         className="object-cover transition-transform duration-700 hover:scale-110"
//                       />
                      
//                       {/* Colored overlay */}
//                       <div className="absolute inset-0 bg-gradient-to-br from-green-500/70 to-blue-500/70 opacity-0 hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
//                         <span className="text-white font-bold text-lg">{category.name}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </Link>
//               </motion.div>
//             ))}
//           </motion.div>
          
//           {/* Highlighted category description */}
//           <motion.div 
//             className="absolute right-0 bottom-0 max-w-sm bg-white p-6 rounded-lg shadow-lg"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ 
//               opacity: isHovering ? 1 : 0, 
//               y: isHovering ? 0 : 20,
//               transition: { duration: 0.3 }
//             }}
//           >
//             {selectedCategory && (
//               <>
//                 <h3 className="text-xl font-bold text-gray-800 mb-2">{selectedCategory}</h3>
//                 <p className="text-gray-600 mb-4">Discover amazing {selectedCategory.toLowerCase()} recipes crafted by our chefs.</p>
//                 <div className="flex items-center text-green-600 font-medium">
//                   <span>Explore now</span>
//                   <ChevronRight className="ml-1 w-4 h-4" />
//                 </div>
//               </>
//             )}
//           </motion.div>
//         </div>
        
//         {/* Mobile & Tablet Layout - Staggered Grid with Card Flips */}
//         <div className="lg:hidden">
//           <motion.div 
//             className="grid grid-cols-2 md:grid-cols-3 gap-6"
//             initial="hidden"
//             animate="visible"
//             variants={containerVariants}
//           >
//             {categoryCircles.map((category, index) => (
//               <motion.div 
//                 key={category.name}
//                 className={`${index % 3 === 1 ? 'mt-8' : ''}`}
//                 variants={itemVariants}
//               >
//                 <Link href={`/recipes/category/${category.name.toLowerCase()}`}>
//                   <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
//                     <div className="relative h-40 md:h-48">
//                       <Image
//                         src={category.image}
//                         alt={category.name}
//                         fill
//                         className="object-cover"
//                       />
                      
//                       {/* Diagonal slice overlay */}
//                       <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 via-blue-500/0 to-green-500/70"></div>
                      
//                       {/* Category icon */}
//                       <div className="absolute bottom-0 right-0 bg-white p-2 rounded-tl-xl">
//                         <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
//                           <ChevronRight className="w-4 h-4 text-green-600" />
//                         </div>
//                       </div>
//                     </div>
                    
//                     <div className="p-4">
//                       <h3 className="font-semibold text-lg text-gray-800">{category.name}</h3>
//                       <div className="mt-2 w-12 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full"></div>
//                     </div>
//                   </div>
//                 </Link>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoryDisplay;



// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// const CategoryDisplay = () => {
//   const [activeIndex, setActiveIndex] = useState(null);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isInteracting, setIsInteracting] = useState(false);
  
//   // Example categories - replace with your actual data
//   const categories = [
//     { name: "Breakfast", image: "/api/placeholder/500/500", color: "#FF7E5F" },
//     { name: "Lunch", image: "/api/placeholder/500/500", color: "#FEBF63" }, 
//     { name: "Dinner", image: "/api/placeholder/500/500", color: "#6A7FDB" },
//     { name: "Desserts", image: "/api/placeholder/500/500", color: "#F083BA" },
//     { name: "Snacks", image: "/api/placeholder/500/500", color: "#7DDF64" },
//     { name: "Drinks", image: "/api/placeholder/500/500", color: "#02C39A" },
//     { name: "Vegan", image: "/api/placeholder/500/500", color: "#645DD7" },
//     { name: "Seafood", image: "/api/placeholder/500/500", color: "#3BCEAC" }
//   ];

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);

//   // Custom cursor effect
//   const cursorStyle = {
//     left: `${mousePosition.x}px`,
//     top: `${mousePosition.y}px`,
//     transform: isInteracting ? 'translate(-50%, -50%) scale(1.5)' : 'translate(-50%, -50%) scale(1)',
//     background: activeIndex !== null ? categories[activeIndex].color : '#ffffff',
//   };

//   return (
//     <div className="relative min-h-screen bg-black text-white overflow-hidden py-12">
//       {/* Custom cursor */}
//       <div 
//         className="fixed w-6 h-6 rounded-full mix-blend-exclusion pointer-events-none z-50 transition-all duration-300"
//         style={cursorStyle}
//       />
      
//       {/* Artistic background elements */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(15,15,15,1)_0%,_rgba(0,0,0,1)_70%)]"></div>
        
//         {/* Dynamic accent elements */}
//         {categories.map((category, index) => (
//           <div 
//             key={`accent-${index}`}
//             className="absolute rounded-full blur-3xl opacity-20 transition-all duration-1000"
//             style={{
//               width: '40vw',
//               height: '40vw',
//               background: category.color,
//               top: `${Math.sin(index * 0.8) * 50 + 50}%`,
//               left: `${Math.cos(index * 0.8) * 50 + 50}%`,
//               transform: `translate(-50%, -50%) scale(${activeIndex === index ? 1.5 : 0.8})`,
//               opacity: activeIndex === index ? 0.3 : 0.1,
//             }}
//           />
//         ))}
//       </div>

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         <h2 className="text-6xl font-black mb-16 tracking-tighter">
//           <span className="relative inline-block">
//             Culinary
//             <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-indigo-500"></span>
//           </span>
//           <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"> Universe</span>
//         </h2>

//         {/* Main Unique Layout */}
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-0">
//           {categories.map((category, index) => {
//             // Calculate dynamic positioning
//             const row = Math.floor(index / 4);
//             const col = index % 4;
//             const isOdd = row % 2 === 1;
            
//             // Complex grid spanning calculations
//             const colStart = isOdd ? 9 - (col * 3) : 1 + (col * 3);
//             const colSpan = 3;
//             const rowOffset = Math.floor(index / 2) % 2 === 0 ? 0 : 2;
            
//             return (
//               <div 
//                 key={category.name}
//                 className="md:col-span-3 relative group"
//                 style={{
//                   gridColumnStart: colStart,
//                   gridColumnEnd: `span ${colSpan}`,
//                   transform: `translateY(${rowOffset}rem)`,
//                   zIndex: activeIndex === index ? 20 : 10,
//                 }}
//                 onMouseEnter={() => {
//                   setActiveIndex(index);
//                   setIsInteracting(true);
//                 }}
//                 onMouseLeave={() => {
//                   setActiveIndex(null);
//                   setIsInteracting(false);
//                 }}
//               >
//                 <Link href={`/recipes/category/${category.name.toLowerCase()}`}>
//                   <div 
//                     className="aspect-square overflow-hidden relative rounded-2xl transition-all duration-700 ease-out"
//                     style={{
//                       transformStyle: 'preserve-3d',
//                       transform: activeIndex === index ? 'scale(1.1) rotateY(5deg) rotateX(5deg)' : 'scale(1) rotateY(0) rotateX(0)',
//                       boxShadow: activeIndex === index ? `0 25px 50px -12px ${category.color}50` : 'none',
//                     }}
//                   >
//                     {/* Image Container */}
//                     <div className="absolute inset-0 overflow-hidden">
//                       <Image
//                         src={category.image}
//                         alt={category.name}
//                         fill
//                         className="object-cover transition-transform duration-1000"
//                         style={{
//                           transform: activeIndex === index ? 'scale(1.1)' : 'scale(1.02)',
//                           filter: activeIndex === index ? 'brightness(0.7)' : 'brightness(0.4)',
//                         }}
//                       />
//                     </div>
                    
//                     {/* Dynamic border */}
//                     <div 
//                       className="absolute inset-0 border-2 rounded-2xl transition-all duration-700"
//                       style={{
//                         borderColor: category.color,
//                         opacity: activeIndex === index ? 1 : 0,
//                       }}
//                     />
                    
//                     {/* Content overlay */}
//                     <div className="absolute inset-0 p-6 flex flex-col justify-between transition-all duration-500">
//                       {/* Category Name */}
//                       <h3 
//                         className="text-3xl font-bold tracking-tight"
//                         style={{
//                           transform: activeIndex === index ? 'translateY(0)' : 'translateY(1rem)',
//                           opacity: activeIndex === index ? 1 : 0.7,
//                           textShadow: `0 2px 10px rgba(0,0,0,0.5)`,
//                           transition: 'transform 0.5s ease, opacity 0.5s ease',
//                         }}
//                       >
//                         {category.name}
//                       </h3>
                      
//                       {/* Interactive elements */}
//                       <div 
//                         className="flex items-center space-x-2 transition-all duration-700"
//                         style={{
//                           transform: activeIndex === index ? 'translateY(0) translateX(0)' : 'translateY(1rem) translateX(-1rem)',
//                           opacity: activeIndex === index ? 1 : 0,
//                         }}
//                       >
//                         <div 
//                           className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500"
//                           style={{ background: category.color }}
//                         >
//                           <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                           </svg>
//                         </div>
//                         <span className="text-sm font-medium">Explore</span>
//                       </div>
//                     </div>
                    
//                     {/* Corner accent */}
//                     <div 
//                       className="absolute -bottom-2 -right-2 w-16 h-16 transition-all duration-500"
//                       style={{
//                         clipPath: 'polygon(100% 0, 0% 100%, 100% 100%)',
//                         background: category.color,
//                         opacity: activeIndex === index ? 0.9 : 0.5,
//                         transform: activeIndex === index ? 'scale(1.2)' : 'scale(1)',
//                       }}
//                     />
//                   </div>
//                 </Link>
//               </div>
//             );
//           })}
//         </div>
        
//         {/* Category Description Tooltip */}
//         <div 
//           className="fixed bottom-8 right-8 max-w-xs bg-black/60 backdrop-blur-xl p-6 rounded-xl border border-white/10 transition-all duration-500"
//           style={{
//             opacity: activeIndex !== null ? 1 : 0,
//             transform: activeIndex !== null ? 'translateY(0)' : 'translateY(20px)',
//             pointerEvents: activeIndex !== null ? 'auto' : 'none',
//             borderColor: activeIndex !== null ? categories[activeIndex]?.color : 'transparent',
//           }}
//         >
//           {activeIndex !== null && (
//             <>
//               <h4 className="text-xl font-bold mb-2">{categories[activeIndex].name}</h4>
//               <p className="text-sm text-gray-300 mb-4">Explore extraordinary {categories[activeIndex].name.toLowerCase()} recipes that will transform your culinary experience.</p>
//               <div className="w-full h-1 rounded-full" style={{ background: categories[activeIndex].color }}></div>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoryDisplay;

// import { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// const CategoryDisplay = () => {
//   const [activeCategory, setActiveCategory] = useState(null);
  
//   // Example categories - replace with your actual data
//   const categories = [
//     { name: "Breakfast", image: "/api/placeholder/500/500", emoji: "🍳" },
//     { name: "Lunch", image: "/api/placeholder/500/500", emoji: "🥪" },
//     { name: "Dinner", image: "/api/placeholder/500/500", emoji: "🍲" },
//     { name: "Desserts", image: "/api/placeholder/500/500", emoji: "🍰" },
//     { name: "Drinks", image: "/api/placeholder/500/500", emoji: "🍹" },
//   ];

//   return (
//     <div className="py-10 bg-gray-50">
//       <div className="max-w-4xl mx-auto px-4">
//         <h3 className="text-center text-xl font-medium text-gray-700 mb-8">
//           Explore Our <span className="text-orange-500">Categories</span>
//         </h3>
        
//         <div className="relative flex justify-center">
//           {/* Central circle */}
//           <div className="w-32 h-32 rounded-full bg-white shadow-lg flex items-center justify-center z-10 relative">
//             <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-orange-200 p-1">
//               <div className="w-full h-full rounded-full bg-orange-50 flex items-center justify-center">
//                 <span className="text-3xl">
//                   {activeCategory ? categories.find(c => c.name === activeCategory)?.emoji : "👨‍🍳"}
//                 </span>
//               </div>
//             </div>
//           </div>
          
//           {/* Orbital categories */}
//           <div className="absolute w-full h-full pointer-events-none">
//             {categories.map((category, index) => {
//               // Calculate position in a circle
//               const angle = (index * (360 / categories.length)) * (Math.PI / 180);
//               const radius = 140; // Distance from center
//               const x = Math.cos(angle) * radius;
//               const y = Math.sin(angle) * radius;
              
//               // Visual indicator of active state
//               const isActive = activeCategory === category.name;
              
//               return (
//                 <div
//                   key={category.name}
//                   className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto"
//                   style={{
//                     transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
//                   }}
//                 >
//                   <Link href={`/recipes/category/${category.name.toLowerCase()}`}>
//                     <div 
//                       className="group relative"
//                       onMouseEnter={() => setActiveCategory(category.name)}
//                       onMouseLeave={() => setActiveCategory(null)}
//                     >
//                       <div 
//                         className={`w-20 h-20 rounded-full overflow-hidden transition-all duration-300 shadow-md ${isActive ? 'scale-110 shadow-xl' : 'scale-100'}`}
//                       >
//                         <Image
//                           src={category.image}
//                           alt={category.name}
//                           fill
//                           className="object-cover"
//                         />
                        
//                         {/* Overlay */}
//                         <div className={`absolute inset-0 bg-gradient-to-br transition-opacity duration-300 ${isActive ? 'from-orange-500/80 to-red-500/80' : 'from-orange-500/60 to-red-500/60 opacity-0 group-hover:opacity-100'}`}>
//                           <div className="absolute inset-0 flex items-center justify-center">
//                             <span className="text-xl">{category.emoji}</span>
//                           </div>
//                         </div>
//                       </div>
                      
//                       {/* Category name */}
//                       <div 
//                         className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-sm font-medium transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
//                       >
//                         <span className="relative px-2 py-1">
//                           {category.name}
//                           <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
//                         </span>
//                       </div>
                      
//                       {/* Connection line */}
//                       <div 
//                         className={`absolute top-1/2 left-1/2 w-[140px] h-0.5 bg-orange-200 origin-left -z-10 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}
//                         style={{
//                           transform: `translate(-50%, -50%) rotate(${angle * (180 / Math.PI)}deg) translateX(-${radius/2}px)`,
//                         }}
//                       />
//                     </div>
//                   </Link>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
        
//         {/* Current category description */}
//         <div className="mt-16 text-center h-12">
//           {activeCategory && (
//             <p className="text-gray-600 animate-fadeIn">
//               Discover our <span className="font-medium text-orange-500">{activeCategory}</span> recipes carefully crafted for your enjoyment.
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategoryDisplay;


import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Sample data for demonstration
const sampleCategories = [
  { name: "Breakfast", image: "/images/breakfast.jpg", count: 24 },
  { name: "Lunch", image: "/images/lunch.jpg", count: 18 },
  { name: "Dinner", image: "/images/dinner.jpg", count: 32 },
  { name: "Desserts", image: "/images/desserts.jpg", count: 15 },
  { name: "Vegan", image: "/images/vegan.jpg", count: 20 },
  { name: "Seafood", image: "/images/seafood.jpg", count: 12 }
];

export default function RecipeCategories({ categories = sampleCategories }) {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  return (
    <div className="py-8 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {categories.map((category) => (
          <Link 
            key={category.name} 
            href={`/recipes/category/${category.name.toLowerCase()}`}
            className="block"
            onMouseEnter={() => setHoveredCategory(category.name)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <div className="relative overflow-hidden bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 h-48">
              {/* Image Background */}
              <div className="absolute inset-0">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out"
                  style={{
                    transform: hoveredCategory === category.name ? 'scale(1.05)' : 'scale(1)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 flex justify-between items-end">
                <div>
                  <h3 className="text-xl font-medium text-white">{category.name}</h3>
                  <span className="text-sm text-gray-200">{category.count} recipes</span>
                </div>
                <div className={`flex items-center justify-center w-8 h-8  
                  ${hoveredCategory === category.name ? 'bg-orange-500' : 'bg-white/30 backdrop-blur-sm'}
                  rounded-full transition-all duration-300`}>
                  <svg 
                    className={`w-4 h-4 ${hoveredCategory === category.name ? 'text-white' : 'text-white'}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              
              {/* Accent line */}
              <div className={`absolute bottom-0 left-0 h-1 bg-orange-500 transition-all duration-500 
                ${hoveredCategory === category.name ? 'w-full' : 'w-0'}`}></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}