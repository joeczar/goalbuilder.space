// from https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/

import React from "react";
import Link from "next/link";
import Query from "../../components/query";
import CATEGORIES_QUERY from "../../apollo/queries/category/categories";
import { bool } from "prop-types";
import { StyledMenu } from "./Menu.styled";

const Menu = ({ open, ...props }) => {
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <div>
      <Query query={CATEGORIES_QUERY} id={null}>
        {({ data: { categories } }) => {
          return (
            <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
              <div >
                <h1 className="logo">
                  <Link href="/">
                    <a tabIndex={tabIndex}>GoalBuilder.Space</a>
                  </Link>
                </h1>
              </div>
              <div>
                <ul>
                  <li>
                    <Link href="/goals">
                      <a tabIndex={tabIndex}>Goals</a>
                    </Link>
                  </li>

                  {categories.map((category, i) => {
                    return (
                      <li key={category.id}>
                        <Link
                          href={{
                            pathname: "category",
                            query: { id: category.id },
                          }}
                        >
                          <a tabIndex={tabIndex}>{category.title}</a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </StyledMenu>
          );
        }}
      </Query>
    </div>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
