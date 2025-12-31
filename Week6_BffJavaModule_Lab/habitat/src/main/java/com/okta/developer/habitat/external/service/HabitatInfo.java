package com.okta.developer.habitat.external.service;

import java.util.Optional;

import com.okta.developer.habitat.entity.Habitat;
import com.okta.developer.habitat.external.dto.HabitatDescDto;

public interface HabitatInfo {
    public Optional<Habitat> getHabitatInfo(String habitatCode);

    public Optional<HabitatDescDto> getHabitatDescription(String habitatCode);
}
