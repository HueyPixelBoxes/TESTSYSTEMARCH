package com.okta.developer.animals.bird.external.service;

import com.okta.developer.animals.bird.external.dto.BirdIdSpecie;

import java.util.List;

public interface BirdExternalService {
    List<BirdIdSpecie> getAllBirdIdSpecie();
}
