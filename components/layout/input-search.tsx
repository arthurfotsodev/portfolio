"use client";

import { Search } from "lucide-react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
import { Kbd } from "../ui/kbd";
import React from "react";
import { useSearchShortcut } from "@/hook/use-search-shortcut";

export default function SearchBar() {
  const [isVisible, setIsVisible] = React.useState(false);

  const toggle = React.useCallback(() => setIsVisible((prev) => !prev), []);
  const close = React.useCallback(() => setIsVisible(false), []);

  useSearchShortcut(toggle, close);

  return (
    <div className="w-full max-w-xs">
      <InputGroup
        onClick={() => setIsVisible(true)}
        className="has-[[data-slot=input-group-control]:focus-visible]:ring-0"
      >
        <InputGroupInput
          readOnly
          placeholder="Search..."
          className="cursor-default caret-transparent"
        />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
        <InputGroupAddon align="inline-end">
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
        </InputGroupAddon>
      </InputGroup>

      {isVisible && (
        <div
          onClick={() => setIsVisible(false)}
          className="fixed inset-0 z-50 flex justify-center bg-black/20 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full h-1/2 mt-20 max-w-md rounded-lg border mb-10 bg-popover p-2 shadow-lg"
          >
            <SearchBox />
          </div>
        </div>
      )}
    </div>
  );
}

function SearchBox() {
  return (
    <div className="flex justify-center flex-col space-x-2">
      <InputGroup>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
      </InputGroup>
      <div className="text-sm text-muted-foreground py-2">
        Results will be displayed here.
      </div>
    </div>
  );
}
