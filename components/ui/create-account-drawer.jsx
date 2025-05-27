
'use client';
import react ,{ useState } from "react";
import { Drawer ,DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "./drawer";
import {zodResolver} from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { accountSchema } from "@/app/lib/schema";
import { Input } from "./input";
// import {Select } from "./ui/select"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select";



const CreateAccountDrawer = ({children}) => {
  const [open , setOpen] = useState(false);
  
  const {register ,handleSubmit , formState:{errors} , setValue, watch,reset} = useForm({
    resolver: zodResolver(accountSchema),
    defaultValues: {
        name: "",
        type: "CURRENT",
        balance: "",
        isDefault: false

    }
  })
  
 return (
    <Drawer open={open} onOpenChange={setOpen}>
  <DrawerTrigger asChild>{children}</DrawerTrigger>
  <DrawerContent>   
    <DrawerHeader>
      <DrawerTitle>Create New Account</DrawerTitle>
    </DrawerHeader>   

    <div>
        <form>
    <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium">Account Name</label>
        <Input id="name" placeholder="e.g., main checking"
        {...register("name")}/> 
        {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
        )}

    </div>
    <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium">Account Type</label>
      <Select onValueChange={(value) => setValue("type", value)}>
  <SelectTrigger className="type">
    <SelectValue placeholder="Select Type" />

  </ SelectTrigger>
  <SelectContent>
    <SelectItem value="CURRENT">Current</SelectItem>

    <SelectItem value="SAVINGS">Savings</SelectItem>
  </SelectContent>
</Select>

        {errors.type && (
            <p className="text-sm text-red-500">{errors.type.message}</p>
        )}

    </div>
        </form>
    </div>
  </DrawerContent>
</Drawer>
  )
}

export default CreateAccountDrawer