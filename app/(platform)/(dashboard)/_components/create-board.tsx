"use client";

import { FormPopover } from "@/components/form/form-popover";
import { Button } from "@/components/ui/button";
import { useOrganization } from "@clerk/nextjs";

export const CreateBoardNavbar = () => {
  const { membership } = useOrganization();
  const isAdmin = membership?.role === "org:admin";
  return (
    isAdmin && (
      <FormPopover align="start" side="bottom" sideOffset={18}>
        <Button
          variant="primary"
          size="sm"
          className="rounded-sm hidden md:block h-auto  py-1.5 px-2"
        >
          Create
        </Button>
      </FormPopover>
    )
  );
};
