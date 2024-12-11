import { Button } from "@/components/ui/button"
import apiClient from "@/data/apiClient";
import { useAuthStore } from "@/store/authStore"
import { GoTrash } from "react-icons/go";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { List, ModelObject } from "@/apiClient/api";
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
    TableCell,
    TableRow,
} from "@/components/ui/table"


interface ListProps {
    type: List;
}
function CreateListTable(props: ListProps) {
    const auth = useAuthStore();
    const navigate = useNavigate();
    const { toast } = useToast();
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
       const deleteListMutation = useMutation({
   
           mutationFn: async (id: number) => {
               await apiClient.listApi.apiListsIdDelete(id);
           },
           onSuccess: () => {
               toast({
                   title: "List deleted",
                   description: "The word has been deleted successfully",
                   variant: "success",
               });
               navigate(0);
           },
           onError: (error) => {
               toast({
                   title: "Error",
                   description: error.message,
                   variant: "destructive",
               });
           }
       });
       const buildDeleteTypeDialog = () => {
           return (
               <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
                   <AlertDialogContent>
                       <AlertDialogHeader>
                           <AlertDialogTitle>Delete object</AlertDialogTitle>
                       </AlertDialogHeader>
                       <AlertDialogDescription>
                           Are you sure you want to delete this List?
                       </AlertDialogDescription>
                       <AlertDialogFooter>
                           <AlertDialogCancel>Cancel</AlertDialogCancel>
                           <Button
                               variant="destructive"
                               loading={deleteListMutation.isPending}
                               onClick={() => {
                                   deleteListMutation.mutate(props.type.id);
                               }}
                           >
                               Delete
                           </Button>
                       </AlertDialogFooter>
                   </AlertDialogContent>
               </AlertDialog>
           );
       }
    return (
        <TableRow>
            <TableCell className="text-left">
                <Button
                    //variant="ghost"
                    onClick={() => navigate(`/${props.type.id}`)}>
                    {props.type.name}
                </Button>
            </TableCell>
                <TableCell>
                    <Button
                        variant="ghost"
                        className="text-destructive text-2xl"
                        onClick={() => setDeleteDialogOpen(true)}>
                        <GoTrash />
                    </Button>
                </TableCell>
            {buildDeleteTypeDialog()}
        </TableRow>
    )
}
export default CreateListTable;