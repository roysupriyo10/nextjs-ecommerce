import prisma from "@/lib/db/prisma";
import { redirect } from "next/navigation";
import { FormSubmitButton } from "@/components";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export const metadata = {
  title: "Add Product - eCommerce Website"
}

const addProduct = async (formData: FormData) => {
  'use server';

  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/add-product');
  }

  const name = formData.get('product-name')?.toString();
  const description = formData.get('product-desc')?.toString();
  const imageUrl = formData.get('product-image-url')?.toString();
  const price = Number(formData.get('product-price') || 0);

  if (!name || !description || !imageUrl || !price) {
    throw Error("Missing required fields");
  }

  await prisma.product.create({
    data: {
      name,
      description,
      imageUrl,
      price,
    }
  });

  redirect('/');
}

const AddProduct = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/api/auth/signin?callbackUrl=/add-product');
  }

  return (
    <div>
      <h1 className="text-lg mb-3 font-bold">Add Product</h1>
      <form action={addProduct}>
        <input
          type="text"
          className="mb-3 w-full input input-bordered"
          required
          name="product-name"
          placeholder="Name"
        />
        <textarea
          className="mb-3 w-full textarea textarea-bordered"
          required
          name="product-desc"
          placeholder="Description"
        />
        <input
          type="url"
          className="mb-3 w-full input input-bordered"
          required
          name="product-image-url"
          placeholder="Image URL"
        />
        <input
          type="number"
          className="mb-3 w-full input input-bordered"
          required
          name="product-price"
          placeholder="Price"
        />
        <FormSubmitButton className="btn-block">Add Product</FormSubmitButton>
      </form>
    </div>
  )
}

export default AddProduct
