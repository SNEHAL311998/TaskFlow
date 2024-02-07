"use client";

import { AuditLog } from "@prisma/client";
import { ActivityIcon } from "lucide-react";

import { Skeleton } from "@/components/ui/skeleton";
import { ActivityItem } from "@/components/activity-item";
import { Button } from "@/components/ui/button";
import { ElementRef, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { useUser } from "@clerk/nextjs";
import { AvatarFallback } from "@/components/ui/avatar";
import { TextEditor } from "@/components/text-editor";
import { useEventListener, useOnClickOutside } from "usehooks-ts";

interface ActivityProps {
  items: AuditLog[];
}

export const Activity = ({ items }: ActivityProps) => {
  // const [activity, setActivity] = useState(false);
  // const [commentText, setCommentText] = useState("");
  // const [isEditing, setIsEditing] = useState(false);
  // const formRef = useRef<ElementRef<"form">>(null);

  // const { user } = useUser();

  // const handleActivity = () => {
  //   setActivity(!activity);
  // };
  // const handleComment = (event: React.FormEvent) => {
  //   event.preventDefault();
  //   console.log("Comment Text:", commentText);
  // };
  // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setCommentText(event.target.value);
  // };

  return (
    <div className="flex items-start gap-x-3 w-full">
      <ActivityIcon className="h-5 w-5 mt-0.5 text-neutral-700" />
      <div className="w-full">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-neutral-700 mb-2">Activity</p>
          {/* <Button size="sm" variant="primary" onClick={() => handleActivity()}>
            Show Details
          </Button> */}
        </div>
        {/* {
          <form onSubmit={handleComment}>
            <div className="flex gap-2 items-start justify-between">
              <Avatar className="h-10 w-10 mt-3">
                <AvatarImage className="rounded-full" src={user?.imageUrl} />
                <AvatarFallback>{user?.fullName}</AvatarFallback>
              </Avatar>
              <Input
                className="my-3"
                placeholder="Write a comment"
                value={commentText}
                onChange={handleInputChange}
              />
            </div>
            {commentText && (
              <Button
                className="mb-3 ml-11"
                size="sm"
                variant="outline"
                type="submit"
              >
                Save
              </Button>
            )}
          </form>
        } */}

        <ol className="mt-2 space-y-4">
          {items.map((item) => (
            <ActivityItem key={item.id} data={item} />
          ))}
        </ol>
      </div>
    </div>
  );
};

Activity.Skeleton = function ActivitySkeleton() {
  return (
    <div className="flex items-start gap-x-3 w-full">
      <Skeleton className="h-6 w-6 bg-neutral-200" />
      <div className="w-full">
        <Skeleton className="w-24 h-6 mb-2 bg-neutral-200" />
        <Skeleton className="w-full h-10 bg-neutral-200" />
      </div>
    </div>
  );
};
