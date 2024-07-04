"use client";

import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function EmailForm() {
  const formSchema = z.object({
    fullName: z
      .string()
      .min(2, "Ime mora biti duže od 2 slova.")
      .max(50, "Ime mora biti kraće od 50 slova."),
    email: z
      .string()
      .min(2, "Unesite email")
      .max(100, "Email mora biti kraći od 100 znakova."),
    phone: z
      .string()
      .min(2, "Broj telefona mora biti duži od 2 broja.")
      .max(50, "Broj telefona mora biti kraći od 50 brojeva."),
    city: z
      .string()
      .min(2, "Ime grada mora biti duže od 2 znaka.")
      .max(50, "Ime grada mora biti krače od 50 znakova."),
    address: z
      .string()
      .min(2, "Adresa biti duža od 4 znaka.")
      .max(50, "Adresa mora biti kraća od 70 znakova."),
    case: z.string().min(1, "Odaberite predmet"),
    dimensions: z.string().min(6, "Dimenzije su obavezno polje"),
    sekcijska_vrata: z.string().min(1, "Odaberite količinu skecijskih vrata"),
    broj_prozora: z.string().min(1, "Odaberite broj prozora"),
    broj_jednokrilnih_vrata: z
      .string()
      .min(1, "Odaberite broj jednokrilnih vrata"),
    roof: z.string().min(1, "Odaberite izgled krovišta"),
    termopanel: z.string().min(1, "Odaberite debljinu termopanela"),
    roofColor: z.string().min(1, "Odaberite boju krovišta"),
    wallColor: z.string().min(1, "Odaberite boju zidova"),
    message: z
      .string()
      .min(2, "Poruka mora biti duža od 2 znaka.")
      .max(500, "Poruka mora biti kraća od 500 znakova."),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "Leopold Jurić",
      email: "leo.jurich@gmail.com",
      phone: "0976900379",
      city: "Koprivnica",
      address: "Dubrava 149",
      case: "",
      dimensions: "",
      sekcijska_vrata: "",
      broj_prozora: "",
      broj_jednokrilnih_vrata: "",
      roof: "",
      termopanel: "",
      roofColor: "",
      wallColor: "",
      message: "dsafasdfasdf",
    },
  });

  function onSubmit(values: any) {
    fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return { form, onSubmit };
}

