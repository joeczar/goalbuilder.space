import React from "react";
import Link from "next/link"
import Query from "../components/query";
import CATEGORIES_QUERY from "../apollo/queries/category/categories";

import styles from './nav.module.css'

const Nav = () => {
  
  return (
    <div>
      <Query query={CATEGORIES_QUERY} id={null}>
        
        {({ data: { categories } }) => {
          
          return (
            <div>
              <nav className={styles.navbar_container} >
                <div className={styles.navbar_left}>
                  <div className={styles.nav_logo}>
                    
                  <h1><Link href="/">
                        <a>GoalBuilder.Space</a>
                      </Link></h1>
                    
                  </div>
                </div>

                <div className={styles.navbar_right}>
                  <ul className={styles.goal_nav}>
                  <li className={styles.goal_links}>
                      <Link href="/goals">
                        <a>Goals</a>
                      </Link>
                    </li>

                    {categories.map((category, i) => {
                      return (
                        <li className={styles.goal_links} key={category.id}>
                          <Link
                            href={{
                              pathname: "category",
                              query: { id: category.id }
                            }}
                          >
                            <a className="uk-link-reset">{category.title}</a>
                          </Link>
                        </li>
                      );
                    })}
                    
                  </ul>
                </div>
              </nav>
            </div>
          );
        }}
      </Query>
    </div>
  );
};

export default Nav;