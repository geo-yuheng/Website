/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/eh6sgvEmFal
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/
import Link from "next/link"
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300",
  {
    variants: {
      variant: {
        default: "bg-gray-900 text-gray-50 hover:bg-gray-900/90 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90",
        destructive:
          "bg-red-500 text-gray-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-gray-50 dark:hover:bg-red-900/90",
        outline:
          "border border-gray-200 bg-white hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50",
        secondary:
          "bg-gray-100 text-gray-900 hover:bg-gray-100/80 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-800/80",
        ghost: "hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-gray-50",
        link: "text-gray-900 underline-offset-4 hover:underline dark:text-gray-50",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:ring-offset-gray-950 dark:placeholder:text-gray-400 dark:focus-visible:ring-gray-300",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export default function Home() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-10 bg-white/80 backdrop-blur-sm transition-all group-hover:bg-white dark:bg-gray-900/80 dark:group-hover:bg-gray-900">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="#">
            <img
              alt="geo-yuheng logo"
              className="h-12"
              height="50"
              src="/placeholder.svg"
              style={{
                aspectRatio: "86/50",
                objectFit: "cover",
              }}
              width="86"
            />
          </Link>
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="relative">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Input
                className="w-64 bg-white px-8 py-2 text-sm leading-6 text-gray-700 shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-900 dark:text-gray-50 dark:focus:ring-gray-500 dark:focus:border-gray-500"
                placeholder="Search docs..."
                type="search"
              />
              <Button className="absolute right-2 top-2 rounded-full" size="icon" variant="ghost">
                <PlaneIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              </Button>
            </div>
            <div className="hidden sm:block">
              <nav className="flex items-center gap-4 sm:gap-6">
                <Link
                  className="text-sm font-medium transition-colors hover:text-gray-900 group-hover:font-bold dark:text-gray-400 dark:hover:text-gray-50 dark:group-hover:font-bold"
                  href="#"
                >
                  About
                </Link>
                <Link
                  className="text-sm font-medium transition-colors hover:text-gray-900 group-hover:font-bold dark:text-gray-400 dark:hover:text-gray-50 dark:group-hover:font-bold"
                  href="#"
                >
                  Download
                </Link>
                <Link
                  className="text-sm font-medium transition-colors hover:text-gray-900 group-hover:font-bold dark:text-gray-400 dark:hover:text-gray-50 dark:group-hover:font-bold"
                  href="#"
                >
                  Docs
                </Link>
              </nav>
            </div>
            <div className="flex items-center gap-4 sm:gap-6">
              <Button className="rounded-full" size="icon" variant="ghost">
                <MoonIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </Button>
              <Button className="rounded-full" size="icon" variant="ghost">
                <GlobeIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </Button>
              <Button className="rounded-full lg:hidden" size="icon" variant="ghost">
                <MenuIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
              </Button>
            </div>
          </div>
        </div>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-gray-900">
        <div className="container mx-auto flex flex-col items-start justify-center px-4 md:px-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="mb-8 lg:mb-0">
            <img
              alt="geo-yuheng logo"
              className="h-24"
              height="100"
              src="/placeholder.svg"
              style={{
                aspectRatio: "173/100",
                objectFit: "cover",
              }}
              width="173"
            />
          </div>
          <div className="text-left lg:text-right">
            <h1 className="text-4xl font-bold dark:text-gray-50">geo-yuheng</h1>
            <p className="text-lg text-gray-500 dark:text-gray-400">
              A library maintained by OSMChina for manipulating OSM data easily.
            </p>
            <div className="relative group mt-6">
              <input
                className="w-64 px-4 py-2 border border-gray-200 rounded-md text-sm leading-6 text-gray-700 border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-900 dark:text-gray-50 dark:border-gray-800 dark:focus:ring-gray-500 dark:focus:border-gray-500 dark:border-gray-800"
                readOnly
                type="text"
                value="npm install geo-yuheng"
              />
              <Button className="absolute right-0 top-0 rounded-full" size="icon" variant="ghost">
                <ClipboardIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
              </Button>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-gray-100 py-6 dark:bg-gray-900">
        <div className="container mx-auto flex flex-col items-center justify-between px-4 md:px-6 md:flex-row">
          <p className="text-sm text-gray-500 dark:text-gray-400">© 2024 OSMChina. All rights reserved.</p>
          <div className="flex items-center gap-4 sm:gap-6 mt-4 md:mt-0">
            <Link
              className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              <GithubIcon className="h-4 w-4 mr-1" />
              GitHub
            </Link>
            <Link
              className="text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              <TwitterIcon className="h-4 w-4 mr-1" />
              Twitter
            </Link>
            <span className="text-sm text-gray-500 dark:text-gray-400">MIT License</span>
          </div>
        </div>
      </footer>
      <div className="fixed inset-0 z-[-1] bg-[url(/placeholder.svg?height=1920&width=1080)] bg-cover bg-center animate-pan-bg" />
    </>
  );
}

function ClipboardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>
  )
}


function GithubIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}


function GlobeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MoonIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  )
}


function PlaneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
