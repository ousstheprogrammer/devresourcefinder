
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Header from '@/components/Header';

// Programming languages data
const programmingLanguages = [
  {
    id: 1,
    name: "JavaScript",
    year: 1995,
    creator: "Brendan Eich",
    paradigm: "Multi-paradigm: event-driven, functional, imperative",
    description: "JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.",
    useCases: ["Web Development", "Server-side Applications (Node.js)", "Mobile Apps (React Native)", "Desktop Apps (Electron)"],
    popularity: "Very High",
    imageUrl: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: 2,
    name: "Python",
    year: 1991,
    creator: "Guido van Rossum",
    paradigm: "Multi-paradigm: object-oriented, imperative, functional, procedural, reflective",
    description: "Python is an interpreted, high-level and general-purpose programming language. Python's design philosophy emphasizes code readability with its notable use of significant whitespace.",
    useCases: ["Web Development (Django, Flask)", "Data Science", "Machine Learning", "Automation", "Scientific Computing"],
    popularity: "Very High",
    imageUrl: "https://images.unsplash.com/photo-1649180556628-9ba704115795?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: 3,
    name: "Java",
    year: 1995,
    creator: "James Gosling at Sun Microsystems",
    paradigm: "Multi-paradigm: generic, object-oriented, imperative",
    description: "Java is a class-based, object-oriented programming language designed to have as few implementation dependencies as possible. It is a general-purpose programming language intended to let application developers write once, run anywhere.",
    useCases: ["Enterprise Applications", "Android Development", "Web Applications", "Big Data Processing", "Financial Services"],
    popularity: "High",
    imageUrl: "https://images.unsplash.com/photo-1588239034647-25783cbfcfc1?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: 4,
    name: "C++",
    year: 1985,
    creator: "Bjarne Stroustrup",
    paradigm: "Multi-paradigm: procedural, functional, object-oriented, generic",
    description: "C++ is a general-purpose programming language created as an extension of the C programming language. C++ was designed with a bias toward system programming and embedded, resource-constrained software and large systems.",
    useCases: ["Game Development", "High-performance Applications", "Operating Systems", "Embedded Systems", "Financial Systems"],
    popularity: "Medium-High",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: 5,
    name: "C#",
    year: 2000,
    creator: "Microsoft (Anders Hejlsberg)",
    paradigm: "Multi-paradigm: structured, imperative, object-oriented, event-driven, functional, generic",
    description: "C# is a general-purpose, multi-paradigm programming language encompassing strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented, and component-oriented programming disciplines.",
    useCases: ["Windows Applications", "Game Development (Unity)", "Web Applications (.NET)", "Enterprise Applications", "Mobile Development (Xamarin)"],
    popularity: "High",
    imageUrl: "https://images.unsplash.com/photo-1599507593362-50fa53ed1b40?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: 6,
    name: "Ruby",
    year: 1995,
    creator: "Yukihiro Matsumoto",
    paradigm: "Multi-paradigm: object-oriented, imperative, functional, reflective",
    description: "Ruby is an interpreted, high-level, general-purpose programming language. It supports multiple programming paradigms and has a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.",
    useCases: ["Web Development (Ruby on Rails)", "Automation", "DevOps (Chef)", "Data Processing", "Web Scraping"],
    popularity: "Medium",
    imageUrl: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: 7,
    name: "Go",
    year: 2009,
    creator: "Google (Robert Griesemer, Rob Pike, Ken Thompson)",
    paradigm: "Multi-paradigm: concurrent, imperative, structural",
    description: "Go, also known as Golang, is a statically typed, compiled programming language designed at Google. It is syntactically similar to C, but with memory safety, garbage collection, structural typing, and CSP-style concurrency.",
    useCases: ["Cloud Services", "Microservices", "Web Development", "DevOps", "Network Programming"],
    popularity: "High and Rising",
    imageUrl: "https://images.unsplash.com/photo-1600267204091-5c1ab8b10c02?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: 8,
    name: "Swift",
    year: 2014,
    creator: "Apple Inc. (Chris Lattner)",
    paradigm: "Multi-paradigm: protocol-oriented, object-oriented, functional, imperative, block structured",
    description: "Swift is a general-purpose, multi-paradigm, compiled programming language developed by Apple Inc. for iOS, macOS, watchOS, tvOS, and Linux. Swift is designed to work with Apple's Cocoa and Cocoa Touch frameworks.",
    useCases: ["iOS and macOS Development", "Server-side Applications", "Systems Programming", "Mobile Apps"],
    popularity: "Medium-High",
    imageUrl: "https://images.unsplash.com/photo-1544984243-ec57ea33b527?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: 9,
    name: "PHP",
    year: 1994,
    creator: "Rasmus Lerdorf",
    paradigm: "Multi-paradigm: imperative, functional, object-oriented, procedural, reflective",
    description: "PHP is a popular general-purpose scripting language especially suited to web development. It was originally created by Rasmus Lerdorf in 1994. The PHP reference implementation is now produced by The PHP Group.",
    useCases: ["Web Development", "Content Management Systems (WordPress)", "E-commerce (Magento)", "Server-side Scripting"],
    popularity: "Medium-High",
    imageUrl: "https://images.unsplash.com/photo-1599507593362-50fa53ed1b40?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: 10,
    name: "Rust",
    year: 2010,
    creator: "Mozilla Research (Graydon Hoare)",
    paradigm: "Multi-paradigm: concurrent, functional, generic, imperative, structured",
    description: "Rust is a multi-paradigm programming language designed for performance and safety, especially safe concurrency. Rust is syntactically similar to C++, but is designed to provide better memory safety while maintaining high performance.",
    useCases: ["Systems Programming", "WebAssembly", "Game Development", "Operating Systems", "Browser Components"],
    popularity: "Medium and Rising",
    imageUrl: "https://images.unsplash.com/photo-1600267204091-5c1ab8b10c02?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: 11,
    name: "TypeScript",
    year: 2012,
    creator: "Microsoft (Anders Hejlsberg)",
    paradigm: "Multi-paradigm: object-oriented, functional, generic",
    description: "TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript, and adds optional static typing to the language. TypeScript is designed for development of large applications.",
    useCases: ["Web Applications", "Large-scale JavaScript Projects", "Angular Development", "Enterprise Applications"],
    popularity: "High and Rising",
    imageUrl: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: 12,
    name: "Kotlin",
    year: 2011,
    creator: "JetBrains",
    paradigm: "Multi-paradigm: object-oriented, functional, imperative, concurrent, declarative",
    description: "Kotlin is a cross-platform, statically typed, general-purpose programming language with type inference. Kotlin is designed to interoperate fully with Java, and the JVM version of Kotlin's standard library depends on the Java Class Library.",
    useCases: ["Android Development", "Server-side Development", "Web Development", "Data Science", "Multiplatform Mobile"],
    popularity: "Medium-High and Rising",
    imageUrl: "https://images.unsplash.com/photo-1588239034647-25783cbfcfc1?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: 13,
    name: "R",
    year: 1993,
    creator: "Ross Ihaka and Robert Gentleman",
    paradigm: "Multi-paradigm: procedural, object-oriented, functional, reflective",
    description: "R is a programming language and free software environment for statistical computing and graphics. It is widely used among statisticians and data miners for developing statistical software and data analysis.",
    useCases: ["Statistical Analysis", "Data Science", "Data Visualization", "Machine Learning", "Research"],
    popularity: "Medium",
    imageUrl: "https://images.unsplash.com/photo-1600267204091-5c1ab8b10c02?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: 14,
    name: "Scala",
    year: 2004,
    creator: "Martin Odersky",
    paradigm: "Multi-paradigm: functional, concurrent, imperative, object-oriented",
    description: "Scala is a strong statically typed general-purpose programming language which supports both object-oriented programming and functional programming. Designed to be concise, many of Scala's design decisions are aimed to address criticisms of Java.",
    useCases: ["Big Data Processing (Apache Spark)", "Web Development", "Data Engineering", "Distributed Systems", "Enterprise Applications"],
    popularity: "Medium",
    imageUrl: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: 15,
    name: "C",
    year: 1972,
    creator: "Dennis Ritchie at Bell Labs",
    paradigm: "Imperative, procedural, structural",
    description: "C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system. By design, C provides constructs that map efficiently to typical machine instructions.",
    useCases: ["Operating Systems", "Embedded Systems", "Device Drivers", "System Software", "High-Performance Computing"],
    popularity: "Medium-High",
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: 16,
    name: "Dart",
    year: 2011,
    creator: "Google",
    paradigm: "Multi-paradigm: object-oriented, imperative, functional, reflective",
    description: "Dart is a client-optimized programming language for apps on multiple platforms. It is developed by Google and is used to build mobile, desktop, server, and web applications. Dart is an object-oriented, class-based, garbage-collected language with C-style syntax.",
    useCases: ["Mobile Development (Flutter)", "Web Applications", "Server-side Applications", "IoT Devices"],
    popularity: "Medium and Rising",
    imageUrl: "https://images.unsplash.com/photo-1600267204091-5c1ab8b10c02?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: 17,
    name: "MATLAB",
    year: 1984,
    creator: "MathWorks",
    paradigm: "Multi-paradigm: array, object-oriented, imperative, structured, functional, procedural, reflective",
    description: "MATLAB is a programming language and numeric computing environment developed by MathWorks. MATLAB allows matrix manipulations, plotting of functions and data, implementation of algorithms, creation of user interfaces, and interfacing with programs written in other languages.",
    useCases: ["Scientific Research", "Engineering", "Financial Modeling", "Control Systems", "Signal Processing"],
    popularity: "Medium (in specific domains)",
    imageUrl: "https://images.unsplash.com/photo-1599507593362-50fa53ed1b40?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: 18,
    name: "Perl",
    year: 1987,
    creator: "Larry Wall",
    paradigm: "Multi-paradigm: procedural, object-oriented, functional, reflective, imperative",
    description: "Perl is a family of high-level, general-purpose, interpreted, dynamic programming languages. Perl was originally developed by Larry Wall in 1987 as a general-purpose Unix scripting language to make report processing easier.",
    useCases: ["Text Processing", "System Administration", "Web Development", "Network Programming", "Bioinformatics"],
    popularity: "Low-Medium",
    imageUrl: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: 19,
    name: "Haskell",
    year: 1990,
    creator: "Committee (led by Simon Peyton Jones)",
    paradigm: "Functional, pure, lazy, statically typed",
    description: "Haskell is a statically typed, purely functional programming language with type inference and lazy evaluation. It is designed for teaching, research, and industrial applications. Haskell features a type system with Hindley–Milner type inference and lazy evaluation.",
    useCases: ["Financial Analysis", "Compiler Design", "Academic Research", "Web Services", "Concurrent Programming"],
    popularity: "Low-Medium (niche)",
    imageUrl: "https://images.unsplash.com/photo-1600267204091-5c1ab8b10c02?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: 20,
    name: "Elixir",
    year: 2011,
    creator: "José Valim",
    paradigm: "Functional, concurrent, distributed",
    description: "Elixir is a functional, concurrent, general-purpose programming language that runs on the BEAM virtual machine used to implement the Erlang programming language. Elixir builds on top of Erlang and shares the same abstractions for building distributed, fault-tolerant applications.",
    useCases: ["Web Development (Phoenix Framework)", "Distributed Systems", "Real-time Systems", "IoT", "Embedded Software"],
    popularity: "Low-Medium and Rising",
    imageUrl: "https://images.unsplash.com/photo-1600267204091-5c1ab8b10c02?auto=format&fit=crop&q=80&w=300"
  }
];

