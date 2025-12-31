package com.okta.developer.animals.bird.internal.dto;

import com.okta.developer.animals.bird.external.dto.BirdIdSpecie;

public record BirdInternalDto(Long id, String specie) 
        implements BirdIdSpecie {
            
    public Long getId() {
        return id;
    }

    public String getSpecie() {
        return specie;
    }

} 