import {
    PlusCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Tabs,
    TabsContent,
} from "@/components/ui/tabs"
import { useMutation, useQuery } from "@tanstack/react-query";
import  apiClient from "@/data/apiClient";
import { CreateListRequest, List } from "@/apiClient"
import CreateListTable from "@/components/ListTable"
import { useAuthStore } from "@/store/authStore"
import { toast } from "@/components/ui/use-toast"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { DialogHeader } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { AlertDialogHeader, AlertDialogFooter } from "@/components/ui/alert-dialog"
import { AlertDialog, AlertDialogContent, AlertDialogTitle, AlertDialogDescription, AlertDialogCancel } from "@radix-ui/react-alert-dialog"

function ListPage(){
    const navigate = useNavigate();
    const [addListDialog, setAddListDialogOpen] = useState(false);
    const [name, setName] = useState("");
    const auth = useAuthStore()
    const listQuery = useQuery({
        queryKey: ["list"],
        queryFn: async () => {
            var res = await apiClient.listApi.apiListsGet();
            return res.data;
        },
    });

    const addListMutation = useMutation({
        mutationFn: async (listName: CreateListRequest) => {
            if (!listName.listName) {
                throw new Error("All fields are required")
            }
            await apiClient.listApi.apiListsPost(listName)
        },
        onSuccess: () => {
            toast({
                title: "list added",
                description: "The list has been added successfully",
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
    const buildAddListDialog = () => {
        return (
            <Dialog open={addListDialog} onOpenChange={setAddListDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>List</DialogTitle>
                        <DialogDescription>
                            Add new List
                        </DialogDescription>
                    </DialogHeader>
                    <Input
                        placeholder="Name"
                        className="mt-4"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Button
                        className="mt-4"
                        loading={addListMutation.isPending}
                        onClick={() => {
                            addListMutation.mutate({ listName : name })
                        }}
                    >
                        Add List
                    </Button>
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <main className="page mt-16">
            <Tabs defaultValue="all">
                <div className="flex items-center">
                    {auth.user && (<div className="ml-auto flex items-center gap-2">
                        <Button size="sm" className="h-8 gap-1" onClick={() => {
                            setAddListDialogOpen(true)
                            setName("")
                        }}>
                            <PlusCircle className="h-3.5 w-3.5" />
                            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                Add new List
                            </span>
                        </Button>
                    </div>)}
                </div>
                <TabsContent value="all">
                    <Card x-chunk="dashboard-06-chunk-0">
                        <CardHeader>
                            <CardTitle>Lists</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="">List Name</TableHead>
                                        <TableHead className="">Delete</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {listQuery.data?.map((list: List) => (
                                        <CreateListTable key={list.id} type={list} />
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
            {buildAddListDialog()}
        </main>

    )
}

export default ListPage;