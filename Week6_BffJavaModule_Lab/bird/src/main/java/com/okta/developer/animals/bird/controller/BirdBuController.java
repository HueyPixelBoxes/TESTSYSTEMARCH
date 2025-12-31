package com.okta.developer.animals.bird.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.okta.developer.animals.bird.entity.Bird;
import com.okta.developer.animals.bird.internal.dto.BirdInternalDto;
import com.okta.developer.animals.bird.internal.service.BirdInternalService;

@RestController
@RequestMapping("/bird-backup")
class BirdBuController {

    @Autowired
    private BirdInternalService birdService;

    BirdBuController(BirdInternalService birdPersistence) {
        this.birdService = birdPersistence;
    }

    @GetMapping()
    List<Bird> getBird() {
        return birdService.get();
    }

    @PostMapping()
    void saveBird(@RequestBody Bird bird) {
        birdService.save(bird);
    }

    // @GetMapping("/{id}")
    // ResponseEntity getBirdIdSpecieHabitatDesc(@PathVariable Long id) {
    //     Optional<BirdInternalDto> bird = birdService.getBirdIdSpecieHabitatDesc(id);
        
    //     if (bird.isPresent()) {
    //         return ResponseEntity.ok(bird.get());
    //     } else {
    //         return ResponseEntity.notFound().build();
    //     }
    // }

}
