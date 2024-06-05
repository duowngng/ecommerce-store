import getProducts from "@/actions/get-products";

export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  }
}

const CategoryPage:React.FC<CategoryPageProps> = async ({
  params,
  searchParams
}) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId
  });

  return (
    <div>
      <h1>Category Page</h1>
    </div>
  );
}

export default CategoryPage;