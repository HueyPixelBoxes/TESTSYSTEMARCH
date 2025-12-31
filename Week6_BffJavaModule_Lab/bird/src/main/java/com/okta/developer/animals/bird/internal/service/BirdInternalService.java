package com.okta.developer.animals.bird.internal.service;

import com.okta.developer.animals.bird.entity.Bird;
import com.okta.developer.animals.bird.external.dto.BirdIdSpecie;
import com.okta.developer.animals.bird.internal.dto.BirdInternalDto;

import java.util.List;
import java.util.Optional;

public interface BirdInternalService {
    List<BirdIdSpecie> getAllBirdIdSpecie();

    void save(Bird Bird);

    List<Bird> get();

    Optional<Bird> getBirdById(Long id);
}
