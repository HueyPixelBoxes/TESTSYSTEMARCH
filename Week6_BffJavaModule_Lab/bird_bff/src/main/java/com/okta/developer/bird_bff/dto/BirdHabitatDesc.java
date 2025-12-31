package com.okta.developer.bird_bff.dto;

import com.okta.developer.animals.bird.entity.Bird;
import com.okta.developer.animals.bird.external.dto.BirdIdSpecie;
import com.okta.developer.habitat.entity.Habitat;
import com.okta.developer.habitat.external.dto.HabitatDescDto;

public record BirdHabitatDesc(Bird birdIdSpecie, HabitatDescDto habitatDescDto) {
    public BirdHabitatDesc {
        if (birdIdSpecie == null) {
            throw new IllegalArgumentException("BirdIdSpecie cannot be null");
        }
        if (habitatDescDto == null) {
            throw new IllegalArgumentException("HabitatDescDto cannot be null");
        }
    }
    
}
