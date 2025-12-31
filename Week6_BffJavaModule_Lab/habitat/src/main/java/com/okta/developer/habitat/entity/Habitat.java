package com.okta.developer.habitat.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Habitat {
    
    @Id
    private String id;

    private String description;

    public Habitat() {}

    public Habitat(String id, String description) {
        this.id = id;
        this.description = description;
    }

    public String getHabitatCode() {
        return id;
    }

    public String getDescription() {
        return description;
    }
}
