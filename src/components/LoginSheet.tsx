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
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="address" className="text-right">
              Address
            </Label>
            <Input
              id="address"
              value="123 main street"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="locationName" className="text-right">
              Business or location name
            </Label>
            <Input id="locationName" value="Location" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Submit restroom</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
