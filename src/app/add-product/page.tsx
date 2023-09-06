export const metadata = {
  title: "Add Product - eCommerce Website"
}

const AddProduct = () => {
  return (
    <div>
      <h1 className="text-lg mb-3 font-bold">Add Product</h1>
      <form action="">
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
        <button type="submit" className="btn btn-primary btn-block">Add Product</button>
      </form>
    </div>
  )
}

export default AddProduct
