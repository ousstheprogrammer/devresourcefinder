
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import ProfessionSelect from "@/components/ProfessionSelect";
import CategoryFilter from "@/components/CategoryFilter";
import ResourceCard from "@/components/ResourceCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, BarChart, PlusCircle } from "lucide-react";
import { professions, categories, filterResources, Resource } from "@/utils/data";
import { motion } from 'framer-motion';

const Index = () => {
  const [selectedProfession, setSelectedProfession] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredResources, setFilteredResources] = useState<Resource[]>([]);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  useEffect(() => {
    const results = filterResources(selectedProfession, selectedCategory, searchQuery);
    setFilteredResources(results);
  }, [selectedProfession, selectedCategory, searchQuery]);

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
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Discover the best resources for developers
            </h1>
            <p className="text-lg text-muted-foreground mb-8 text-balance">
              Find curated websites, tools, and platforms tailored to your profession and needs.
            </p>
          </motion.div>
          
          <motion.div 
            className="max-w-3xl mx-auto mt-8 p-8 glass rounded-2xl border border-border/50 shadow-soft"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <div className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4">
                <ProfessionSelect
                  professions={professions}
                  selectedProfession={selectedProfession}
                  onChange={setSelectedProfession}
                />
                <div className="relative flex-grow">
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
                <Button variant="ghost" className="ml-auto" size="sm">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Suggest Resource
                </Button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Results Section */}
        <section className="container-custom py-8 md:py-12">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">
                {filteredResources.length} {filteredResources.length === 1 ? "Resource" : "Resources"} Found
              </h2>
              <Button variant="outline" size="sm" className="gap-2">
                <BarChart className="h-4 w-4" />
                <span>Sort</span>
              </Button>
            </div>
            
            {filteredResources.length > 0 ? (
              <motion.div 
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={container}
                initial="hidden"
                animate="show"
              >
                {filteredResources.map((resource) => (
                  <motion.div key={resource.id} variants={item}>
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
              <div className="text-center py-12">
                <h3 className="text-lg font-medium mb-2">No resources found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filters to find what you're looking for.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <footer className="border-t border-border/40 py-6 mt-12">
        <div className="container-custom text-center text-sm text-muted-foreground">
          <p>DevResourceFinder &copy; {new Date().getFullYear()}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
