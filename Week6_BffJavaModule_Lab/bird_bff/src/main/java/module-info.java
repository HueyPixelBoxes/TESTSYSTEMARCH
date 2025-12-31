module bird_bff {
    requires spring.web;
    requires spring.beans;
    requires spring.context;
    requires spring.data.commons;

    requires com.okta.developer.modules.bird;

    requires com.okta.developer.modules.habitat;

    exports com.okta.developer.bird_bff.controller
        to com.okta.developer.modules.app;
}
