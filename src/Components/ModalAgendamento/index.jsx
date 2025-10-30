import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { DatePicker } from "./date-picker";
import SelectTherapy from "./select-therapy";
import ModalTextarea from "./textarea";

export function ModalAgendamento({ children }) {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent className="sm:max-w-[425px] bg-fundo text-tema2">
          <DialogHeader>
            <DialogTitle>Agendar Consulta</DialogTitle>
            <DialogDescription>
              Preencha os dados para agendar sua consulta.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-3 grid gap-4">
            <div className="grid gap-3">
              <Label className="font-semibold" htmlFor="name-1">Nome Completo</Label>
              <Input
                className="border border-tema5 text-tema5"

              id="name-1" name="name" defaultValue="Seu Nome Completo" />
            </div>
            <div className="grid gap-3">
              <Label className="font-semibold" htmlFor="email">E-mail</Label>
              <Input
                className="border border-tema5 text-tema5"
                id="email"
                name="email"
                defaultValue="SeuEmail@exemplo.com"
              />
            </div>
            <div className="grid gap-3">
              <Label className="font-semibold" htmlFor="phone">Telefone</Label>
              <Input
                className="border border-tema5 text-tema5"
                id="phone"
                name="phone"
                defaultValue="(00) 00000-0000"
              />
            </div>

            <SelectTherapy />
            <DatePicker />
            <ModalTextarea />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button className="cursor-pointer" variant="outline">Cancelar</Button>
            </DialogClose>
            <Button type="submit" className="cursor-pointer">Enviar </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
