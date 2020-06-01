import { useRouter } from "next/router";
import { Goals } from "../components";
import Query from "../components/query";
import CATEGORY_GOALS_QUERY from "../apollo/queries/category/goals";
import GoalsStyled from "./goals.styled"

const Category = () => {
  const router = useRouter();

  return (
    <Query query={CATEGORY_GOALS_QUERY} id={router.query.id}>
      {({ data: { category } }) => {
          
        return (
          <GoalsStyled >
          
            
                <h1>{category.title}</h1>
                <Goals goals={category.goals} />
             
          
          </GoalsStyled>
        );
      }}
    </Query>
  );
};

export default Category;