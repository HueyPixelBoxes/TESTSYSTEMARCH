package com.okta.developer.bird_bff.controller;

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
import com.okta.developer.animals.bird.internal.service.BirdInternalService;
import com.okta.developer.bird_bff.dto.BirdHabitatDesc;
import com.okta.developer.habitat.external.dto.HabitatDescDto;
import com.okta.developer.habitat.external.service.HabitatInfo;

@RestController
@RequestMapping("/bird")
class BirdController {
    
    private final BirdInternalService birdInternalService;

    private final HabitatInfo habitatExternalService;

    @Autowired
    BirdController(BirdInternalService birdInternalService, HabitatInfo habitatExternalService) {
        this.birdInternalService = birdInternalService;
        this.habitatExternalService = habitatExternalService;
    }

    @GetMapping()
    List<Bird> getBird() {
        return birdInternalService.get();
    }

    @PostMapping()
    void saveBird(@RequestBody Bird bird) {
        birdInternalService.save(bird);
    }

    @GetMapping("/test")
    ResponseEntity testEndpoint() {
        return ResponseEntity.ok("Hello Bird");
    }

    @GetMapping("/{id}")
    ResponseEntity getBirdIdSpecieHabitatDesc(@PathVariable Long id) {

        Optional<Bird> bird = birdInternalService.getBirdById(id);

        if (bird.isPresent()) {
            Optional<HabitatDescDto> habitatDesc = 
                habitatExternalService.getHabitatDescription(
                    bird.get().getHabitatCode()
                );

            if (habitatDesc.isPresent()) {

                BirdHabitatDesc birdHabitatDesc = new BirdHabitatDesc(
                    bird.get(),
                    habitatDesc.get()
                );

                return ResponseEntity.ok(birdHabitatDesc);

            } else {
                return ResponseEntity.notFound().build();
            }

        } else {
            return ResponseEntity.notFound().build();
        }

    }

}
