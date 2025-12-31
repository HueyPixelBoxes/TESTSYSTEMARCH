module com.okta.developer.modules.app {

    requires spring.web;
    requires spring.boot;
    requires spring.boot.autoconfigure;
    requires spring.beans;
    requires spring.context;
    requires modelmapper;
    requires com.okta.developer.modules.bird;
    requires com.okta.developer.modules.habitat;
    requires bird_bff;

    exports com.okta.developer;
}