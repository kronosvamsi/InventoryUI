import Card from "../components/Card";
import useFetch from "../hooks/useFetch";

function CategoryPage() {
  const { data: categories, loading, err } = useFetch("/api/categories");

  return (
    <div>
      {categories.map((category) => (
        <p key={category.id}>{category.name}</p>
      ))}
    </div>
  );
}

export default CategoryPage;
