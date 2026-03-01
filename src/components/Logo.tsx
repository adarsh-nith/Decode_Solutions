import { cn } from "../utils/cn";
import logo from "../assets/decode-logo.png";
// import logo from "./decode_logo.jpeg";

// export {logo};

export function Logo({ className }: { className?: string }) {
  return (
    <img
      src={logo}
      alt="Decode Solutions logo"
      className={cn("h-10 w-auto", className)}
    />
  );
}
