import CategoryCard from "./CategoryCard";
import { Link } from "react-router-dom";

const CategoryList = ({ categories }) => {
  return (
    <div className="category-list">
      {categories.map((category) => (
        <Link to={`/wiki/${category.routeLink}`}>
          <CategoryCard
            key={category.id}
            id={category.routeLink}
            categoryData={category}
          />
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;
