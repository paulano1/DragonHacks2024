// "use client"

// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm } from "react-hook-form"
// import { z } from "zod"
// import { Calendar } from "@/components/ui/calendar"

// import { Button } from "@/components/ui/button"
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form"
// import { Input } from "@/components/ui/input"
// import { toast } from "@/components/ui/use-toast"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import {
//     Popover,
//     PopoverContent,
//     PopoverTrigger,
//   } from "@/components/ui/popover"
// import { CalendarIcon } from "@radix-ui/react-icons"
// import { format } from "date-fns"
// import { cn } from "../utils/cn"

// const ACCEPTED_FILE_TYPES = ["application/pdf"]; // Now focused on PDFs
// const MAX_FILE_SIZE = 100; //In MegaBytes, unchanged but you can adjust as needed for PDFs




// const FormSchema = z.object({
//     email: z.string({
//         required_error: "A date of birth is required.",
//       }).email({
//         message: "Invalid email address.",
//     }),
//     password: z.string().min(8, {
//             message: "Password must be at least 8 characters.",
//         }),
//     passwordConfirmation: z.string().min(8, {
//             message: "Password must be at least 8 characters.",
//         }),
//     graduationDate: z.date(),
//     dob: z.date({
//         required_error: "A date of birth is required.",
//       }),
//     university: z.string({
//         required_error: "University is required.",
//       }),



// })

// export default function InputForm() {
  
//   const form = useForm<z.infer<typeof FormSchema>>({
//     resolver: zodResolver(FormSchema),
//     defaultValues: {
//         email: "",
//         password: "",
//         passwordConfirmation: "",
//         dob: new Date(),
//         graduationDate: new Date(),
//     },
//   })

//   function onSubmit(data: z.infer<typeof FormSchema>) {
//     console.log("Submitted!")
//     console.log(data)
//     toast({
//       title: "You submitted the following values:",
//       description: (
//         <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
//           <code className="text-white">{JSON.stringify(data, null, 2)}</code>
//         </pre>
//       ),
//     })
//   }

//   return (
//     <Card className="w-[350px]">
//     <CardHeader>
//     </CardHeader>
//     <CardContent>
//     <Form {...form}>
//       <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
//         <FormField
//               control={form.control}
//               name="email"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Email</FormLabel>
//                   <FormControl>
//                     <Input type="email" placeholder="your-email@example.com" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             {/* Password Field */}
//             <FormField
//               control={form.control}
//               name="password"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Password</FormLabel>
//                   <FormControl>
//                     <Input type="password" placeholder="********" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             {/* Password Confirmation Field */}
//             <FormField
//               control={form.control}
//               name="passwordConfirmation"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>Confirm Password</FormLabel>
//                   <FormControl>
//                     <Input type="password" placeholder="********" {...field} />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//           control={form.control}
//           name="dob"
//           render={({ field }) => (
//             <FormItem className="flex flex-col">
//               <FormLabel>Date of birth</FormLabel>
//               <Popover>
//                 <PopoverTrigger asChild>
//                   <FormControl>
//                     <Button
//                       variant={"outline"}
//                       className={cn(
//                         "w-[240px] pl-3 text-left font-normal",
//                         !field.value && "text-muted-foreground"
//                       )}
//                     >
//                       {field.value ? (
//                         format(field.value, "PPP")
//                       ) : (
//                         <span>Pick a date</span>
//                       )}
//                       <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
//                     </Button>
//                   </FormControl>
//                 </PopoverTrigger>
//                 <PopoverContent className="w-auto p-0" align="start">
//                   <Calendar
//                     mode="single"
//                     selected={field.value}
//                     onSelect={field.onChange}
//                     disabled={(date) =>
//                       date > new Date() || date < new Date("1900-01-01")
//                     }
//                     initialFocus
//                   />
//                 </PopoverContent>
//               </Popover>
//               <FormMessage />
//             </FormItem>
//           )}
//         />
//            <FormField
//           control={form.control}
//           name="graduationDate"
//           render={({ field }) => (
//             <FormItem className="flex flex-col">
//               <FormLabel>Graduation Date</FormLabel>
//               <Popover>
//                 <PopoverTrigger asChild>
//                   <FormControl>
//                     <Button
//                       variant={"outline"}
//                       className={cn(
//                         "w-[240px] pl-3 text-left font-normal",
//                         !field.value && "text-muted-foreground"
//                       )}
//                     >
//                       {field.value ? (
//                         format(field.value, "PPP")
//                       ) : (
//                         <span>Pick a date</span>
//                       )}
//                       <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
//                     </Button>
//                   </FormControl>
//                 </PopoverTrigger>
//                 <PopoverContent className="w-auto p-0" align="start">
//                   <Calendar
//                     mode="single"
//                     selected={field.value}
//                     onSelect={field.onChange}
//                     disabled={(date) =>
//                       date > new Date() || date < new Date("1900-01-01")
//                     }
//                     initialFocus
//                   />
//                 </PopoverContent>
//               </Popover>
//               <FormMessage />
//             </FormItem>
//           )}
//         />

//         <Button type="submit">Submit</Button>
//       </form>
//     </Form>
//     </CardContent>
//     </Card>
//   )
// }


"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import app, { auth } from "../../firebase"


import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import { cn } from "../utils/cn"
import { useState } from "react";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
const ACCEPTED_PDF_FILE_TYPES = ["application/pdf"]; // Now focused on PDFs
const FormSchema = z.object({
  email: z.string({
              required_error: "A date of birth is required.",
            }).email({
              message: "Invalid email address.",
          }),
  password: z.string({
            required_error: "A date of birth is required.",
          }).min(8, {
                  message: "Password must be at least 8 characters.",
              }),
  dob : z.date({
            required_error: "A date of birth is required.",
          }).refine((date) => {
            return new Date().getFullYear() - date.getFullYear() >= 18
          }),
  graduationDate: z.date({
            required_error: "A date of birth is required.",
          }),
  
  file : z.any(),
    
})

export default function InputForm() {
  const [file, setFile] = useState<File | null>(null)
  const firestore = getFirestore(app);
  const storage = getStorage(app);
  
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
      dob: new Date(),
      graduationDate: new Date(),
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password);
    if (userCredential) {
      try{
      const db = getFirestore(app);
      if (file) {
        const fileRef = ref(storage, `cvs/${userCredential.user.uid}/${file.name}`);
        const fileSnapshot = await uploadBytes(fileRef, file);
        const url = await getDownloadURL(fileRef);
        console.log('File uploaded to: ', url);
      }
      
      addDoc(collection(firestore, userCredential.user.uid), {
        dob: data.dob,
        graduationDate: data.graduationDate,
      }).then(() => {
        window.location.href = "/success"
      }
      )
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    }
    console.log(data)
  }

  return (
        <Card className="w-[350px]">
          <CardHeader></CardHeader>
    <CardContent>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email ID</FormLabel>
              <FormControl>
                <Input placeholder="abc@drexel.edu" {...field} />
              </FormControl>
              <FormDescription>
                We will communicate with you over this email
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="IdontRepeatPasswords" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="dob"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date of birth</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="graduationDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Graduation Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="file"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Upload your resume</FormLabel>
              <FormControl>
                <Input type="file" accept={ACCEPTED_PDF_FILE_TYPES.join(",")} onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    setFile(e.target.files[0])
                    field.onChange(e)
                  }
                }} />
              </FormControl>
              <FormDescription>
                We will communicate with you over this email
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        
        
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    </CardContent>
    </Card>
  )
}
