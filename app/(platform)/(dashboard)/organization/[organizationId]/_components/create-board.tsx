"use client";

import { FormPopover } from "@/components/form/form-popover";
import { Hint } from "@/components/hint";
import { MAX_FREE_BOARDS } from "@/constants/boards";
import { useOrganization } from "@clerk/nextjs";
import { HelpCircle } from "lucide-react";

export const CreateBoard = ({
  isPro,
  availableCount,
}: {
  isPro: boolean;
  availableCount: number;
}) => {
  const { membership, isLoaded } = useOrganization();
  const isAdmin = membership?.role === "org:admin";
  return isAdmin ? (
    <FormPopover sideOffset={10} side="right">
      <div
        role="button"
        className="aspect-video relative h-full w-full bg-muted rounded-md flex flex-col gap-y-1 items-center justify-center hover:opacity-75 transition"
      >
        <p className="text-sm">Create new board</p>
        <span className="text-xs">
          {isPro
            ? "Unlimited"
            : `${MAX_FREE_BOARDS - availableCount} remaining`}
        </span>
        <Hint
          sideOffset={40}
          description={`
            Free Workspaces can have up to 5 open boards. For unlimited boards upgrade this workspace.
          `}
        >
          <HelpCircle className="absolute bottom-2 right-2 h-[14px] w-[14px]" />
        </Hint>
      </div>
    </FormPopover>
  ) : null;
};
