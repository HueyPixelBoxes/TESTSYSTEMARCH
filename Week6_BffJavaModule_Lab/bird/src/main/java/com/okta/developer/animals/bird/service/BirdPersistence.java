package com.okta.developer.animals.bird.service;

import java.util.List;
import java.util.Optional;

import com.okta.developer.animals.bird.external.service.BirdExternalService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.okta.developer.animals.bird.entity.Bird;
import com.okta.developer.animals.bird.external.dto.BirdIdSpecie;
import com.okta.developer.animals.bird.internal.dto.BirdInternalDto;
import com.okta.developer.animals.bird.internal.service.BirdInternalService;
// import com.okta.developer.habitat.external.dto.HabitatDescDto;


@Component
class BirdPersistence implements BirdInternalService, BirdExternalService {

    private BirdRepository birdRepository;


    // @Autowired
    // private ModelMapper modelMapper;

    @Autowired
    public BirdPersistence(
            BirdRepository birdRepository
    ) {
        this.birdRepository = birdRepository;
    }

    @Override
    public void save(Bird bird) {
        birdRepository.save(bird);
    }

    public List<Bird> get() {
        List<Bird> birds = birdRepository.findAll();
        return birds;
    }

    public Optional<Bird> getBirdById(Long birdId) {
        Optional<Bird> bird = birdRepository.findById(birdId);
        return bird;
    }

    public List<BirdIdSpecie> getAllBirdIdSpecie() {
        return birdRepository.getAllBirds();
    }


}
