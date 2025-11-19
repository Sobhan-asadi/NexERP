/** @format */

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { columns } from "./features/columns";
import { DataTable } from "./features/data-table";

export default async function CategoriesPage() {
  const res = await fetch(`http://localhost:1337/api/categories`);
  const response = await res.json();

  const catgories = response.data.map((item) => ({
    id: item.id,
    name: item.name,
    email: item.email,
    description: item.description,
  }));

  return (
    <div className='py-4 md:py-6 px-4 lg:px-6'>
      <Card className='@container/card'>
        <CardHeader>
          <CardTitle>Categories</CardTitle>

          <CardDescription>
            <span>List of categories</span>
          </CardDescription>

          <CardAction>
            <Button>Add a new record</Button>
          </CardAction>
        </CardHeader>

        <CardContent>
          <DataTable columns={columns} data={catgories} />
        </CardContent>
      </Card>
    </div>
  );
}
