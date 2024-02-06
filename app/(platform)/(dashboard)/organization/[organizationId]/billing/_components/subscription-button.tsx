"use client";

import { toast } from "sonner";

import { useAction } from "@/hooks/use-action";
import { Button } from "@/components/ui/button";
import { stripeRedirect } from "@/actions/stripe-redirect";
import { useProModal } from "@/hooks/use-pro-modal";
import { useOrganization } from "@clerk/nextjs";
import { Skeleton } from "@/components/ui/skeleton";

interface SubscriptionButtonProps {
  isPro: boolean;
}

export const SubscriptionButton = ({ isPro }: SubscriptionButtonProps) => {
  const proModal = useProModal();
  let isAdmin: boolean = false;

  const { membership, isLoaded } = useOrganization();

  isAdmin = membership?.role === "org:admin";

  const { execute, isLoading } = useAction(stripeRedirect, {
    onSuccess: (data) => {
      window.location.href = data;
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  const onClick = () => {
    if (isPro) {
      execute({});
    } else {
      proModal.onOpen();
    }
  };

  return isAdmin ? (
    <Button variant="primary" onClick={onClick} disabled={isLoading}>
      {isPro ? "Manage subscription" : "Upgrade to pro"}
    </Button>
  ) : isLoaded ? (
    <h1>You dont have Permission</h1>
  ) : (
    <Skeleton className="w-60 absolute h-10" />
  );
};
