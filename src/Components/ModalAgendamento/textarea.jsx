import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export default function ModalTextarea() {
  return (
    <>
      <div className="gap-3">
        <Label htmlFor="queixa" className="mb-2 font-semibold">
          Queixa
        </Label>
        <Textarea
          className="border border-tema5 text-tema5"
          id="queixa"
          name="queixa"
        />
      </div>
      <div className="gap-3">
        <Label className="mb-2 font-semibold" htmlFor="informacao">
          Alguma Informação Adicional
        </Label>
        <Textarea
          className="border border-tema5 text-tema5"
          id="informacao"
          name="informacao"
        />
      </div>
    </>
  );
}
