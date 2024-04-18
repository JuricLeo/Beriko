"use client";

import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { FiFacebook } from "react-icons/fi";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function EmailForm() {
  const formSchema = z.object({
    name: z
      .string()
      .min(2, "Ime mora biti duže od 2 slova.")
      .max(50, "Ime mora biti kraće od 50 slova."),
    surname: z
      .string()
      .min(2, "Prezime mora biti duže od 2 slova.")
      .max(50, "Prezime mora biti kraće od 50 slova."),
    email: z
      .string()
      .min(2, "Unesite email")
      .max(100, "Email mora biti kraći od 100 znakova."),
    phone: z
      .number()
      .min(2, "Broj telefona mora biti duži od 2 broja.")
      .max(50, "Broj telefona mora biti kraći od 50 brojeva."),
    message: z
      .string()
      .min(2, "Poruka mora biti duža od 2 znaka.")
      .max(500, "Poruka mora biti kraća od 500 znakova."),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      phone: undefined,
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return { form, onSubmit };
}

export default function Contact() {
  const { form, onSubmit } = EmailForm();

  return (
    <section className="relative py-12 sm:py-24 lg:py-10 px-3 md:px-10 lg:px-24 bg-gradient-to-b from-primary/30 to-primary/60 h-[78rem] sm:h-[64rem] lg:h-[45rem]">
      <div className="bg-primary flex-col lg:hidden top-0 text-white w-[70%] h-[21rem] mt-10 absolute z-10 shadow-md p-8 mx-auto left-0 right-0">
        <h2 className="text-2xl text-center font-semibold">Kontakt Info</h2>
        <div className="mt-6 space-y-4">
          <div className="flex items-center md:items-top">
            <MapPin className="mr-6 w-9 h-9 sm:w-4 sm:h-4" />
            <p>HR-48362 KLOŠTAR PODRAVSKI, Sjepana Radića 2</p>
          </div>
          <div className="flex items-center">
            <Mail className="mr-6 w-4 h-4" />
            <p>beriko@beriko.com</p>
          </div>
          <div className="flex items-center">
            <Phone className="mr-6 w-4 h-4" />
            <p>+385 98 64 62 60</p>
          </div>
        </div>
        <div className="flex justify-center mt-8 space-x-4">
          <Link
            href="#"
            className="rounded-md p-4 bg-newWhite text-newBlack hover:opacity-75 duration-300"
          >
            <FiFacebook size={10} />
          </Link>
          <Link
            href="#"
            className="rounded-md p-4 bg-newWhite text-newBlack hover:opacity-75 duration-300"
          >
            <FaXTwitter size={10} />
          </Link>
          <Link
            href="#"
            className="rounded-md p-4 bg-newWhite text-newBlack hover:opacity-75 duration-300"
          >
            <IoLogoInstagram size={10} />
          </Link>
        </div>
      </div>
      {/* big screen */}
      <div className="bg-primary hidden lg:block text-white w-[25rem] h-[30rem] lg:mt-10 absolute z-10 shadow-md p-8">
        <h2 className="text-2xl font-semibold">Kontakt Info</h2>
        <div className="mt-16 space-y-8">
          <div className="flex items-top">
            <MapPin className="mr-6 w-11 h-11" />
            <p>HR-48362 KLOŠTAR PODRAVSKI, Sjepana Radića 2</p>
          </div>
          <div className="flex items-center">
            <Mail className="mr-6 w-8 h-8" />
            <p>beriko@beriko.com</p>
          </div>
          <div className="flex items-center">
            <Phone className="mr-6 w-8 h-8" />
            <p>+385 98 64 62 60</p>
          </div>
        </div>
        <div className="flex justify-start mt-16 space-x-4">
          <Link
            href="#"
            className="rounded-md p-4 bg-newWhite text-newBlack hover:opacity-75 duration-300"
          >
            <FiFacebook size={16} />
          </Link>
          <Link
            href="#"
            className="rounded-md p-4 bg-newWhite text-newBlack hover:opacity-75 duration-300"
          >
            <FaXTwitter size={16} />
          </Link>
          <Link
            href="#"
            className="rounded-md p-4 bg-newWhite text-newBlack hover:opacity-75 duration-300"
          >
            <IoLogoInstagram size={16} />
          </Link>
        </div>
      </div>
      <div className="bg-white w-full lg:w-[80%] pb-16 lg:ml-48 relative shadow-md mt-72 sm:mt-60 lg:mt-0">
        <div className="lg:ml-60 ml-8 pt-16">
          <h1 className="text-2xl text-center mr-10 sm:mr-0 sm:text-left font-semibold">
            Pošaljite nam upit!
          </h1>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col"
            >
              <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 mt-8">
                <div className="flex flex-col flex-1 pr-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary text-xs">
                          Ime
                        </FormLabel>
                        <FormControl className="border-b border-newBlack py-2">
                          <Input placeholder="Bernard" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col flex-1 pr-8">
                  <FormField
                    control={form.control}
                    name="surname"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary text-xs">
                          Prezime
                        </FormLabel>
                        <FormControl className="border-b border-newBlack py-2">
                          <Input placeholder="Domović" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 mt-8">
                <div className="flex flex-col flex-1 pr-8">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary text-xs">
                          Email
                        </FormLabel>
                        <FormControl className="border-b border-newBlack py-2">
                          <Input placeholder="beriko@beriko.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col flex-1 pr-8">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary text-xs">
                          Telefon
                        </FormLabel>
                        <FormControl className="border-b border-newBlack py-2">
                          <Input placeholder="+385 98 64 62 60" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="mt-6 py-2 mr-8 h-32">
                    <FormLabel className="text-primary text-xs">
                      Poruka
                    </FormLabel>
                    <FormControl className="border-b border-newBlack py-2">
                      <Textarea
                        className="resize-none"
                        placeholder="Upišite svoj upit..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-24 mt-12 sm:mt-8 ml-auto mr-8 sm:ml-0 sm:mr-0">
                Pošalji
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
