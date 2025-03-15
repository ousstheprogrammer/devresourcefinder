
import { useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from "@/components/ui/chart";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, PieChart, Pie, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { 
  BarChart3Icon, 
  PieChartIcon, 
  TrendingUpIcon, 
  StarIcon,
  BookIcon,
  ToolIcon,
  FileTextIcon,
  UsersIcon,
  BriefcaseIcon,
  DatabaseIcon
} from "lucide-react";
import { motion } from "framer-motion";
import { professions } from "@/utils/constants"; 
import { 
  getMostUsedResourcesByProfession,
  getMostPopularResources,
  getResourcesByCategory,
  getResourcesByType,
  getResourcesByDifficulty,
  getResourcesByProfession
} from "@/utils/analyticsUtils";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d', '#ffc658', '#8dd1e1'];

const Analytics = () => {
  const [selectedProfession, setSelectedProfession] = useState(professions[0].value);

  const resourcesByCategory = getResourcesByCategory();
  const resourcesByType = getResourcesByType();
  const resourcesByDifficulty = getResourcesByDifficulty();
  const resourcesByProfession = getResourcesByProfession();
  const mostPopularResources = getMostPopularResources(10);
  const mostUsedResourcesBySelectedProfession = getMostUsedResourcesByProfession(selectedProfession, 10);

  // Chart animation config
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-grow">
        <section className="container-custom py-8 md:py-12">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-2">
              <BarChart3Icon className="h-8 w-8 text-primary" />
              Developer Resources Analytics
            </h1>
            <p className="text-muted-foreground text-lg">
              Insights into the most popular resources for developers across different professions
            </p>
          </motion.div>

          <motion.div 
            className="mt-8 space-y-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={item}>
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="mb-6">
                  <TabsTrigger value="overview" className="gap-2">
                    <TrendingUpIcon className="h-4 w-4" />
                    Overview
                  </TabsTrigger>
                  <TabsTrigger value="by-profession" className="gap-2">
                    <BriefcaseIcon className="h-4 w-4" />
                    By Profession
                  </TabsTrigger>
                  <TabsTrigger value="popular" className="gap-2">
                    <StarIcon className="h-4 w-4" />
                    Most Popular
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg font-medium flex items-center gap-2">
                          <BookIcon className="h-4 w-4 text-primary" />
                          Resources by Category
                        </CardTitle>
                        <CardDescription>Distribution across categories</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="h-[300px] flex items-center justify-center">
                          <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                              <Pie
                                data={resourcesByCategory}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                              >
                                {resourcesByCategory.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                              </Pie>
                              <Tooltip 
                                content={({ active, payload }) => {
                                  if (active && payload && payload.length) {
                                    return (
                                      <div className="bg-background p-2 border rounded shadow-lg">
                                        <p className="font-medium">{payload[0].name}</p>
                                        <p className="text-muted-foreground">Count: {payload[0].value}</p>
                                      </div>
                                    );
                                  }
                                  return null;
                                }}
                              />
                            </PieChart>
                          </ResponsiveContainer>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg font-medium flex items-center gap-2">
                          <ToolIcon className="h-4 w-4 text-primary" />
                          Resources by Type
                        </CardTitle>
                        <CardDescription>Free vs. paid distribution</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="h-[300px] flex items-center justify-center">
                          <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                              <Pie
                                data={resourcesByType}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                              >
                                {resourcesByType.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                              </Pie>
                              <Tooltip 
                                content={({ active, payload }) => {
                                  if (active && payload && payload.length) {
                                    return (
                                      <div className="bg-background p-2 border rounded shadow-lg">
                                        <p className="font-medium">{payload[0].name}</p>
                                        <p className="text-muted-foreground">Count: {payload[0].value}</p>
                                      </div>
                                    );
                                  }
                                  return null;
                                }}
                              />
                            </PieChart>
                          </ResponsiveContainer>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg font-medium flex items-center gap-2">
                          <FileTextIcon className="h-4 w-4 text-primary" />
                          Resources by Difficulty
                        </CardTitle>
                        <CardDescription>Difficulty level distribution</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="h-[300px] flex items-center justify-center">
                          <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                              <Pie
                                data={resourcesByDifficulty}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                              >
                                {resourcesByDifficulty.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                              </Pie>
                              <Tooltip 
                                content={({ active, payload }) => {
                                  if (active && payload && payload.length) {
                                    return (
                                      <div className="bg-background p-2 border rounded shadow-lg">
                                        <p className="font-medium">{payload[0].name}</p>
                                        <p className="text-muted-foreground">Count: {payload[0].value}</p>
                                      </div>
                                    );
                                  }
                                  return null;
                                }}
                              />
                            </PieChart>
                          </ResponsiveContainer>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg font-medium flex items-center gap-2">
                        <UsersIcon className="h-4 w-4 text-primary" />
                        Resources by Developer Profession
                      </CardTitle>
                      <CardDescription>Number of resources available for each profession</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[400px]">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart
                            data={resourcesByProfession}
                            margin={{
                              top: 20,
                              right: 30,
                              left: 20,
                              bottom: 60,
                            }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis 
                              dataKey="name" 
                              angle={-45} 
                              textAnchor="end"
                              height={70}
                              tick={{ fontSize: 12 }}
                            />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="value" fill="#8884d8">
                              {resourcesByProfession.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Bar>
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="by-profession" className="space-y-6">
                  <Card className="mb-6">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg font-medium flex items-center gap-2">
                          <BriefcaseIcon className="h-4 w-4 text-primary" />
                          Most Used Resources by Profession
                        </CardTitle>
                        <Select 
                          value={selectedProfession} 
                          onValueChange={setSelectedProfession}
                        >
                          <SelectTrigger className="w-[200px]">
                            <SelectValue placeholder="Select a profession" />
                          </SelectTrigger>
                          <SelectContent>
                            {professions.map((profession) => (
                              <SelectItem key={profession.value} value={profession.value}>
                                {profession.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <CardDescription>Top 10 most voted resources for the selected profession</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[400px]">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart
                            data={mostUsedResourcesBySelectedProfession}
                            layout="vertical"
                            margin={{
                              top: 5,
                              right: 30,
                              left: 150,
                              bottom: 5,
                            }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis type="number" />
                            <YAxis 
                              dataKey="title" 
                              type="category" 
                              width={150}
                              tick={{ fontSize: 12 }}
                            />
                            <Tooltip 
                              content={({ active, payload }) => {
                                if (active && payload && payload.length) {
                                  const data = payload[0].payload;
                                  return (
                                    <div className="bg-background p-3 border rounded shadow-lg max-w-xs">
                                      <p className="font-medium">{data.title}</p>
                                      <p className="text-muted-foreground text-xs mt-1">{data.description.substring(0, 100)}...</p>
                                      <div className="text-sm mt-2">
                                        <p>Category: {data.category}</p>
                                        <p>Type: {data.type}</p>
                                        <p>Votes: {data.votes}</p>
                                      </div>
                                    </div>
                                  );
                                }
                                return null;
                              }}
                            />
                            <Bar dataKey="votes" fill="#8884d8">
                              {mostUsedResourcesBySelectedProfession.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Bar>
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="popular" className="space-y-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg font-medium flex items-center gap-2">
                        <StarIcon className="h-4 w-4 text-primary" />
                        Most Popular Resources
                      </CardTitle>
                      <CardDescription>Top 10 most voted resources across all professions</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Rank</TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead className="text-right">Votes</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {mostPopularResources.map((resource, index) => (
                            <TableRow key={resource.id}>
                              <TableCell className="font-medium">{index + 1}</TableCell>
                              <TableCell>
                                <a 
                                  href={resource.url} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="text-primary hover:underline hover:text-primary/80 transition-colors"
                                >
                                  {resource.title}
                                </a>
                              </TableCell>
                              <TableCell>{resource.category}</TableCell>
                              <TableCell>{resource.type}</TableCell>
                              <TableCell className="text-right">{resource.votes}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg font-medium flex items-center gap-2">
                        <DatabaseIcon className="h-4 w-4 text-primary" />
                        Popular Resources Visualization
                      </CardTitle>
                      <CardDescription>Chart view of the most popular resources</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[400px]">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart
                            data={mostPopularResources}
                            margin={{
                              top: 5,
                              right: 30,
                              left: 20,
                              bottom: 60,
                            }}
                          >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis 
                              dataKey="title" 
                              angle={-45} 
                              textAnchor="end"
                              height={100}
                              tick={{ fontSize: 12 }}
                            />
                            <YAxis />
                            <Tooltip 
                              content={({ active, payload }) => {
                                if (active && payload && payload.length) {
                                  const data = payload[0].payload;
                                  return (
                                    <div className="bg-background p-3 border rounded shadow-lg max-w-xs">
                                      <p className="font-medium">{data.title}</p>
                                      <p className="text-muted-foreground text-xs mt-1">{data.description.substring(0, 100)}...</p>
                                      <div className="text-sm mt-2">
                                        <p>Category: {data.category}</p>
                                        <p>Type: {data.type}</p>
                                        <p>Difficulty: {data.difficulty}</p>
                                        <p>Votes: {data.votes}</p>
                                      </div>
                                    </div>
                                  );
                                }
                                return null;
                              }}
                            />
                            <Legend />
                            <Bar dataKey="votes" fill="#8884d8" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </motion.div>
          </motion.div>
        </section>
      </main>
      
      <motion.footer 
        className="border-t border-border/40 py-6 mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="container-custom text-center text-sm text-muted-foreground">
          <p>DevResourceFinder &copy; {new Date().getFullYear()}. All rights reserved.</p>
        </div>
      </motion.footer>
    </div>
  );
};

export default Analytics;
