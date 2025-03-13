
import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface Category {
  value: string;
  label: string;
}

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
  onChange: (value: string) => void;
}

export default function CategoryFilter({
  categories,
  selectedCategory,
  onChange,
}: CategoryFilterProps) {
  const [open, setOpen] = useState(false);
  
  const selected = categories.find(
    (category) => category.value === selectedCategory
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between w-full md:w-[200px] capitalize transition-all duration-300 ease-out-expo"
        >
          {selected ? selected.label : "Select category..."}
          <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full md:w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search categories..." className="h-9" />
          <CommandList>
            <CommandEmpty>No category found.</CommandEmpty>
            <CommandGroup>
              {categories.map((category) => (
                <CommandItem
                  key={category.value}
                  value={category.value}
                  onSelect={(currentValue) => {
                    onChange(currentValue === selectedCategory ? "" : currentValue);
                    setOpen(false);
                  }}
                  className="capitalize"
                >
                  {category.label}
                  <Check
                    className={`ml-auto h-4 w-4 ${
                      selectedCategory === category.value ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
