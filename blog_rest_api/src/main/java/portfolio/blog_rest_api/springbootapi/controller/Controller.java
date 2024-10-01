package portfolio.blog_rest_api.springbootapi.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import portfolio.blog_rest_api.entity.Blog_Post;
import portfolio.blog_rest_api.springbootapi.service.BlogService;

@RestController
@RequestMapping("/api/v1")
public class Controller {
    private final BlogService blogService;

    @Autowired
    public Controller(BlogService blogService){
        this.blogService = blogService;
    }

    /**
     * Create a new product.
     *
     * @param product the product to create
     * @return the ResponseEntity with status 200 (OK) and with body of the new product
     */
    @PostMapping("/post") // maps post endpoint to handler method
    public ResponseEntity<Blog_Post> savePost(@RequestBody Blog_Post blogPost){
        Blog_Post newPost = blogService.savePost(blogPost);
        return ResponseEntity.ok(newPost);
    }

    /**
     * Get all products.
     *
     * @return the ResponseEntity with status 200 (OK) and with body of the list of products
     */
    @GetMapping("/posts")
    public List<Blog_Post> getAllProducts() {
        return blogService.getAllProducts();
    }

    /**
     * Get a product by ID.
     *
     * @param id the ID of the product to get
     * @return the ResponseEntity with status 200 (OK) and with body of the product, or with status 404 (Not Found) if the product does not exist
     */
    @GetMapping("/posts/{id}")
    public ResponseEntity<Blog_Post> getProductById(@PathVariable Long id) {
        Optional<Blog_Post> post = blogService.getProductById(id);
        return post.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
        // double colon essentially creates a lambda expression same as (x) -> ResponseEntity.ok(x)
    }

    /**
     * Update a product by ID.
     *
     * @param id the ID of the product to update
     * @param blogPost the updated product
     * @return the ResponseEntity with status 200 (OK) and with body of the updated product, or with status 404 (Not Found) if the product does not exist
     */
    @PutMapping("/posts/{id}")
    public ResponseEntity<Blog_Post> updateProduct(@PathVariable Long id, @RequestBody Blog_Post blogPost) {
        Blog_Post updatedPost = blogService.updateProduct(id, blogPost);
        return ResponseEntity.ok(updatedPost);
    }
    // @RequestBody maps HttpRequest body to a transfer or domain object, enabling automatic deserialisation of the inbound HttpRequest into a java object

    /**
     * Delete a product by ID.
     *
     * @param id the ID of the product to delete
     * @return the ResponseEntity with status 200 (OK) and with body of the message "Product deleted successfully"
     */
    @DeleteMapping("/posts/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable Long id) {
        blogService.deleteProduct(id);
        return ResponseEntity.ok("Post deleted successfully");
    }
}

