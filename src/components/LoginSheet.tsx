import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "./ui/sheet";
import { A } from "./ui/typography";

export default function SigninSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <A href="">Sign in</A>
      </SheetTrigger>
      <SheetContent side="top" className="container">
        <SheetHeader>
          <SheetTitle>Sign in</SheetTitle>
          <SheetDescription>
            Signing in is required to add, update, or rate restrooms.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <Button className="bg-purple-700">
            <span className="mr-1 text-lg font-black">G </span> Sign in with
            Google
          </Button>
          <Button className="bg-sky-700">
            <span className="mr-1 text-lg font-black">f </span> Sign in with
            Facebook
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
