"use client";

import { eventFormSchema } from "@/schema/events";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Switch } from "../ui/switch";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";
import { useTransition } from "react";
import Link from "next/link";
import { createEvent, deleteEvent, updateEvent } from "@/server/actions/events";
import { useRouter } from "next/navigation";

export default function EventForm({
  event,
}: {
  event?: {
    id: string;
    name: string;
    description?: string;
    durationInMinutes: number;
    isActive: boolean;
  };
}) {
  const [isDeletePending, startDeleteTransition] = useTransition();
  const router = useRouter();

  const form = useForm<z.infer<typeof eventFormSchema>>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: event
      ? { ...event }
      : {
          isActive: true,
          durationInMinutes: 30,
          description: "",
          name: "",
        },
  });

  async function onSubmit(values: z.infer<typeof eventFormSchema>) {
    const action =
      event == null ? createEvent : updateEvent.bind(null, event.id);
    try {
      await action(values);
      router.push("/events");
    } catch (error: any) {
      form.setError("root", {
        message: `There was an error saving your event: ${error.message}`,
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {form.formState.errors.root && (
          <div className="text-red-600 font-semibold">
            {form.formState.errors.root.message}
          </div>
        )}

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Event Name</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="border-2 border-black bg-white rounded-lg shadow px-4 py-2"
                />
              </FormControl>
              <FormDescription>
                The name users will see when booking
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="durationInMinutes"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Duration</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  {...field}
                  className="border-2 border-black bg-white rounded-lg shadow px-4 py-2"
                />
              </FormControl>
              <FormDescription>Length in minutes</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Description</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  className="border-2 border-black bg-white rounded-lg shadow px-4 py-2 resize-none h-32"
                />
              </FormControl>
              <FormDescription>This is optional.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="isActive"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center gap-3">
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    className="data-[state=checked]:bg-yellow-400"
                  />
                </FormControl>
                <FormLabel className="font-bold">Active</FormLabel>
              </div>
              <FormDescription>
                When inactive, users cannot book this event.
              </FormDescription>
            </FormItem>
          )}
        />

        <div className="flex gap-3 justify-end pt-3">
          {event && (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button
                  variant="neo"
                  disabled={isDeletePending || form.formState.isSubmitting}
                  className="border-2 bg-red-500 text-white border-black shadow-[3px_3px_0_0_#000]"
                >
                  Delete
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="border-4 border-black shadow-[6px_6px_0_0_#000]">
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will permanently delete your event.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className=" text-black border-2 border-black px-4 py-2 font-semibold transition-all duration-300 translate-x-[-4px] translate-y-[-4px] shadow-[4px_4px_0px_black] hover:translate-x-[-6px] hover:translate-y-[-6px] hover:shadow-[6px_6px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none rounded-md">
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction
                    className="bg-red-500 hover:bg-red-400 border-2 border-black px-4 py-2 font-semibold text-white transition-all duration-300 translate-x-[-4px] translate-y-[-4px] shadow-[4px_4px_0px_black] hover:translate-x-[-6px] hover:translate-y-[-6px] hover:shadow-[6px_6px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:shadow-none rounded-md"
                    disabled={isDeletePending || form.formState.isSubmitting}
                    onClick={() =>
                      startDeleteTransition(async () => {
                        try {
                          await deleteEvent(event.id);
                          router.push("/events");
                        } catch (error: any) {
                          form.setError("root", {
                            message: `There was an error deleting your event: ${error.message}`,
                          });
                        }
                      })
                    }
                  >
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}

          <Button
            type="button"
            asChild
            variant="neo"
            className="border-2 border-black shadow-[3px_3px_0_0_#000]"
          >
            <Link href="/events">Cancel</Link>
          </Button>

          <Button
            variant={"neo"}
            type="submit"
            disabled={form.formState.isSubmitting}
            className="bg-yellow-300 hover:bg-yellow-400 text-black border-2 border-black shadow-[4px_4px_0_0_#000]"
          >
            Save
          </Button>
        </div>
      </form>
    </Form>
  );
}
