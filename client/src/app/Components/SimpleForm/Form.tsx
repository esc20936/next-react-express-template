"use client";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";
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
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  nombre: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres.",
  }),
  direccion: z.string(),
  numerocuenta: z.string(),
  banco: z.string(),
  tipo: z.string(),
});

export default function Create() {
  const { toast } = useToast();
  const router = useRouter();


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      direccion: "",
      numerocuenta: "",
      banco: "",
      tipo: "Iglesia",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const { nombre, direccion, numerocuenta, banco, tipo } = data;

    // if nombre, numerocuenta and banco are empty show error
    if (!nombre || !numerocuenta || !banco) {
      toast({
        title: "Error al crear iglesia",
        description: "El nombre, número de cuenta y banco son requeridos.",
        variant: "destructive",
      });
      return;
    }


    // try to create the iglesia
    const response = await fetch("/api/iglesias/create", {
      method: "POST",
      body: JSON.stringify({ nombre, direccion, numerocuenta, banco, tipo }),
    });

    console.log(response);

    // if the response is ok
    if (response.ok) {
      toast({
        title: "Iglesia creada",
        description: "La iglesia fue creada correctamente.",
      });

      // redirect to the iglesias page
      router.push("/options/iglesias");
      return;
    }

    // if there is an error
    toast({
      title: "Error al crear iglesia",
      description: "Error al crear la iglesia.",
      variant: "destructive",
    });

  };

  return (
    <div className="flex  flex-col items-center justify-center h-full ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Card className="w-full max-w-lg">
            <CardHeader>
              <CardTitle>Crear Iglesia</CardTitle>
              <CardDescription>
                Llena el formulario para crear una nueva Iglesia.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="nombre"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre de la Iglesia</FormLabel>
                      <FormControl>
                        <Input placeholder="Iglesia..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="direccion"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Dirección</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Dirección de la iglesia"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="tipo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tipo</FormLabel>
                      <FormControl>
                        <Input placeholder="Tipo" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="numerocuenta"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Número de Cuenta</FormLabel>
                      <FormControl>
                        <Input
                          id="account-number"
                          placeholder="Número de cuenta bancaria"
                          type="number"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="banco"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Banco</FormLabel>
                      <FormControl>
                        <Input placeholder="Nombre del Banco" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" type="submit">
                Crear Iglesia
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </div>
  );
}
