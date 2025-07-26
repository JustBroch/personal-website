import { Menu } from "lucide-react";
import JB from "../assets/jb_logo_black.png";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

interface MenuItem {
    title: string;
    url: string;
    description?: string;
    icon?: React.ReactNode;
    items?: MenuItem[];
}

interface Navbar1Props {
    logo?: {
        url: string;
        src: string;
        alt: string;
        title: string;
    };
    menu?: MenuItem[];
}

const Navbar1 = ({
    logo = {
        url: "https://www.shadcnblocks.com",
        src: JB,
        alt: "logo",
        title: "",
    },
    menu = [
        { title: "Home", url: "/" },
        { title: "About", url: "/#about" },
        { title: "Projects", url: "/projects" },
        { title: "Experience", url: "/careers" },
    ],
}: Navbar1Props) => {
    return (
        <section className="py-4">
            <div className="container">
                {/* Desktop Menu */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <a href={logo.url} className="flex items-center gap-2">
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                className="h-8 w-auto"
                            />
                            {logo.title && (
                                <span className="text-xl font-bold">
                                    {logo.title}
                                </span>
                            )}
                        </a>

                        <NavigationMenu>
                            <NavigationMenuList>
                                {menu.map((item, index) => (
                                    <NavigationMenuItem key={index}>
                                        {item.items ? (
                                            <>
                                                <NavigationMenuTrigger>
                                                    {item.title}
                                                </NavigationMenuTrigger>
                                                <NavigationMenuContent>
                                                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                                        {item.items.map(
                                                            (
                                                                subItem,
                                                                subIndex
                                                            ) => (
                                                                <li
                                                                    key={
                                                                        subIndex
                                                                    }
                                                                >
                                                                    <NavigationMenuLink
                                                                        asChild
                                                                    >
                                                                        <a
                                                                            href={
                                                                                subItem.url
                                                                            }
                                                                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                                                        >
                                                                            <div className="flex items-center gap-2">
                                                                                {
                                                                                    subItem.icon
                                                                                }
                                                                                <div className="text-sm font-medium leading-none">
                                                                                    {
                                                                                        subItem.title
                                                                                    }
                                                                                </div>
                                                                            </div>
                                                                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                                                                {
                                                                                    subItem.description
                                                                                }
                                                                            </p>
                                                                        </a>
                                                                    </NavigationMenuLink>
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                </NavigationMenuContent>
                                            </>
                                        ) : (
                                            <NavigationMenuLink asChild>
                                                <a
                                                    href={item.url}
                                                    className="group inline-flex h-12 w-max items-center justify-center rounded-md bg-background px-6 py-3 text-base font-semibold transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                                                >
                                                    {item.title}
                                                </a>
                                            </NavigationMenuLink>
                                        )}
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    <div className="flex items-center gap-4">
                        <Button asChild>
                            <a href="/contact">Get in touch</a>
                        </Button>

                        {/* Mobile Menu */}
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="lg:hidden"
                                >
                                    <Menu className="h-4 w-4" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right">
                                <SheetHeader>
                                    <SheetTitle>Menu</SheetTitle>
                                </SheetHeader>
                                <div className="mt-8">
                                    <Accordion type="single" collapsible>
                                        {menu.map((item, index) => (
                                            <AccordionItem
                                                key={index}
                                                value={`item-${index}`}
                                            >
                                                {item.items ? (
                                                    <>
                                                        <AccordionTrigger className="text-left">
                                                            {item.title}
                                                        </AccordionTrigger>
                                                        <AccordionContent>
                                                            <div className="flex flex-col gap-2">
                                                                {item.items.map(
                                                                    (
                                                                        subItem,
                                                                        subIndex
                                                                    ) => (
                                                                        <a
                                                                            key={
                                                                                subIndex
                                                                            }
                                                                            href={
                                                                                subItem.url
                                                                            }
                                                                            className="flex items-center gap-2 rounded-md p-3 text-base hover:bg-accent"
                                                                        >
                                                                            {
                                                                                subItem.icon
                                                                            }
                                                                            <div>
                                                                                <div className="font-medium">
                                                                                    {
                                                                                        subItem.title
                                                                                    }
                                                                                </div>
                                                                                {subItem.description && (
                                                                                    <p className="text-xs text-muted-foreground">
                                                                                        {
                                                                                            subItem.description
                                                                                        }
                                                                                    </p>
                                                                                )}
                                                                            </div>
                                                                        </a>
                                                                    )
                                                                )}
                                                            </div>
                                                        </AccordionContent>
                                                    </>
                                                ) : (
                                                    <a
                                                        href={item.url}
                                                        className="flex items-center justify-between rounded-md p-3 text-base font-medium hover:bg-accent"
                                                    >
                                                        {item.title}
                                                    </a>
                                                )}
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Navbar1 };
