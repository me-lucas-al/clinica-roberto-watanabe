"use client";
import { Label } from "../ui/label";
import {
  Select,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectValue,
} from "../ui/select";
import { terapias } from "@/data/terapias";

export default function SelectTherapy() {
  return (
    <>
      <Label className="font-semibold" htmlFor="select">Terapia Desejada</Label>
      <Select>
        <SelectTrigger className="w-[200px] border border-tema5 text-tema5">
          <SelectValue placeholder="Selecione uma Terapia" />
        </SelectTrigger>
        <SelectContent className="border border-tema5 text-tema5 bg-fundo">
          <SelectGroup>
            <SelectLabel className="font-semibold text-sm">Terapias</SelectLabel>
            {terapias.map((terapia) => {
              return (
                <SelectItem key={terapia.id} value={terapia.id}>
                  {terapia.titulo}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
}
