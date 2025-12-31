module com.okta.developer.modules.habitat {

    requires spring.web;
    requires spring.beans;
    requires spring.context;
    requires spring.data.commons;
    requires spring.data.jpa;
    
    requires jakarta.persistence;
    requires spring.boot;
    requires spring.boot.autoconfigure;

    exports com.okta.developer.habitat.external.dto
        to bird_bff;
   
    exports com.okta.developer.habitat.external.service;

    exports com.okta.developer.habitat.entity
        to bird_bff;
    
}