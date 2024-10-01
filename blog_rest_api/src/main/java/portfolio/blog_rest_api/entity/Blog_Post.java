package portfolio.blog_rest_api.entity;
import com.fasterxml.jackson.annotation.JsonFormat;

// import javax.persistence.*; // this is outdated use jakarta.persistance          
import jakarta.persistence.*; // this packages is part of the larger JPA (ORM for relation and non-relation database)

import java.util.Date;


@Entity // specifies this class is an entity and should be mapped to a database table
@Table(name = "post") // table name
public class Blog_Post {

    @Id // Id specifies primary keys
    @GeneratedValue(strategy = GenerationType.IDENTITY) // method for generating primary keys e.g. GenerationType.IDENTITY is just an auto-increment counter.
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String description;
    
    @Temporal(TemporalType.DATE)
    @Column(nullable = false)
    private Date date_posted;


    // Constructors, getters and setters, and other methods...

    // Getters
    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }


    // Setters
    public void setId(Long id) {
        this.id = id;
    }

    public void setTitle(String name) {
        this.title = name;
    }

    public void setDescription(String description) {
        this.description = description;
    }


}