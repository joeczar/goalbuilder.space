import { useRouter } from 'next/router';
import { Goals } from '../components';
import Query from '../components/query';
import CATEGORY_GOALS_QUERY from '../apollo/queries/category/goals';
import CategoryStyled from './category.styled';

const Category = () => {
    const router = useRouter();

    return (
        <Query query={CATEGORY_GOALS_QUERY} id={router.query.id}>
            {({ data: { category } }) => {
                return (
                    <CategoryStyled className="category_wrapper">
                    
                        <h1>{category.title}</h1>
                        <Goals goals={category.goals} />
                    
                     </CategoryStyled>
                );
            }}
        </Query>
    );
};

export default Category;