const ProgrammingLanguages = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredLanguages = programmingLanguages.filter(lang => 
    lang.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lang.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto py-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">Programming Languages</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Explore detailed information about 20 popular programming languages, their history, use cases, and more.
          </p>
          
          {/* Search box */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            <Input 
              type="text" 
              placeholder="Search for a language..." 
              className="pl-10 pr-4 py-2"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Languages grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {filteredLanguages.map((language) => (
            <Card key={language.id} className="overflow-hidden h-full">
              <div className="aspect-video overflow-hidden bg-muted">
                <img 
                  src={language.imageUrl} 
                  alt={language.name} 
                  className="w-full h-full object-cover transition-all hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>{language.name}</span> 
                  <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">{language.year}</span>
                </CardTitle>
                <CardDescription>Created by {language.creator}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-1">Paradigm</h4>
                  <p className="text-sm text-muted-foreground">{language.paradigm}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Description</h4>
                  <p className="text-sm text-muted-foreground">{language.description}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Use Cases</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground">
                    {language.useCases.map((useCase, index) => (
                      <li key={index}>{useCase}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Popularity: {language.popularity}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {filteredLanguages.length === 0 && (
          <div className="text-center py-10">
            <p className="text-muted-foreground">No programming languages found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgrammingLanguages;
