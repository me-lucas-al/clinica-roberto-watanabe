import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import { faqData } from '../../data/faq'

export default function FAQ() {
  return (
    <section id="questions" className="py-20 px-5 sm:px-10 max-w-5xl mx-auto">
      <h2 className="text-3xl sm:text-4xl mb-10 text-tema2 font-semibold text-center">
        Perguntas Frequentes
      </h2>

      <Accordion type="single" collapsible className="w-full space-y-5">
        {faqData.map((item) => (
          <AccordionItem
            key={item.id}
            value={item.id}
            className="border border-tema rounded-lg p-5 bg-tema3 hover:bg-tema3/90 transition-all duration-300 text-white data-[state=open]:bg-tema3/90"
          >
            <AccordionTrigger className="text-left cursor-pointer font-semibold text-base sm:text-lg data-[state=open]:text-tema transition-colors py-0 hover:no-underline">
              {item.pergunta}
            </AccordionTrigger>
            <AccordionContent className="mt-3 text-white text-sm sm:text-base leading-relaxed">
              {item.resposta}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}