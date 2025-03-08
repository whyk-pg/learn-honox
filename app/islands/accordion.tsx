import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemIndicator,
  AccordionItemTrigger,
  AccordionRoot,
} from "@ark-ui/react";
import { ChevronDownIcon } from "lucide-react";

export const Accordion = () => {
  return (
    <AccordionRoot defaultValue={["React"]} collapsible suppressHydrationWarning>
      {["React", "Solid", "Vue"].map((item) => (
        <AccordionItem key={item} value={item} suppressHydrationWarning>
          <AccordionItemTrigger suppressHydrationWarning>
            {item}
            <AccordionItemIndicator>
              <ChevronDownIcon />
            </AccordionItemIndicator>
          </AccordionItemTrigger>
          <AccordionItemContent suppressHydrationWarning>
            {item} is a JavaScript library for building user interfaces.
          </AccordionItemContent>
        </AccordionItem>
      ))}
    </AccordionRoot>
  );
}
