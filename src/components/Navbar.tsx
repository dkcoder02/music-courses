"use client";
import { cn } from "@/utils/cn";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import Link from "next/link";

export function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <Link href={"/"}>
                <MenuItem setActive={setActive} active={active} item="home"></MenuItem>
                </Link>
                <Link href={"/courses"}>
                    <MenuItem setActive={setActive} active={active} item="Our courses">
                        <div className="flex flex-col space-y-4 text-sm">
                            <HoveredLink href="/courses">All Courses</HoveredLink>
                            <HoveredLink href="/courses">Basic Music Theory</HoveredLink>
                            <HoveredLink href="/courses">Advanced Composition</HoveredLink>
                            <HoveredLink href="/courses">Songwriting</HoveredLink>
                            <HoveredLink href="/courses">Music Production</HoveredLink>
                        </div>
                    </MenuItem>
                </Link>
                <Link href={"/contact"}>
                    <MenuItem
                        setActive={setActive}
                        active={active}
                        item="Contact Us"
                    ></MenuItem>
                </Link>
            </Menu>
        </div>
    );
}
