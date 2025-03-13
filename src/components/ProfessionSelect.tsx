
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

interface Profession {
  value: string;
  label: string;
}

interface ProfessionSelectProps {
  professions: Profession[];
  selectedProfession: string;
  onChange: (value: string) => void;
}

export default function ProfessionSelect({
  professions,
  selectedProfession,
  onChange,
}: ProfessionSelectProps) {
  const [open, setOpen] = useState(false);
  
  const selected = professions.find(
    (profession) => profession.value === selectedProfession
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="justify-between w-full md:w-[250px] capitalize transition-all duration-300 ease-out-expo"
        >
          {selected ? selected.label : "Select profession..."}
          <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full md:w-[250px] p-0">
        <Command>
          <CommandInput placeholder="Search professions..." className="h-9" />
          <CommandList>
            <CommandEmpty>No profession found.</CommandEmpty>
            <CommandGroup>
              {professions.map((profession) => (
                <CommandItem
                  key={profession.value}
                  value={profession.value}
                  onSelect={(currentValue) => {
                    onChange(currentValue);
                    setOpen(false);
                  }}
                  className="capitalize"
                >
                  {profession.label}
                  <Check
                    className={`ml-auto h-4 w-4 ${
                      selectedProfession === profession.value ? "opacity-100" : "opacity-0"
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
