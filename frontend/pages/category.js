import { useRouter } from "next/router";
import Goals from "../components/goals";
import Query from "../components/query";
import CATEGORY_GOALS_QUERY from "../apollo/queries/category/goals";
import Nav from '../components/nav'

const Category = () => {
  const router = useRouter();

  return (
    <Query query={CATEGORY_GOALS_QUERY} id={router.query.id}>
      {({ data: { category } }) => {
          
        return (
          <div>
            <div className="uk-section">
              <div className="uk-container uk-container-large">
                <h1>{category.title}</h1>
                <Goals goals={category.goals} />
              </div>
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default Category;