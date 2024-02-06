import { checkSubscription } from "@/lib/subscription";
import { Separator } from "@/components/ui/separator";

import { SubscriptionButton } from "./_components/subscription-button";

import { Info } from "../_components/info";

const BillingPage = async () => {
  const isPro = await checkSubscription();
  // getRole();

  return (
    <div className="w-full">
      <Info isPro={isPro} />
      <Separator className="my-2" />
      <SubscriptionButton isPro={isPro} />
    </div>
  );
};

// const getRole = () => {
//   // "use client";
//   const { membershipList, membership } = useOrganization({
//     membershipList: {},
//   });

//   console.log(membership?.role);
// };
export default BillingPage;
