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
import { Switch } from "./ui/switch";

export default function AddRestroomSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Add Restroom</Button>
      </SheetTrigger>
      <SheetContent side="top" className="container">
        <SheetHeader>
          <SheetTitle>Add Restroom</SheetTitle>
          <SheetDescription>
            Add a restroom here. Click save when you&apos;re done.
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
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="accessible" className="text-right">
              Accessible
            </Label>
            <Switch id="accessible" className="col-span-3" />
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
