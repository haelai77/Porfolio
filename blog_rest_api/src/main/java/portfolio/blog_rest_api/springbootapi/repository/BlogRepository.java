package portfolio.blog_rest_api.springbootapi.repository;

import portfolio.blog_rest_api.entity.Blog_Post;
import org.springframework.data.jpa.repository.JpaRepository; // set of tools to interact with database
import org.springframework.stereotype.Repository;

@Repository // indicates this interface is a repository i.e. a set of tools to interact with database
public interface BlogRepository extends JpaRepository<Blog_Post, Long>{
}

// Spring will automatically create an instance of this repository
// This repository just provides some CRUD tools that work on the Blog_Post entity