export default function Contact() {
  const { form, onSubmit } = EmailForm();

  return (
    <section className="relative py-12 sm:py-24 xl:py-10 px-3 md:px-10 xl:px-24 bg-gradient-to-b from-primary/30 to-primary/60 h-[78rem] sm:h-[64rem] xl:h-[45rem]">
      <div className="bg-primary flex-col xl:hidden top-0 text-white w-[70%] h-[21rem] mt-10 absolute z-10 shadow-md p-8 mx-auto left-0 right-0">
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
            href="https://www.facebook.com/profile.php?id=61556832431837"
            className="rounded-md p-4 bg-newWhite text-newBlack hover:opacity-75 duration-300"
          >
            <FiFacebook size={20} />
          </Link>
          <Link
            href="https://www.instagram.com/beriko.buildings/"
            className="rounded-md p-4 bg-newWhite text-newBlack hover:opacity-75 duration-300"
          >
            <IoLogoInstagram size={20} />
          </Link>
        </div>
      </div>
      {/* big screen */}
      <div className="bg-primary hidden xl:block text-white w-[25rem] h-[30rem] xl:mt-10 absolute z-10 shadow-md p-8">
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
            href="https://www.facebook.com/profile.php?id=61556832431837"
            className="rounded-md p-4 bg-newWhite text-newBlack hover:opacity-75 duration-300"
          >
            <FiFacebook size={16} />
          </Link>
          <Link
            href="https://www.instagram.com/beriko.buildings/"
            className="rounded-md p-4 bg-newWhite text-newBlack hover:opacity-75 duration-300"
          >
            <IoLogoInstagram size={16} />
          </Link>
        </div>
      </div>
      <div className="bg-white w-full xl:w-[80%] pb-16 xl:ml-48 relative shadow-md mt-72 sm:mt-60 xl:mt-0">
        <div className="xl:ml-60 ml-8 pt-16">
          <h1 className="text-2xl text-center mr-10 sm:mr-0 sm:text-left font-semibold">
            Naručite!
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
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary text-xs">
                          Ime i prezime
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
              <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 mt-8">
                <div className="flex flex-col flex-1 pr-8">
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary text-xs">
                          Grad
                        </FormLabel>
                        <FormControl className="border-b border-newBlack py-2">
                          <Input placeholder="Dubrovnik" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col flex-1 pr-8">
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary text-xs">
                          Ulica i broj
                        </FormLabel>
                        <FormControl className="border-b border-newBlack py-2">
                          <Input placeholder="Ulica od greba 8" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col flex-1 pr-8">
                  <FormField
                    control={form.control}
                    name="case"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary text-xs">
                          Predmet
                        </FormLabel>
                        <Select onValueChange={field.onChange}>
                          <FormControl className="border-b border-newBlack py-2">
                            <SelectTrigger>
                              <SelectValue placeholder="Odaberite predmet" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="garaža">Garaža</SelectItem>
                            <SelectItem value="hala">Hala</SelectItem>
                            <SelectItem value="bungalov">Bungalov</SelectItem>
                          </SelectContent>
                        </Select>

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
                    name="dimensions"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary text-xs">
                          Dimenzije (cm)
                        </FormLabel>
                        <FormControl className="border-b border-newBlack py-2">
                          <Input
                            placeholder="širina x duljina x visina"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col flex-1 pr-8">
                  <FormField
                    control={form.control}
                    name="broj_prozora"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary text-xs">
                          Broj prozora
                        </FormLabel>
                        <Select onValueChange={field.onChange}>
                          <FormControl className="border-b border-newBlack py-2">
                            <SelectTrigger>
                              <SelectValue placeholder="Odaberite broj sekcija" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                            <SelectItem value="4">4</SelectItem>
                            <SelectItem value="5">5</SelectItem>
                            <SelectItem value="6">6</SelectItem>
                            <SelectItem value="7">7</SelectItem>
                            <SelectItem value="8">8</SelectItem>
                            <SelectItem value="9">9</SelectItem>
                            <SelectItem value="10">10</SelectItem>
                          </SelectContent>
                        </Select>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col flex-1 pr-8">
                  <FormField
                    control={form.control}
                    name="sekcijska_vrata"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary text-xs">
                          Sekcijska vrata
                        </FormLabel>
                        <Select onValueChange={field.onChange}>
                          <FormControl className="border-b border-newBlack py-2">
                            <SelectTrigger>
                              <SelectValue placeholder="Odaberite broj sekcija" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                            <SelectItem value="4">4</SelectItem>
                            <SelectItem value="5">5</SelectItem>
                            <SelectItem value="6">6</SelectItem>
                            <SelectItem value="7">7</SelectItem>
                            <SelectItem value="8">8</SelectItem>
                            <SelectItem value="9">9</SelectItem>
                            <SelectItem value="10">10</SelectItem>
                          </SelectContent>
                        </Select>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col flex-1 pr-8">
                  <FormField
                    control={form.control}
                    name="broj_jednokrilnih_vrata"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary text-xs">
                          Broj jednokrilnih vrata
                        </FormLabel>
                        <Select onValueChange={field.onChange}>
                          <FormControl className="border-b border-newBlack py-2">
                            <SelectTrigger>
                              <SelectValue placeholder="Odaberite broj jednokrilnih vrata" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                            <SelectItem value="4">4</SelectItem>
                            <SelectItem value="5">5</SelectItem>
                            <SelectItem value="6">6</SelectItem>
                            <SelectItem value="7">7</SelectItem>
                            <SelectItem value="8">8</SelectItem>
                            <SelectItem value="9">9</SelectItem>
                            <SelectItem value="10">10</SelectItem>
                          </SelectContent>
                        </Select>

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
                    name="roof"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary text-xs">
                          Izgled krovišta
                        </FormLabel>
                        <Select onValueChange={field.onChange}>
                          <FormControl className="border-b border-newBlack py-2">
                            <SelectTrigger>
                              <SelectValue placeholder="Odaberite izgled" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="jednostrešno">
                              Jednostrešno
                            </SelectItem>
                            <SelectItem value="dvostrešno">
                              Dvostrešno
                            </SelectItem>
                          </SelectContent>
                        </Select>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col flex-1 pr-8">
                  <FormField
                    control={form.control}
                    name="termopanel"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary text-xs">
                          Debljina termopanela (mm)
                        </FormLabel>
                        <Select onValueChange={field.onChange}>
                          <FormControl className="border-b border-newBlack py-2">
                            <SelectTrigger>
                              <SelectValue placeholder="Odaberite debljinu" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="30">30</SelectItem>
                            <SelectItem value="50">50</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col flex-1 pr-8">
                  <FormField
                    control={form.control}
                    name="roofColor"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary text-xs">
                          Boja krovišta
                        </FormLabel>
                        <Select onValueChange={field.onChange}>
                          <FormControl className="border-b border-newBlack py-2">
                            <SelectTrigger>
                              <SelectValue placeholder="Odaberite boju" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="bijela">Bijela</SelectItem>
                            <SelectItem value="crvena">Crvena</SelectItem>
                            <SelectItem value="imitacija_crijepa">
                              Imitacija crijepa
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex flex-col flex-1 pr-8">
                  <FormField
                    control={form.control}
                    name="wallColor"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-primary text-xs">
                          Boja zidova
                        </FormLabel>
                        <Select onValueChange={field.onChange}>
                          <FormControl className="border-b border-newBlack py-2">
                            <SelectTrigger>
                              <SelectValue placeholder="Odaberite boju" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="bijela">Bijela</SelectItem>
                            <SelectItem value="antracit">Antracit</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="flex flex-col mt-8 mr-8">
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-primary text-xs">
                        Poruka
                      </FormLabel>
                      <FormControl className="border-b border-newBlack py-2">
                        <Input placeholder="Vaša poruka" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button className="mt-8 w-40" type="submit">
                Pošalji upit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
