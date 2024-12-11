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

import apiClient from "@/data/apiClient";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useAuthStore } from "@/store/authStore"
import CreateTable from "@/components/ObjectsTable";
import { useState } from "react";

import { toast } from "@/components/ui/use-toast"
import { useNavigate, useParams } from "react-router-dom"
import { Input } from "@/components/ui/input"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { CreateObjectRequest, List, ListApi, ModelObject, ShareListRequest, } from "@/apiClient";
import { Share1Icon } from "@radix-ui/react-icons"


function ObjectPage() {
    const [addObjectDialog, setAddObjectDialogOpen] = useState(false);
    const [shareListDialog, setShareListDialogOpen] = useState(false);
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const auth = useAuthStore();
    const navigate = useNavigate();
    const { id } = useParams();

    const objectsQuery = useQuery({
        queryKey: ["object",id],
        queryFn: async() =>{
            const res = await apiClient.objectApi.apiObjectsIdGet(+id)
            console.log(res.data) 
            return res.data
        },
    });
    const addObjectMutation = useMutation({
        mutationFn: async (objectName: CreateObjectRequest) => {
            if(!objectName.objectName || !objectName.listId) {
                throw new Error("All fields are required")
            }
            await apiClient.objectApi.apiObjectsIdPost(+id,objectName)
        },
        onSuccess: () => {
            toast({
                title: "object added",
                description: "The word has been added successfully",
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
    const shareListMutation = useMutation({
        mutationFn: async (shareList: ShareListRequest) => {
            if (!shareList.userName) {
                throw new Error("All fields are required")
            }
            await apiClient.listApi.apiListsIdPut(+id, shareList)
        },
        onSuccess: () => {
            toast({
                title: "List shared",
                description: "List shared successfully",
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

    const buildAddObjectDialog = () => {
        return (
            <Dialog open={addObjectDialog} onOpenChange={setAddObjectDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Add Object</DialogTitle>
                        <DialogDescription>
                            Add new object to the list
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
                        loading={addObjectMutation.isPending}
                        onClick={() => {
                            addObjectMutation.mutate({ objectName: name,listId : +id })
                        }}
                    >
                        Add Object
                    </Button>
                </DialogContent>
            </Dialog>
        )
    }
    const buildShareListDialog = () => {
        return (
            <Dialog open={shareListDialog} onOpenChange={setShareListDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Share List</DialogTitle>
                        <DialogDescription>
                            Share List with user
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
                        loading={shareListMutation.isPending}
                        onClick={() => {
                            shareListMutation.mutate({userName: name})
                        }}
                    >
                        Add Object
                    </Button>
                </DialogContent>
            </Dialog>
        )
    }

    return (
            <main className="page mt-16">
                    <Tabs defaultValue="all">
                    <div className="flex justify-end gap-1">
                           <div className="flex items-center gap-2">
                                <Button size="sm" className="h-8 gap-1" onClick={() =>{
                                    setAddObjectDialogOpen(true)
                                    setName("")
                                }}>
                                    <PlusCircle className="h-3.5 w-3.5" />
                                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                        Add Product
                                    </span>
                                </Button>
                            </div>
                            <div className="flex items-start gap-2">
                                <Button size="sm" className="h-8" onClick={() => {
                                    setShareListDialogOpen(true)
                                    setUserName("")
                                }}>
                                <Share1Icon className="h-3.5 w-3.5" />
                                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                        Share List
                                    </span>
                                </Button>
                            </div>
                        </div>
                        <TabsContent value="all">
                            <Card x-chunk="dashboard-06-chunk-0">
                                <CardHeader>
                                    <CardTitle>List</CardTitle>
                                    <CardDescription>
                                        Manage your object.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                            <TableHead className="">Name</TableHead>
                                           <TableHead className="">Delete</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            {objectsQuery.data?.map((object: ModelObject) => (
                                                <CreateTable key={object.id} type={object} />
                                            ))}
                                        </TableBody>
                                    </Table>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                {buildAddObjectDialog()}
                {buildShareListDialog()}
            </main>
                
        )
}

export default ObjectPage
