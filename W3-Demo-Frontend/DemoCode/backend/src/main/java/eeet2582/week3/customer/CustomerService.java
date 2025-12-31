package eeet2582.week3.customer;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import eeet2582.week3.customer.dto.CustomerBalance;

@Component
class CustomerService {

    @Autowired
    private CustomerRepository customerRepository;

    CustomerEntity getCustomerByEmail(String email) {
        return customerRepository.findByEmail(email);
    }

    CustomerEntity createCustomer(CustomerEntity customerEntity) {
        return customerRepository.save(customerEntity);
    }

    CustomerBalance getCustomerBalance(String email) {
        return customerRepository.getCustomerEntityByEmail(email);
    }

    public Optional<List<CustomerEntity>> getAllCustomers() {
        return Optional.of(customerRepository.findAll());
    }

    public Optional<CustomerEntity> updateCustomer(CustomerEntity customerData) {
        Optional<CustomerEntity> existingCustomer = 
            customerRepository.findById(customerData.getId());

        if (existingCustomer.isPresent()) {
            return Optional.of(customerRepository.save(customerData));
        }
           
        return Optional.empty();
        
    }

    public Optional<CustomerEntity> deleteCustomer(String id) {
        Optional<CustomerEntity> existingCustomer = customerRepository.findById(id);

        if (existingCustomer.isPresent()) {
            customerRepository.delete(existingCustomer.get());
            return existingCustomer;
        }

        return Optional.empty();
    }

}
