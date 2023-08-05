import { SignIn } from "@clerk/nextjs";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import { A } from "./ui/typography";

export default function SigninSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <A href="">Sign in</A>
      </SheetTrigger>
      <SheetContent side="top" className="sm:container">
        <div className="grid place-items-center">
          <SignIn />
        </div>
      </SheetContent>
    </Sheet>
  );
}
