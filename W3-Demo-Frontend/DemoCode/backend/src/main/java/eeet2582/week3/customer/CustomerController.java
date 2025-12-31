package eeet2582.week3.customer;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import eeet2582.week3.customer.dto.CustomerBalance;

@RestController
@RequestMapping("/customers")
@CrossOrigin(origins = "http://localhost:3000")
public class CustomerController {

  @Autowired
  private CustomerService customerService;

  @GetMapping
  ResponseEntity<List<CustomerEntity>> getAllCustomers() {
    Optional<List<CustomerEntity>> customers = customerService.getAllCustomers();

    if (!customers.isPresent()) {
      return new ResponseEntity<List<CustomerEntity>>(HttpStatus.NOT_FOUND);
    }

    return new ResponseEntity<List<CustomerEntity>>(
      customers.get(), HttpStatus.OK
    );
  }

  @PostMapping("")
  CustomerEntity createCustomer(@RequestBody CustomerEntity customerData) {
    return customerService.createCustomer(customerData);
  }

  @GetMapping("/balance/{email}")
  CustomerBalance getCustomerBalanceByEmail(@PathVariable String email) {
    return customerService.getCustomerBalance(email);
  }

  @PutMapping("")
  ResponseEntity<CustomerEntity> updateCustomer(@RequestBody CustomerEntity customerData) {
    Optional<CustomerEntity> updatedCustomer = 
      customerService.updateCustomer(customerData);

    if (!updatedCustomer.isPresent()) {
      return new ResponseEntity<CustomerEntity>(HttpStatus.NOT_FOUND);
    } else {   
      return new ResponseEntity<CustomerEntity>(updatedCustomer.get(), HttpStatus.OK);
    }
     
  }

  @DeleteMapping("/{id}")
  ResponseEntity<CustomerEntity> deleteCustomer(@PathVariable String id) {
    Optional<CustomerEntity> customer = customerService.deleteCustomer(id);

    if (!customer.isPresent()) {
      return new ResponseEntity<CustomerEntity>(HttpStatus.NOT_FOUND);
    } else {
      return new ResponseEntity<CustomerEntity>(customer.get(), HttpStatus.OK);
    }
  }

}

