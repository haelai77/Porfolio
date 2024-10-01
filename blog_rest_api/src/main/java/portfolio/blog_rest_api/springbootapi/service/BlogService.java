package portfolio.blog_rest_api.springbootapi.service;

import portfolio.blog_rest_api.entity.Blog_Post;
import portfolio.blog_rest_api.springbootapi.repository.BlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BlogService { // service class to manage blog post entities (calls BlogRepositoy CRUD methods)
    private final BlogRepository blog_repo;

    // crud
    // create
    // read
    // update
    // delete


    // annotation for constructors, auto-wiring does dependency injection automatically i.e. I don't have to instantiate Blog_Post_Repo because its automatically created and passed in!
    @Autowired 
    public BlogService(BlogRepository blog_repo) {
        this.blog_repo = blog_repo;
    }

    //create
    /**
     * Save a product.
     *
     * @param post the entity to save
     * @return the persisted entity
     */
    public Blog_Post savePost(Blog_Post post) {
        return blog_repo.save(post);
    }


    // read
    /**
     * Get all the products.
     *
     * @return the list of entities
     */
    public List<Blog_Post> getAllProducts() {
        return blog_repo.findAll();
    }

    /**
     * Get one product by ID.
     *
     * @param id the ID of the entity
     * @return the entity
     */
    public Optional<Blog_Post> getProductById(Long id) {
        return blog_repo.findById(id);
    }

    // update
    /**
     * Update a product.
     *
     * @param id the ID of the entity
     * @param updatedPost the updated entity
     * @return the updated entity
     */
    public Blog_Post updateProduct(Long id, Blog_Post updatedPost) {
        Optional<Blog_Post> existingPost = blog_repo.findById(id);

        if (existingPost.isPresent()) {

            Blog_Post post = existingPost.get();

            post.setTitle(updatedPost.getTitle());
            post.setDescription(updatedPost.getDescription());

            return blog_repo.save(post);
        } else {
            throw new RuntimeException("Post not found");
        }
    }

    // delete
    /**
     * Delete the product by ID.
     *
     * @param id the ID of the entity
     */
    public void deleteProduct(Long id) {
        blog_repo.deleteById(id);
    }

}
