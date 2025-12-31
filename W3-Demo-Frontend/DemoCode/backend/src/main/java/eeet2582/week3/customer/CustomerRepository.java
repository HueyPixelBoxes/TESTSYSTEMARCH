package eeet2582.week3.customer;

import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.data.mongodb.repository.MongoRepository;

import eeet2582.week3.customer.dto.CustomerBalance;

/**
 * CustomerRepository
 */
// public interface CustomerRepository extends MongoRepository<CustomerEntity, String>{
public interface CustomerRepository extends JpaRepository<CustomerEntity, String>{

    // CustomerEntity findById(String id);

    CustomerEntity findByEmail(String email);

    CustomerBalance getCustomerEntityByEmail(String email);
    
} 
