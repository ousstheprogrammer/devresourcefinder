
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import ProfessionSelect from "@/components/ProfessionSelect";
import CategoryFilter from "@/components/CategoryFilter";
import ResourceCard from "@/components/ResourceCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, BarChart, PlusCircle, Sparkles } from "lucide-react";
import { professions, categories, filterResources, Resource } from "@/utils/data";
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious
} from "@/components/ui/pagination";

const Index = () => {
  const [selectedProfession, setSelectedProfession] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResources, setFilteredResources] = useState<Resource[]>([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const resourcesPerPage = 9;

  useEffect(() => {
    const results = filterResources(selectedProfession, selectedCategory, searchQuery);
    setFilteredResources(results);
    setCurrentPage(1); // Reset to first page when filters change
  }, [selectedProfession, selectedCategory, searchQuery]);

  // Calculate pagination values
  const indexOfLastResource = currentPage * resourcesPerPage;
  const indexOfFirstResource = indexOfLastResource - resourcesPerPage;
  const currentResources = filteredResources.slice(indexOfFirstResource, indexOfLastResource);
  const totalPages = Math.ceil(filteredResources.length / resourcesPerPage);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: document.getElementById('results-section')?.offsetTop || 0,
      behavior: 'smooth',
    });
  };

  // Generate page links
  const getPageLinks = () => {
    const pageLinks = [];
    
    // Always show first page
    pageLinks.push(
      <PaginationItem key="page-1">
        <PaginationLink 
          onClick={() => handlePageChange(1)} 
          isActive={currentPage === 1}
        >
          1
        </PaginationLink>
      </PaginationItem>
    );
    
    // Add ellipsis if needed
    if (currentPage > 3) {
      pageLinks.push(
        <PaginationItem key="ellipsis-1">
          <span className="flex h-9 w-9 items-center justify-center">...</span>
        </PaginationItem>
      );
    }
    
    // Add pages around current page
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      if (i > 1 && i < totalPages) {
        pageLinks.push(
          <PaginationItem key={`page-${i}`}>
            <PaginationLink 
              onClick={() => handlePageChange(i)} 
              isActive={currentPage === i}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
    }
    
    // Add ellipsis if needed
    if (currentPage < totalPages - 2) {
      pageLinks.push(
        <PaginationItem key="ellipsis-2">
          <span className="flex h-9 w-9 items-center justify-center">...</span>
        </PaginationItem>
      );
    }
    
    // Always show last page if we have more than 1 page
    if (totalPages > 1) {
      pageLinks.push(
        <PaginationItem key={`page-${totalPages}`}>
          <PaginationLink 
            onClick={() => handlePageChange(totalPages)} 
            isActive={currentPage === totalPages}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }
    
    return pageLinks;
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="container-custom py-16 md:py-24">
          <motion.div 
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold tracking-tight mb-6 flex items-center justify-center gap-2"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Sparkles className="h-8 w-8 text-primary animate-pulse-slow" />
              Discover the best resources for developers
            </motion.h1>
            <motion.p 
              className="text-lg text-muted-foreground mb-8 text-balance"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Find curated websites, tools, and platforms tailored to your profession and needs.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="max-w-3xl mx-auto mt-8 p-8 glass rounded-2xl border border-border/50 shadow-soft"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            whileHover={{ boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)" }}
          >
            <div className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4">
                <ProfessionSelect
                  professions={professions}
                  selectedProfession={selectedProfession}
                  onChange={setSelectedProfession}
                />
                <div className="relative flex-grow">
                  <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                    <Input
                      placeholder="Search resources..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onFocus={() => setIsSearchFocused(true)}
                      onBlur={() => setIsSearchFocused(false)}
                      className={`pl-10 w-full transition-all duration-300 ease-out-expo ${
                        isSearchFocused ? "ring-2 ring-primary/20" : ""
                      }`}
                    />
                  </motion.div>
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <div className="w-full sm:w-auto">
                  <CategoryFilter
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onChange={setSelectedCategory}
                  />
                </div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="ghost" className="ml-auto" size="sm">
                    <PlusCircle className="h-4 w-4 mr-2" />
                    Suggest Resource
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Results Section */}
        <section id="results-section" className="container-custom py-8 md:py-12">
          <div className="flex flex-col gap-6">
            <motion.div 
              className="flex items-center justify-between"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-2xl font-semibold">
                {filteredResources.length} {filteredResources.length === 1 ? "Resource" : "Resources"} Found
              </h2>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="sm" className="gap-2">
                  <BarChart className="h-4 w-4" />
                  <span>Sort</span>
                </Button>
              </motion.div>
            </motion.div>
            
            <AnimatePresence>
              {filteredResources.length > 0 ? (
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                  variants={container}
                  initial="hidden"
                  animate="show"
                  key="resource-list"
                >
                  {currentResources.map((resource) => (
                    <motion.div 
                      key={resource.id} 
                      variants={item}
                      layoutId={`resource-${resource.id}`}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    >
                      <ResourceCard
                        title={resource.title}
                        description={resource.description}
                        url={resource.url}
                        category={resource.category}
                        type={resource.type}
                        difficulty={resource.difficulty}
                        votes={resource.votes}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  className="text-center py-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  key="no-resources"
                >
                  <h3 className="text-lg font-medium mb-2">No resources found</h3>
                  <p className="text-muted-foreground">
                    Try adjusting your search or filters to find what you're looking for.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Pagination */}
            {filteredResources.length > 0 && totalPages > 1 && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-8"
              >
                <Pagination>
                  <PaginationContent>
                    {currentPage > 1 && (
                      <PaginationItem>
                        <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} />
                      </PaginationItem>
                    )}
                    
                    {getPageLinks()}
                    
                    {currentPage < totalPages && (
                      <PaginationItem>
                        <PaginationNext onClick={() => handlePageChange(currentPage + 1)} />
                      </PaginationItem>
                    )}
                  </PaginationContent>
                </Pagination>
              </motion.div>
            )}
          </div>
        </section>
      </main>
      
      <motion.footer 
        className="border-t border-border/40 py-6 mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="container-custom text-center text-sm text-muted-foreground">
          <p>oussRessourceFinder &copy; {new Date().getFullYear()}. All rights reserved.</p>
        </div>
      </motion.footer>
    </div>
  );
};

export default Index;
