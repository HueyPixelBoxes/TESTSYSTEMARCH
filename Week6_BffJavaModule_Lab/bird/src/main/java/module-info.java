

module com.okta.developer.modules.bird {

    requires spring.web;
    requires spring.beans;
    requires spring.context;
    requires spring.data.commons;
    requires spring.data.jpa;
    requires jakarta.persistence;
    requires modelmapper;
    requires spring.boot;
    requires spring.boot.autoconfigure;

    exports com.okta.developer.animals.bird.entity
            to bird_bff;

    exports com.okta.developer.animals.bird.internal.service
            to bird_bff;

    exports com.okta.developer.animals.bird.internal.dto
            to bird_bff;

    exports com.okta.developer.animals.bird.external.service;

    exports com.okta.developer.animals.bird.external.dto;


}