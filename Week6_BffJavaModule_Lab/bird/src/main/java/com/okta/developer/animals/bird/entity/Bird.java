package com.okta.developer.animals.bird.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Bird {

    @Id
    @GeneratedValue (strategy = GenerationType.SEQUENCE)
    private Long id;

    private String specie;

    private String habitatCode;

    public Bird() {
    }

    public Bird(String specie, String habitatCode) {
        this.specie = specie;
        this.habitatCode = habitatCode;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSpecie() {
        return specie;
    }

    public void setSpecie(String specie) {
        this.specie = specie;
    }

    public String getHabitatCode() {
        return habitatCode;
    }

    public void setHabitatCode(String code) {
        habitatCode = code;
    }
}
