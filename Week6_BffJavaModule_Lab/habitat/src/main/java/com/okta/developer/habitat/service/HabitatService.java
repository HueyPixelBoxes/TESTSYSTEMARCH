package com.okta.developer.habitat.service;

// import com.okta.developer.animals.bird.external.dto.BirdIdSpecie;
// import com.okta.developer.animals.bird.external.service.BirdExternalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.okta.developer.habitat.entity.Habitat;
import com.okta.developer.habitat.external.dto.HabitatDescDto;
import com.okta.developer.habitat.external.service.HabitatInfo;

import java.util.List;
import java.util.Optional;

@Service
public class HabitatService implements HabitatInfo {


    @Autowired
    private HabitatRepository habitatRepository;

    @Override
    public Optional<Habitat> getHabitatInfo(String habitatCode) {
        Optional<Habitat> habitat = habitatRepository.findById(habitatCode);
        return habitat;
    }

    @Override
    public Optional<HabitatDescDto> getHabitatDescription(String habitatCode) {
        Optional<HabitatDescDto> habitat = habitatRepository.findByIdIgnoreCase(habitatCode);
        return habitat;
    }
    

}
